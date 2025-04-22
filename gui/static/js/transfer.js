window.addEventListener('DOMContentLoaded', () => {
    window.myApi.getGroupMenus().then((menus) => {
        updateMenu(menus.openMenus, "container");
        const wrapper = document.getElementById('container');
        wrapper.addEventListener('click', handleNavItemClick);
    })

    window.myUpload.init();
    initLnkData();
})

document.addEventListener('file-path',  async (e) => {
    await window.myApi.addLnk(e.detail.path);
    initLnkData();
});

function handleNavItemClick(event){
    const isItemClicked = event.target.closest(".icon-item");
    if (!isItemClicked) return;

    let element = event.target;
    while (element && element !== event.currentTarget) {
        if (element.classList.contains('icon-item')) {
            window.myApi.openSite({url:element.dataset.url, name:element.dataset.name});
            break;
        }
        element = element.parentNode;
    }
}

function updateMenu(menus, pid) {
    const box = document.getElementById(pid);
    box.innerHTML="";
    menus.forEach(item => {
        let navItem = `
                <div data-url="${item.url}" data-name="${item.name}" class="icon-item">
                    <div class="icon"><img src="${item.img}" alt="${item.tag}"></div>
                    <span class="icon-label">${item.tag}</span>
                </div>
			`;
        box.innerHTML += navItem;
    });
}


function initLnkData() {
    window.myApi.getLnks().then((lnks) => {
        updateLnk(lnks, "lnkBox");
        const wrapper = document.getElementById('lnkBox');
        wrapper.addEventListener('click', handleLnkItemClick);
    })
}

function handleLnkItemClick(event){

    const closeBtn = event.target.closest('.close-btn');
    if (closeBtn) {
        event.stopPropagation();
        const iconItem = closeBtn.closest('.icon-item');
        window.myApi.removeLnk(iconItem.dataset.name).then(() => {
            initLnkData();
        })
        return false;
    }

    const isItemClicked = event.target.closest(".icon-item");
    if (isItemClicked) {
        let element = event.target;
        while (element && element !== event.currentTarget) {
            if (element.classList.contains('icon-item')) {
                window.myApi.openFile(element.dataset.url);
                break;
            }
            element = element.parentNode;
        }
    }
}

function updateLnk(lnks, pid) {
    const box = document.getElementById(pid);
    box.innerHTML="";
    lnks.forEach(item => {
        let navItem = `
                <div data-url="${item.exePath}" data-name="${item.name}" class="icon-item">
                    <button data-name="${item.name}" class="close-btn" aria-label="Close"></button>
                    <div class="icon"><img src="${item.icon}" alt="${item.name}"></div>
                    <span class="icon-label">${item.name}</span>
                </div>
			`;
        box.innerHTML += navItem;
    });
}