/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'i.imgur.com',
            },
          ],
    },
    output: 'export' // COMMENT OUT IF USING BACKEND
}

module.exports = nextConfig
