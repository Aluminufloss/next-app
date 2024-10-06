/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
  sassOptions: {
    prependData: `@import "./src/styles/variables.scss";`,
  },
};

export default nextConfig;
