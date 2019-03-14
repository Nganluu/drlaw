module.exports = {
  devServer(configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.proxy = {
        '/api': {
          target: 'http://192.168.1.16:8080',
          changeOrigin: true,
        },
      };

      config.compress = false;

      return config;
    };
  },
};