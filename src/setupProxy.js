const proxy = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(
    '/asimov',
    proxy({
      target: 'https://www.jianshu.com',
      changeOrigin: true
    })
  );
  app.use(
    '/api',
    proxy({
      target: 'http://10.20.152.65:9090',
      changeOrigin: true
    })
  );
  

};
