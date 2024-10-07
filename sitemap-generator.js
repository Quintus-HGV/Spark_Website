const React = require('react');
const Sitemap = require('react-router-sitemap').default;
const router = require('./src/App').default;

function generateSitemap() {
  new Sitemap(router)
    .build('https://spark-iucee-rvce.vercel.app') // Your website URL
    .save('./public/sitemap.xml'); // Save the sitemap to the public folder
}

generateSitemap();
