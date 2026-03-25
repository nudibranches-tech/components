"use strict";
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['lucide-react']
    },
    sassOptions: {
        includePaths: ['./src/styles'],
    },
};
module.exports = nextConfig;
//# sourceMappingURL=next.config.js.map