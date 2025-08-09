import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: 'src',
    manifest: {
        name: 'GlowGaia',
        description: 'Extensions that will make Gaia Online glow',
        version: '0.1.0',
        manifest_version: 3,
        permissions: ['storage'],
        host_permissions: ['https://*.gaiaonline.com/*'],
    },
    modules: ['@wxt-dev/module-svelte'],
    webExt: {
        startUrls: ['https://www.gaiaonline.com/'],
    },
});
