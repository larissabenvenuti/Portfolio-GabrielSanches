const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
  experimental: {
    esmExternals: true, 
  },
};

export default nextConfig;