const headers = require('./headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: false,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US' 
  },
  images: {
    loader: 'imgix',
    domains: ['mtlspots.imgix.net'],
    path: 'mtlspots.imgix.net',
  },

  
}

module.exports = {
  // append this at the bottom of your next.config.js file
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
};