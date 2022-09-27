const { createSecureHeaders } = require("next-secure-headers");

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
  async headers() {
    return [{
      source: "/(.*)",
      headers: createSecureHeaders({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'", "https://maps.googleapis.com/"],
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://maps.googleapis.com/"],
            styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
            imgSrc: ["'self'", "https://mtlspots.imgix.net", "data:", "https://ui8-fleet-html.herokuapp.com/", "https://maps.googleapis.com/", "https://maps.gstatic.com/"],
            fontSrc: ["'self'", 'https:', 'data:'],
          },
        },
        forceHTTPSRedirect: [true, { maxAge: 15768010, includeSubDomains: true }],
        referrerPolicy: "same-origin",

      })
    }];
  },
};