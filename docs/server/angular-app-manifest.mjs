
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 640, hash: '77ae381b5e7c838d6cf50714f2666828b7fe464f3020f0305d87d84946e306c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'befc6be95ec1adf862371e498fb61b8ee5442f11b3be49b118ac6b932284cb8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 22151, hash: '991fadffb89730ab7a62e18ce4611488a39e964c118c5d2f01043efd91c594dc', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21866, hash: '38ad2c9aa8bfc6798c906dbfee40a86d33a871e39b22c966ae5d412f36bef0f9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23712, hash: '08bc29f00edd70ff803e072ee074fceb155941cc91acf3cfc982d3e6c446342d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PVVONERT.css': {size: 849, hash: 'vowDjKZU4gA', text: () => import('./assets-chunks/styles-PVVONERT_css.mjs').then(m => m.default)}
  },
};
