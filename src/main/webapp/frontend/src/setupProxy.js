const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        'api/v1',
        createProxyMiddleware({
            target: 'http://localhost:9080/',
            changeOrigin: true,
        })
    );
    app.use(
        'api/v1/users',
        createProxyMiddleware({
            target: 'http://localhost:9080/',
            changeOrigin: true,
        })
    );
};