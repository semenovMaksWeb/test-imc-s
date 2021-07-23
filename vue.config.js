module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "",

  lintOnSave: false,
  css: {
    extract: true,
  },
};
