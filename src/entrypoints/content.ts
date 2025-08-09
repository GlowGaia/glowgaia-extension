export default defineContentScript({
    matches: ['*://*.gaiaonline.com/*'],
    runAt: 'document_end',
    main() {
        console.log('[GlowGaia] content script loaded on', location.href);

        // Minimal placeholder UI (non-intrusive)
        const id = 'glowgaia-root';
        if (!document.getElementById(id)) {
            const el = document.createElement('div');
            el.id = id;
            el.style.position = 'fixed';
            el.style.bottom = '16px';
            el.style.right = '16px';
            el.style.zIndex = '2147483647';
            el.style.padding = '8px 10px';
            el.style.border = '1px solid #e5e7eb';
            el.style.borderRadius = '8px';
            el.style.background = 'white';
            el.textContent = 'GlowGaia placeholder';
            document.documentElement.appendChild(el);
        }
    },
});
