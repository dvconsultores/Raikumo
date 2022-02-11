module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
  publicPath:
    process.env.VUE_APP_PUBLIC_PATH === "production" ? "/raikumo/" : "/raikumo/"
};
