function getIPAdress() {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

module.exports = {
  host: getIPAdress(),
  title: '码良',
  base: process.env.NODE_ENV === 'production' ? '/doc/' : '/',
  description: '码良,开源可视化搭建平台,免费可视化搭建平台,在线网页制作平台,网页制作,傻瓜建站系统',
  themeConfig: {
    logo: '/logo.png',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '使用手册',
        link: '/cookbook/introduce'
      },
      {
        text: '组件商城',
        link: 'https://godspen.ymm56.com/shop/'
      },
      // {
      //   text: '视频',
      //   items: [{
      //     text: '使用实例',
      //     link: '/video/cookbook'
      //   }, /*{text: '开发实例', link: '/video/develop'}*/ ]
      // },
      {
        text: '使用视频',
        link: '/video/cookbook'
      },
      {
        text: '开发',
        link: '/develop/introduce'
      },
      {
        text: '开始使用',
        link: 'https://godspen.ymm56.com/admin/'
      },
    ],
    sidebar: {
      '/cookbook/': [
        'introduce',
        'install',
        'source',
        'shop',
        'manage',
        'workspace',
        'space',
        'template',
        'component',
        'canvas',
        'comtree',
        'attr',
        'style',
        'animate',
        'script',
        'tips',
      ],
      '/develop/': [
        'introduce',
        'script',
        'component',
      ],
      '/video/': [
        'cookbook',
      ]
    },
  }
}