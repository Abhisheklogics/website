/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    deviceSizes: [640, 750, 1080, 1920], // Device sizes for responsive images
  },
  eslint:{
    ignoreDuringBuilds:true
  }
  
};

export default nextConfig;
