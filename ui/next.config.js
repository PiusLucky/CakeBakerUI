/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      loader: 'imgix',
      domains: ['gravatar.com', 'images.unsplash.com', 'dummyimage.com'],
      path: '',
    },
}

module.exports = nextConfig
