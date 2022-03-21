// // eslint-disable-next-line import/no-extraneous-dependencies
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer({
//   poweredByHeader: false,
//   trailingSlash: true,
//   basePath: '',
//   // The starter code load resources from `public` folder with `router.basePath` in React components.
//   // So, the source code is "basePath-ready".
//   // You can remove `basePath` if you don't need it.
//   reactStrictMode: true,
// })

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
    prependData: `
    @import "abstracts/variables.scss";
    @import "abstracts/mixins.scss";
    @import "base/animations.scss";
  `,
  },
}
