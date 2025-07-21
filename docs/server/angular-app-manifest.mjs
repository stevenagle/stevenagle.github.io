
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
    'index.csr.html': {size: 640, hash: '2fabc4754c5bc9a5f4546338896c5c76a6c8e5450ed4460c473e24ad8d2e2bb6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '4d10650c08194f35e02690e479bf83fb31e8d110ff0b671926ef05409f39705a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 22151, hash: '29082eb88c12488b0506b2e3e88a28b9f6eb0ec513caef5700f42eed216a65e0', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23718, hash: '421dbc37e6f4b0c122fb57d4986e07e81191a618ffa12516a32d4b484a0eb095', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21866, hash: 'b9b3c38f0f140a04bf208a42ab27f3abfee1dc2227a800119a03df047e96dbc5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-PVVONERT.css': {size: 849, hash: 'vowDjKZU4gA', text: () => import('./assets-chunks/styles-PVVONERT_css.mjs').then(m => m.default)}
  },
};
