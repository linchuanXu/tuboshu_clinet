



pnpm install

npm config set registry https://registry.npmmirror.com/
pnpm config set registry https://registry.npmmirror.com/
export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
export http_proxy=http://127.0.0.1:7890
export https_proxy=http://127.0.0.1:7890

<!-- rm -rf node_modules/.cache
pnpm build -->

pnpm build
rm -f "/Users/xuchangan/Library/Application Support/tuboshu/data.db"
rm -rf ~/Library/Caches/tuboshu

pnpm start


git tag v2.0.2
git push origin v2.0.2


