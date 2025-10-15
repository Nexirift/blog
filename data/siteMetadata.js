/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Nexirift Blog',
  author: 'Nexirift',
  headerTitle: 'Nexirift Blog',
  description: 'A blog created by the Nexirift team.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.nexirift.com',
  siteRepo: 'https://github.com/Nexirift/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social-card.jpg`,
  locale: 'en-US',
}

module.exports = siteMetadata
