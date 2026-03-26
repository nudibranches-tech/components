# Components

Contains reusable packages.

## Packages

### oidc-axa

OIDC components for AXA.

## To test a package

```bash
cd oidc-axa
pnpm install
pnpm run build
pnpm pack
cd ../test-vite
rm -rf node_modules pnpm-lock.yaml package-lock.json
pnpm add ../oidc-axa/nudibranches-tech-components-oidc-axa-1.0.0.tgz
pnpm dev
```
