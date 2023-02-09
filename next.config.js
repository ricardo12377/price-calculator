/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    strapiPriceCalculator: process.env.NEXT_API
  }
};

module.exports = nextConfig;
