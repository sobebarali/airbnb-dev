/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "upload.wikimedia.org","a0.muscache.com"]
  },
  env: {
    mapbox_key: "pk.eyJ1Ijoic29iZWJhcmFsaSIsImEiOiJjbGE0Mmpjb3UwdjQwM3BtemluaGh4dWpsIn0.h2kE56kLM6wDmJv-H-E3nA"
  },
  reactStrictMode: true,
}

module.exports = nextConfig
