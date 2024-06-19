const { NEXT_PUBLIC_DOCS_URL } = process.env
console.log({ NEXT_PUBLIC_DOCS_URL })
module.exports = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */

      {
        source: '/docs/:path*',
        destination: `${NEXT_PUBLIC_DOCS_URL}/:path*`,
      },
    ]
  },
}
