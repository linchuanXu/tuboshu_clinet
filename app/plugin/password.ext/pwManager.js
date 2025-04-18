class PwManager {
    constructor() {
        this.currentDomain = window.location.hostname;
        this.observer = null;
        this.init();
    }

    init() {
        if (this.hasPasswordFields()) {
            this.setupMutationObserver();
            this.attachToExistingForms();
            this.restoreCredentials();
        }
    }

    hasPasswordFields() {
        return document.querySelector('input[type="password"]') !== null;
    }
    
    setupMutationObserver() {
        this.observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length) {
                    this.handleNewNodes(mutation.addedNodes);
                }
            });
        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    handleNewNodes(nodes) {
        nodes.forEach(node => {
            if (node.nodeType === 1) {
                if (node.querySelector('input[type="password"]')) {
                    this.attachToForm(node);
                    this.restoreCredentials();
                }
            }
        });
    }

    // 绑定已有表单
    attachToExistingForms() {
        document.querySelectorAll('form').forEach(form => {
            this.attachToForm(form);
        });
    }

    attachToForm(form) {
        const passwordField = this.findPasswordField(form);
        const usernameField = this.findUsernameField(form);

        this.overrideAutocomplete(usernameField);
        this.overrideAutocomplete(passwordField);

        if (usernameField) {
            usernameField.addEventListener('input', this.handleInputChange.bind(this));
        }
        passwordField.addEventListener('input', this.handleInputChange.bind(this));

        // 表单提交事件
        form.addEventListener('submit', () => {
            this.saveCredentials();
            setTimeout(this.saveCredentials.bind(this), 100);
        });
    }

    findPasswordField(form) {
        return form.querySelector('input[type="password"]');
    }

    findUsernameField(form) {
        const candidates = [
            'input[type="text"]',
            'input[type="email"]',
            'input[name*="user"]',
            'input[name*="name"]',
            'input[name*="login"]'
        ];

        for (const selector of candidates) {
            const field = form.querySelector(selector);
            if (field) return field;
        }
        return null;
    }

    overrideAutocomplete(field) {
        if (field && field.autocomplete === "off") {
            field.autocomplete = "on";
            setTimeout(() => {
                field.autocomplete = "off";
            }, 1000);
        }
    }

    handleInputChange(e) {
        this.saveCredentials();
    }

    saveCredentials() {
        const form = document.querySelector('form');
        if (!form) return;

        const username = this.findUsernameField(form)?.value;
        const password = this.findPasswordField(form)?.value;

        if (username && password) {
            const data = {
                username,
                password: btoa(unescape(encodeURIComponent(password)))
            };

            localStorage.setItem(this.storageKey, JSON.stringify(data));
        }
    }

    restoreCredentials() {
        const data = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        const retry = () => {
            const form = document.querySelector('form');
            if (!form) return;

            const usernameField = this.findUsernameField(form);
            const passwordField = this.findPasswordField(form);

            this.fillField(usernameField, data.username);
            this.fillField(passwordField, data.password);
        };

        // 立即执行 + 延迟重试
        retry();
        setTimeout(retry, 300);
    }

    fillField(field, value) {
        if (!field || !value) return;

        try {
            const decodedValue = field.type === "password"
                ? decodeURIComponent(escape(atob(value)))
                : value;

            field.value = decodedValue;
            field.setAttribute("value", decodedValue);

            ["input", "change", "blur"].forEach(eventType => {
                field.dispatchEvent(
                    new Event(eventType, {
                        bubbles: true,
                        cancelable: true
                    })
                );
            });
        } catch (e) {
            console.error("字段填充失败:", e);
        }
    }

    get storageKey() {
        return `pm-${this.currentDomain}`;
    }
}

function __initializePasswordManager() {
    if (document.querySelector('input[type="password"]')) {
        new PwManager();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __initializePasswordManager);
} else {
    __initializePasswordManager();
}