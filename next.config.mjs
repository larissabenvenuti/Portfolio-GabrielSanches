const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, 
  },
  images: {
    domains: [], 
  },
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
