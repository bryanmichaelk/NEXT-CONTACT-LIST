/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    BEARER_TOKEN: process.env.BEARER_TOKEN,
  },
  images:{
    loader: 'default',
    remotePatterns:[
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '/**',
        }
    ]
  }
};


export default nextConfig;
