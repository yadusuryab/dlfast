/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent-ham3-1.cdninstagram.com',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
