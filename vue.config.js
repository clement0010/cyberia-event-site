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
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cyberia-event-site/'
    : '/',
};
