# Components

Contains reusable packages.

## Packages

### oidc-axa

OIDC components for AXA.

## To test a package

```bash
cd oidc-axa
npm run build
npm pack
cd ../test-vite
rm -rf node_modules pnpm-lock.yaml package-lock.json
npm i ../oidc-axa/nudibranches-tech-components-oidc-axa-1.0.0.tgz --legacy-peer-deps
npm run dev
```
