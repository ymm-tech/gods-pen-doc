# 源码部署

码良项目目前（2019/11/1）已经完全开源。因此这里说明下如何使用源码将整个项目运行起来。

## 项目构成

码良系统由3个项目构成，分别是 [gods-pen-server](https://github.com/ymm-tech/gods-pen-server) 码良服务端、[gods-pen-admin](https://github.com/ymm-tech/gods-pen-admin) 码良管理后台以及于7月份就已经开源的 [gods-pen](https://github.com/ymm-tech/gods-pen) 码良编辑器。

从上述项目的名称上很容易看出各部分之功能，这里不再赘述。

其中码良编辑器和码良管理后台是 vue 项目，码良服务端是基于 egg 的 nodejs 项目。

## 开发环境运行

鉴于项目略多，我们开发了一个小工具来帮助您完成大部分工作，比如项目拉取、依赖安装、dev 运行等。

```shell
# 全局安装 gods-pen-cli 工具
npm install gods-pen-cli -g
```
运行 `gods-pen serve help` 可以看到有三个子命令。

![](https://cos.56qq.com/fis/2019110217582118580181044bc9f6ba.png)

### `gods-pen serve fetch`

使用 `gods-pen serve fetch` 拉取代码并安装依赖。工具自动在当前目录（cwd）目录拉取项目源码（如果 git 可用，则使用git），然后依次安装项目依赖。

![](https://cos.56qq.com/fis/201911021811181022e4a6ceca272c75.gif)

当然，你也可以不借助这个工具，从 github clone 项目即可。安装依赖也很简单，分别在三个项目根目录下 `yarn` 搞定。

### 项目配置

码良依赖了 es、redis、mysql、邮件、oss服务，因此需要配置这些服务的信息。

如果你有读过前一篇文档“docker 部署”部分，您应该知道我们在 docker 部署方式下默认提供了 es、redis、mysql 服务。但是在源码部署方式下，很难为您准备好这一切第三方服务，您需要选用云服务商提供的服务或者自建服务（安装 mysql、es、redis），这里不再详细叙述。对了，目前仅支持阿里云的 oss 服务（使用了对应的api）。

在获得了上述第三方服务之后，除 mysql 外，您无需对这些服务进行额外的初始化操作。当然，建立 oss bucket 这种操作就不提了。

mysql 需要提前使用 `gods-pen-server/sql/init.sql` 来初始化表结构和表数据。

```shell
mysql -h <host> -u<user> -p<password> < sql/init.sql # 请将<host> <user> <password> 换成实际值
```

至此，配置准备工作完成。

我们有三个项目，但是实际上，您无需逐一配置，我们已经提供了合适的默认配置，你只需要配置好第三方服务的信息即可，将信息填入 `gods-pen-server/config/config.dev.js`

![](https://cos.56qq.com/fis/20191102184534166000ef7770db9771.gif)

### `gods-pen serve start`

在当前目录（记得从 gods-pen-server 返回上一级）下运行 `gods-pen serve start`，即可启动所有服务。

![](https://cos.56qq.com/fis/20191102185449486bd26d09f88405d7.gif)

启动成功后访问 http://127.0.0.1:8567 注册用户、登陆系统

## 生产环境部署

生产环境的部署分两部分，前端静态资源的部署和 nodejs 服务的部署。

### nodejs 服务

将 gods-pen-server 项目 clone 到服务器内，这一步您也可以通过 gods-pen 工具完成，类似上面开发环境的操作。

依赖安装好后，将第三方 es、redis、mysql、邮件、oss 服务信息配置到 `gods-pen-server/config/config.production.js` 内。

运行 `npm run serve` 启动服务，服务启动后，服务地址为 http://127.0.0.1:7051/api

您应该使用 nginx 或其他服务器软件对 api 服务进行合理配置，使得外网能方便访问，比如将 abc.com/api 转发到 127.0.0.1:7051/api

```nginx
server {
  listen 80;
  server_name abc.com; # 您的实际 ip 或者域名
  root /usr/share/nginx/html;

  # api 反向代理
  location ^~ /api {
    proxy_pass http://127.0.0.1:7051;
  }
}
```

### 前端项目部署

将 gods-pen-admin 和 gods-pen 项目 clone 下来，或者通过 gods-pen 工具也行。

安装依赖，然后在 `gods-pen-admin/src/config/production.js` 和 `gods-pen/src/config/production.js` 中添加配置 `API_PATH`

```js
module.exports = {
  API_PATH: 'http://abc.com/api' # 配置为实际 nodejs api 服务外网可访问的路径
}
```

在当前目录（gods-pen-admin 的上一级）运行 `gods-pen serve build` 开始构建项目，完成后所有输出文件集中在当前目录下的 gods-pen-dist 下。

使用 nginx 或者其他服务器软件启动静态资源服务，将 gods-pen-dist 下所有文件复制到服务器软件指定目录下，您可以通过 http://abc.com/admin 访问到码良系统的入口页面

以下是一个 nginx 配置文件示例

```nginx
server {
  listen 80;
  server_name abc.com; # 您的实际 ip 或者域名
  root /usr/share/nginx/html; # 静态资源文件存放路径

  # gzip
  gzip on;
  gzip_min_length 256;
  gzip_vary on;
  gzip_types *;

  # 所有静态资源及缓存
  location ~* .*\.(jpg|gif|jpeg|css|png|js|wasm) {
    expires 10d;
  }

  # view路径，即渲染器，需要开启 history 模式
  location ~* ^\/view\/[a-zA-Z0-9]+(\/|\?.*|)$ {
    index index.html;
    try_files $uri $uri/ /view/index.html;
  }

  # api 反向代理
  location ^~ /api {
    proxy_pass http://127.0.0.1:7051;
  }
}
```

## troubleshooting

### 拉取代码失败

由于一些众所周知的原因，github 的服务在某些时间某些网络环境下是不稳定的，如果出现了代码拉取失败的情况，请为你的命令行环境设置代理后再运行 `gods-pen serve fetch`

### 安装依赖失败

![](https://camo.githubusercontent.com/e3b84a0d18a25c6e4f1bab0415f514fc08955443/68747470733a2f2f636f732e353671712e636f6d2f6669732f32303139313031323130313033323635333732323031393062346430313331622e706e67)

这是由于缺少 c++ 编译环境造成部分 npm包编译失败，则通常发生在 window 系统上，您可以尝试全局安装 windows-build-tools

>windows-build-tools 是一个 npm 包，可以一键安装 c++ 编译所需的 python27、Visual Studio、C++ Build Tool 等。 Both installations are conflict-free, meaning that they do not mess with existing installations of Visual Studio, C++ Build Tools, or Python

另外上述问题在 python2 命令不可用时也会发生，如果您的机器没有安装 python 或者只安装了 python3 时，请安装 python27，或使用 pyenv 将 python 版本切换至 python2
