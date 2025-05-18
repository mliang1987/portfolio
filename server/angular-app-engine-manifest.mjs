
export default {
  basePath: 'https://mliang1987.github.io/portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
