const { DOCS_URL } = process.env
console.log({ DOCS_URL })
module.exports = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */

      {
        source: '/docs/:path*',
        destination: `${DOCS_URL}/:path*`,
      },
    ]
  },
}
