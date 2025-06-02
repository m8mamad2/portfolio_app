/** @type {import('next').NextConfig} */

const isGithubPages = true;

const nextConfig = {
  output: 'export',
  typescript:{
    ignoreBuildErrors: true
  },
  // basePath:'/your-repo-name',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? '/portfolio' : '',
    assetPrefix: isGithubPages ? '/portfolio/' : '',
};

export default nextConfig;
