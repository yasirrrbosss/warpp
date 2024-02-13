/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/fargoblin',
          destination: 'https://fargoblin.vercel.app/',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;