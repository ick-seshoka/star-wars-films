const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@enums": path.resolve(__dirname, "./src/enums"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
};
