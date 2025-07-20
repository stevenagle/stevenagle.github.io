
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
    'index.csr.html': {size: 649, hash: 'ddada7481585854424af2ffe9fc3571072bc3e5352e0c94292c566de40836caf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '33b2a36420743940aa3403bd8c34644749c21929de8a466f8fa28e2561731ef6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21875, hash: '4fc7646c7d1c1c876bb8d5d0711265a313c6263ed41b00c9390f459c57fca66d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 22160, hash: '791b9b6820c7e09f4f300cabe03bc9002769d3b30d221695c0df24ea9bda9df7', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22083, hash: 'b01072c0a5ad43426cfef8f1f766e3237031297204709c9563014a6d4a1f19de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PVVONERT.css': {size: 849, hash: 'vowDjKZU4gA', text: () => import('./assets-chunks/styles-PVVONERT_css.mjs').then(m => m.default)}
  },
};
