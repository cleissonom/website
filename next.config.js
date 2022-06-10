/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
   ...nextConfig,
   images: {
      domains: ['github.com'],
    },
    i18n: {
      locales: ['en', 'pt', 'es', 'fr', 'it', 'ja', 'hi', 'ru', 'zh', 'ar'],
      defaultLocale: 'en',
    },
}
