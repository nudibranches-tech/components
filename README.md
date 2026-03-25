
# Components

Contains reusable components.

## To test

```bash
npm run build
npm pack
cd test-vite
rm -rf node_modules pnpm-lock.yaml package-lock.json
npm i ../nudibranches-tech-components-version.tgz --legacy-peer-deps
npm run dev
```
