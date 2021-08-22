
module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production'
        ? "/" : '/',
    devServer: {
        proxy: {
            '/api': {
                target: "https://addons-ecs.forgesvc.net/api/v2",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
        }
    }
}