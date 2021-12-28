---
title: 'CI/CD之容器化'
description: 'CI/CD'
position: 1
category: 'CI/CD'
version: 1.0
menuTitle: 'CI/CD之容器化'
---


自古以来，程序猿最头痛的事情就是环境配置，有相当一部分的程序，只能运行在特定环境上，比如`sketch`只支持Mac。那么我怎么做到别的环境也能运行这个程序？并且原封不动的保证功能完好？答案大概只有容器化。

> 容器化，大体上指将服务，代码等运行在一个容器中，也可以理解为一个沙箱。在前端服务越发复杂的今天，容器化的推进将直接关乎前端发布部署的体验以及后续维护成本的高低。

容器化有不少技术，包括虚拟机，`Docker`等等。

在 `Docker` 技术成熟的今天，容器化大部分都是由 `Docker` 体系为基础构建。[什么是`Docker`?](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)，可以提供参考。

## 发布模式

首先我们联系一下在没有容器化情况下的开发模式，大体如下

- 推送代码
- 打包构建
- 发布到服务器
- 配置`nginx`代理

按照正常情况下，服务器上只会存在一个 `nginx`，如果前端项目无限扩充，那么`nginx`配置文件将会乱做一团糟（尤其是没有配置`nginx`模块化配置的情况下）

如果切换到容器化的发布模式，将优化为以下两步

- 构建容器
- 运行容器

乍一看可能没什么大的优点，但是如果需要环境迁移，分布式部署，以及单一版本验证等场景下，容器化将是普通发布模式无可替代的。

## Docker 入门

> Docker是一个开源的商用技术，在此只讨论社区版（~~贫穷使我理智~~）。

我们这里需要首先了解几个概念

- 宿主机
- 镜像
- 容器
- 标签

宿主机，顾名思义，指的是容器运行所依赖的环境，说白了，就是你部署服务的地方，可以是Windows，也可以是Linux，还可以是Mac。

镜像（`images`），在`Docker`体系下，指的是应用以及依赖等打包成一个二进制文件，一个镜像可以引用另外一个镜像，注意，`Docker`不支持按需引入嗷，因此为了保证最后执行的镜像文件尽可能小，我们在选择基础镜像的时候尤其注意。

容器（`container`），将镜像配合一系列的参数命令执行后会生成一个容器，这个容器就是你代码应用运行的地方，是一个独立的环境，内部环境由你所依赖的基础镜像决定，可以理解为沙箱。

标签（`TAG`），即版本号，最新的默认为 `latest`，`latest`可以省略。

## Docker 安装

自己百度，注意如果是 Linux 环境，记得安装 docker-compose。Windows桌面版已经自动集成，不用额外安装。

## Docker 常用命令

可以简单把`Docker`理解为 npm

`npm` 包含拉取依赖，推送依赖的功能，因此 `Docker` 也有，即 `pull`， `push`。

`npm` 有仓库概念，因此 `Docker` 也有，[DockerHub](https://hub.docker.com/)

> `Docker` 常用命令如下

```shell
# 拉取一个镜像

docker pull <IMAGE>:<TAG>

# 打标签

docker tag <IMAGE>:<OLDTAG> <IMAGE>:<NEWTAG> # 可以理解为重命名

# 推送镜像

docker push <REGISTRY>/<IMAGE>:<TAG> # 类似于推送 npm 包

```

## Dockerfile

我们要运行我们的代码环境，首先就得制作一个镜像，上文也说到，镜像是应用代码和依赖等打包成一个二进制文件，并且还可以引用别的镜像从而获得别的镜像的全部功能。

那么我们将一个简单的由一个Vue项目打包出来的静态项目打包成镜像。

首先我们思考一下平常发布模式下我们会怎么做，结合上述发布模式，大致为

- 推送代码
- 打包构建
- 发布到服务器
- 配置`nginx`代理

那么我们逐步拆解，首先手动打包，会生成一个`dist`文件夹，我们接下来要做的，就是将这个打包生成的文件，添加打包成一个镜像。

新建一个 `Dockerfile` 文件（注意没有后缀），写入以下内容

```Dockerfile

RUN mkdir /app # 创建文件夹
COPY /dist /app # 复制文件

```

上述操作后，我们就将我们的代码包拷贝到了镜像中，接下来执行以下命令

```shell

docker build . -t <IMAGE>:<TAG>

```

执行完毕之后，就会开始镜像构建，完成后可以使用 `docker images` 查看构建的镜像，类似于下面

<!-- ![docker images](/static/QQ截图20210928175249.png) -->

<!-- <img src="/QQ截图20210928175249.png" class="light-img" width="1280" height="640" alt=""/> -->

但是实际上我们上述操作的镜像还是不能运行的，结合发布模式我们不难看到，我们还需要一个 `nginx` 做静态资源服务器，做资源代理。

因此，在项目下新建一个 `nginx.conf` 文件，作为 nginx 的配置文件，写入以下内容

```nginx
user nginx;

worker_processes 1;

error_log /var/log/nginx/error.log warn;

pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    include /etc/nginx/conf.d/*.conf;

    default_type application/octet-stream;

    log_format main

        '$remote_addr - $remote_user [$time_local] "$request" '
        '$status $body_bytes_sent "$http_referer" '
        '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;
    sendfile on;

    keepalive_timeout 65;

    gzip on;
    gzip_types text/plain application/javascript text/css;


    # 虚拟主机server块
    server {
        # 端口
        listen 4000;
        # 匹配请求中的host值
        server_name localhost;

        root /app;

        location ~ .*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$ {
            expires 7d;
        }

        location ~ .*\.(?:js|css)$ {
            expires 7d;
        }

        location ~ .*\.(?:htm|html)$ {
            add_header Cache-Control

                "private, no-store, no-cache, must-revalidate, proxy-revalidate";
        }

        location / {
            root /app;
            index index.html index.htm;
            try_files $uri $uri/ /index.html;
        }


        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root /usr/share/nginx/html;
        }

    }

}

```

然后修改 `Dockerfile`

```Dockerfile
FROM nginx:stable # 我们选择 stable 版本的 nginx 镜像
RUN mkdir /app # 创建文件夹
COPY /dist /app # 复制文件
COPY nginx.conf /etc/nginx/templates/default.template

```

然后重新构建镜像，执行

```shell

docker build . -t test

```

执行完毕之后，然后运行镜像

```shell
docker run --name test -d test # --name 指定容器名称 -d 后台运行容器

```

然后打开 http://localhost:4000 就可以看到运行的项目

## Docker进阶

> 敬请期待！
