/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/eneswastaken',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/ensomgg',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/',
        permanent: true,
      },
      {
        source: '/new',
        destination: 'https://ensomg.net.tr',
        permanent: true,
      },
    ]
  },
}
