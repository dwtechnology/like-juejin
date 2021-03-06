module.exports = {
    baseUrl: './',
    devServer: {
        host: '127.0.0.1',
        // host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/juejin': {
                target: 'https://timeline-merger-ms.juejin.im/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/juejin': ''
                }
            },
            '/detail':{
                target: 'https://post-storage-api-ms.juejin.im/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/detail': ''
                }
            },
            '/local': {
                target: 'http://134.175.224.127:7002',
                // target: 'http://0.0.0.0:7002',
                changeOrigin: true,
                pathRewrite: {
                    '^/local': ''
                }
            },
            
            'http://izaya-1256042946.cos.ap-chengdu.myqcloud.com/':{
                target: 'http://izaya-1256042946.cos.ap-chengdu.myqcloud.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}