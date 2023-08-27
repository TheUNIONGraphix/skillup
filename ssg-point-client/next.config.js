/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  images: {
    domains: ['m.shinsegaepoint.com','via.placeholder.com'],
  },
})