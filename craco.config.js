const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@enums": path.resolve(__dirname, "./src/enums"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
};
