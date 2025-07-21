
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
    'index.csr.html': {size: 640, hash: 'ea0937b6e36a6f69b59315d53b26a5f09d90930cab766dc5f10e5aceee9d1994', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '9f3e670d87902fcd8e2ba9a28358e9e899cd5ea53670ae9ccf7c48a9f1da57e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23718, hash: 'ba8b43a7a1fc9b67e27c6a43542b09ab5ce472a3127c4212504616d7958bca5e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 22151, hash: '2c80a23bacc0f5a46f03b0b7790c597a27443cf58910c6e4ea2935304290cc8e', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21866, hash: '3a92bf15eda2103f764ea05bf7df1e57f12cfb6dbba25ade05a14d16bde638c9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-PVVONERT.css': {size: 849, hash: 'vowDjKZU4gA', text: () => import('./assets-chunks/styles-PVVONERT_css.mjs').then(m => m.default)}
  },
};
