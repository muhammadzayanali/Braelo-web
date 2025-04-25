/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'storage.googleapis.com', // Add this for Firebase Storage
        // Add other domains if needed
      ],
    },
    // ... other configurations
  }
  
export default nextConfig;
