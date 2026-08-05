const fs = require('fs');
const path = require('path');

const src1 = 'C:\\Users\\bojja\\.gemini\\antigravity-ide\\brain\\d22e7c6d-b8c1-426c-98bc-af2ced04c536\\media__1785919243268.jpg';
const src2 = 'C:\\Users\\bojja\\.gemini\\antigravity-ide\\brain\\d22e7c6d-b8c1-426c-98bc-af2ced04c536\\media__1785919259401.jpg';
const dest1 = path.join(__dirname, 'public', 'fmcg_product_framework.jpg');
const dest2 = path.join(__dirname, 'public', 'running_a_brand_framework.jpg');

try {
  if (fs.existsSync(src1)) {
    fs.copyFileSync(src1, dest1);
  }
  if (fs.existsSync(src2)) {
    fs.copyFileSync(src2, dest2);
  }
} catch (e) {
  console.error('Error copying infographic images:', e);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allow easy deployment without special image optimization servers
  },
}

module.exports = nextConfig
