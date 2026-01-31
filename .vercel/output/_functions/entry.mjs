import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_kCiQ4Giu.mjs';
import { manifest } from './manifest_CZOXzUZH.mjs';

const serverIslandMap = new Map([
	['GoogleMap', () => import('./chunks/GoogleMap_BaPweA7l.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/components-demo.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/locations/_slug_.astro.mjs');
const _page5 = () => import('./pages/locations.astro.mjs');
const _page6 = () => import('./pages/privacy-policy.astro.mjs');
const _page7 = () => import('./pages/services/_slug_.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/terms-of-service.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/components-demo.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/locations/[slug].astro", _page4],
    ["src/pages/locations/index.astro", _page5],
    ["src/pages/privacy-policy.astro", _page6],
    ["src/pages/services/[slug].astro", _page7],
    ["src/pages/services/index.astro", _page8],
    ["src/pages/terms-of-service.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9446d61f-ec82-4fca-96e0-abe282f08c58",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
