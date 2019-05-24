# 部署

现阶段，我们开放了码良服务的注册，您只需要提供一个邮箱即可免费注册使用我们的服务。对于大部分场景和大多数使用者，官方服务已经足够满足您的需求。

尽管如此，本项目也提供了私有部署（On-Premise）能力。基于 docker 及 docker-compose，部署您自己的码良服务。

如无私有部署需求，请跳过此节。

::: warning
<small>为防止被滥用，官方码良服务对于单个页面的访问频次有一定限制（即，某个 url 对应的页面在一段时间内访问频次超限则访问失败），如您的业务场景确实存在单个页面被高频次访问，您可以根据本文档部署自己的服务。</small>
:::

## HOW

### 必要条件

- linux 系统或其他 linux 发行版，或者 macOS
- docker
- docker-compose
- 至少 3GB 内存，10G 可用存储空间 （如不使用 docker 容器提供 es、redis、mysql 全部或部分服务，可适当减少。单个es节点占用约1GB内存，默认启动了两个）

### 获取代码

[项目地址](https://github.com/ymm-tech/gods-pen-docker)，该项目提供了 docker-compose 配置。

```bash
git clone https://github.com/ymm-tech/gods-pen-docker.git
```
或直接下载并解压备用。

### 配置

项目提供了两个配置文件 config.yaml 和 nginx.conf。

config.yaml 集中了码良所有依赖服务的配置，如 redis、mysql 等。其中 redis、mysql、es 服务由相应 docker 容器提供，保持默认配置即可（也可自行配置相关字段，并在 docker-compose.yaml 修改或移除对应服务）；邮件、对象存储不由 docker 容器提供，必须自行填写对应配置（可自建或使用第三方服务）。

nginx.conf 是nginx的配置文件，整合了码良内部的多个服务，是最终交付服务的实际入口。默认包含了最简配置，静态文件服务（含 html5 history 模式的支持，缓存）和api服务的反向代理，如需进行域名绑定等操作，可自行修改该文件进行配置。

### 构建本地镜像

完成配置以后，需要构建本地镜像。在项目根目录下运行 `make build` 或 `docker-compose build` 即可，构建过程耗时约4分钟，请耐心等待。

首次构建后，除非 config.yaml 再次改变，否则无需再次构建。


### 启动服务

完成本地镜像构建以后就可以启动服务了。在项目根目录下运行 `make start-server` 或 `docker-compose up -d` ，服务被依次启动。

启动服务的过程耗时约3分钟，可用 `docker logs <container id>` 查看运行情况。

启动成功后，访问地址为`http://<host:port>/admin`，如使用了 nginx.conf 默认配置，访问地址即 http://127.0.0.1/admin

### 中止服务

`make stop-server` 。暂停服务，不会删除现有容器，可通过 `make start-server` 再次恢复运行。

### 终止服务

`make remove-server` 。移除服务，会删除现有容器，可通过 `make start-server` 重新创建容器启动服务。

## troubleshooting

### es服务停止

运行 `docker ps -a` 检查容器运行状态，发现所有 es 容器处于退出状态（exited），挨个查看 es 容器的日志, `docker logs es`，发现如下log

<pre style='color: #999;'>
[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
[2019-04-30T02:43:52,717][INFO ][o.e.n.Node               ] [gKecOlD] stopping ...
[2019-04-30T02:43:52,971][INFO ][o.e.n.Node               ] [gKecOlD] stopped
[2019-04-30T02:43:52,971][INFO ][o.e.n.Node               ] [gKecOlD] closing ...
[2019-04-30T02:43:53,041][INFO ][o.e.n.Node               ] [gKecOlD] closed
</pre>

据 es 文档

> <small>Elasticsearch 对各种文件混合使用了 NioFs（ 注：非阻塞文件系统）和 MMapFs （ 注：内存映射文件系统）。请确保你配置的最大映射数量，以便有足够的虚拟内存可用于 mmapped 文件。这可以暂时设置：   
`sysctl -w vm.max_map_count=262144`   
或者你可以在 `/etc/sysctl.conf` 通过修改 `vm.max_map_count` 永久设置它</small>