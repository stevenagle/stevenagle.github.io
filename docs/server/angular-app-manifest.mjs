
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 649, hash: '5f3b5424b740b021c1124dbf3e6f367dc37991e28d54352ffb6b8a72ffa56ecf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: '349ae2ed797b3a03793bbd044d3b7c83cb0c4dc275cd147862d24b1fc27e243d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21791, hash: 'd796b53691489b5b395a15af1d441a9df21173a746c929a2d222bed9486ecb50', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PVVONERT.css': {size: 849, hash: 'vowDjKZU4gA', text: () => import('./assets-chunks/styles-PVVONERT_css.mjs').then(m => m.default)}
  },
};
