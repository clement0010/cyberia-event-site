module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    devServer: {
      host: 'localhost',
      port: 8080,
      watchOptions: {
        poll: true,
      },
    },
  },

};
