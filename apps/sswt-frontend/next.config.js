/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
};
