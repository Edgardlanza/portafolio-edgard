
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/portafolio-edgard/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/portafolio-edgard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/portafolio-edgard",
    "route": "/Program%20Files/Git/portafolio-edgard/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14409, hash: 'cf1eeb669a054e7f56ad932d5d38a30dbb63607ae069d206128fed1862de772e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13492, hash: 'd942fb67f4bff961e5804ded475b98bc56b3455dc26fd1c1813d50752ccbb350', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SSELGDIT.css': {size: 9046, hash: 'F9eigGbyBmo', text: () => import('./assets-chunks/styles-SSELGDIT_css.mjs').then(m => m.default)}
  },
};
