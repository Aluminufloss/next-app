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
    prependData: `
    @import "./src/styles/variables.scss";
    @import "./src/styles/_mixins.scss";
  `,
  },
};

export default nextConfig;
