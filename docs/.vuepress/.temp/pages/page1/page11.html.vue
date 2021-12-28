<template><p>自古以来，程序猿最头痛的事情就是环境配置，有相当一部分的程序，只能运行在特定环境上，比如<code>sketch</code>只支持Mac。那么我怎么做到别的环境也能运行这个程序？并且原封不动的保证功能完好？答案大概只有容器化。</p>
<blockquote>
<p>容器化，大体上指将服务，代码等运行在一个容器中，也可以理解为一个沙箱。在前端服务越发复杂的今天，容器化的推进将直接关乎前端发布部署的体验以及后续维护成本的高低。</p>
</blockquote>
<p>容器化有不少技术，包括虚拟机，<code>Docker</code>等等。</p>
<p>在 <code>Docker</code> 技术成熟的今天，容器化大部分都是由 <code>Docker</code> 体系为基础构建。<a href="http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html" target="_blank" rel="noopener noreferrer">什么是<code>Docker</code>?<ExternalLinkIcon/></a>，可以提供参考。</p>
<h2 id="发布模式" tabindex="-1"><a class="header-anchor" href="#发布模式" aria-hidden="true">#</a> 发布模式</h2>
<p>首先我们联系一下在没有容器化情况下的开发模式，大体如下</p>
<ul>
<li>推送代码</li>
<li>打包构建</li>
<li>发布到服务器</li>
<li>配置<code>nginx</code>代理</li>
</ul>
<p>按照正常情况下，服务器上只会存在一个 <code>nginx</code>，如果前端项目无限扩充，那么<code>nginx</code>配置文件将会乱做一团糟（尤其是没有配置<code>nginx</code>模块化配置的情况下）</p>
<p>如果切换到容器化的发布模式，将优化为以下两步</p>
<ul>
<li>构建容器</li>
<li>运行容器</li>
</ul>
<p>乍一看可能没什么大的优点，但是如果需要环境迁移，分布式部署，以及单一版本验证等场景下，容器化将是普通发布模式无可替代的。</p>
<h2 id="docker-入门" tabindex="-1"><a class="header-anchor" href="#docker-入门" aria-hidden="true">#</a> Docker 入门</h2>
<blockquote>
<p>Docker是一个开源的商用技术，在此只讨论社区版（<s>贫穷使我理智</s>）。</p>
</blockquote>
<p>我们这里需要首先了解几个概念</p>
<ul>
<li>宿主机</li>
<li>镜像</li>
<li>容器</li>
<li>标签</li>
</ul>
<p>宿主机，顾名思义，指的是容器运行所依赖的环境，说白了，就是你部署服务的地方，可以是Windows，也可以是Linux，还可以是Mac。</p>
<p>镜像（<code>images</code>），在<code>Docker</code>体系下，指的是应用以及依赖等打包成一个二进制文件，一个镜像可以引用另外一个镜像，注意，<code>Docker</code>不支持按需引入嗷，因此为了保证最后执行的镜像文件尽可能小，我们在选择基础镜像的时候尤其注意。</p>
<p>容器（<code>container</code>），将镜像配合一系列的参数命令执行后会生成一个容器，这个容器就是你代码应用运行的地方，是一个独立的环境，内部环境由你所依赖的基础镜像决定，可以理解为沙箱。</p>
<p>标签（<code>TAG</code>），即版本号，最新的默认为 <code>latest</code>，<code>latest</code>可以省略。</p>
<h2 id="docker-安装" tabindex="-1"><a class="header-anchor" href="#docker-安装" aria-hidden="true">#</a> Docker 安装</h2>
<p>自己百度，注意如果是 Linux 环境，记得安装 docker-compose。Windows桌面版已经自动集成，不用额外安装。</p>
<h2 id="docker-常用命令" tabindex="-1"><a class="header-anchor" href="#docker-常用命令" aria-hidden="true">#</a> Docker 常用命令</h2>
<p>可以简单把<code>Docker</code>理解为 npm</p>
<p><code>npm</code> 包含拉取依赖，推送依赖的功能，因此 <code>Docker</code> 也有，即 <code>pull</code>， <code>push</code>。</p>
<p><code>npm</code> 有仓库概念，因此 <code>Docker</code> 也有，<a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">DockerHub<ExternalLinkIcon/></a></p>
<blockquote>
<p><code>Docker</code> 常用命令如下</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 拉取一个镜像</span>

docker pull <span class="token operator">&lt;</span>IMAGE<span class="token operator">></span>:<span class="token operator">&lt;</span>TAG<span class="token operator">></span>

<span class="token comment"># 打标签</span>

docker tag <span class="token operator">&lt;</span>IMAGE<span class="token operator">></span>:<span class="token operator">&lt;</span>OLDTAG<span class="token operator">></span> <span class="token operator">&lt;</span>IMAGE<span class="token operator">></span>:<span class="token operator">&lt;</span>NEWTAG<span class="token operator">></span> <span class="token comment"># 可以理解为重命名</span>

<span class="token comment"># 推送镜像</span>

docker push <span class="token operator">&lt;</span>REGISTRY<span class="token operator">></span>/<span class="token operator">&lt;</span>IMAGE<span class="token operator">></span>:<span class="token operator">&lt;</span>TAG<span class="token operator">></span> <span class="token comment"># 类似于推送 npm 包</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2>
<p>我们要运行我们的代码环境，首先就得制作一个镜像，上文也说到，镜像是应用代码和依赖等打包成一个二进制文件，并且还可以引用别的镜像从而获得别的镜像的全部功能。</p>
<p>那么我们将一个简单的由一个Vue项目打包出来的静态项目打包成镜像。</p>
<p>首先我们思考一下平常发布模式下我们会怎么做，结合上述发布模式，大致为</p>
<ul>
<li>推送代码</li>
<li>打包构建</li>
<li>发布到服务器</li>
<li>配置<code>nginx</code>代理</li>
</ul>
<p>那么我们逐步拆解，首先手动打包，会生成一个<code>dist</code>文件夹，我们接下来要做的，就是将这个打包生成的文件，添加打包成一个镜像。</p>
<p>新建一个 <code>Dockerfile</code> 文件（注意没有后缀），写入以下内容</p>
<div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre v-pre class="language-Dockerfile"><code>
RUN mkdir /app # 创建文件夹
COPY /dist /app # 复制文件

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上述操作后，我们就将我们的代码包拷贝到了镜像中，接下来执行以下命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
docker build <span class="token builtin class-name">.</span> -t <span class="token operator">&lt;</span>IMAGE<span class="token operator">></span>:<span class="token operator">&lt;</span>TAG<span class="token operator">></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>执行完毕之后，就会开始镜像构建，完成后可以使用 <code>docker images</code> 查看构建的镜像，类似于下面</p>
<!-- ![docker images](/static/QQ截图20210928175249.png) -->
<!-- <img src="/QQ截图20210928175249.png" class="light-img" width="1280" height="640" alt=""/> -->
<p>但是实际上我们上述操作的镜像还是不能运行的，结合发布模式我们不难看到，我们还需要一个 <code>nginx</code> 做静态资源服务器，做资源代理。</p>
<p>因此，在项目下新建一个 <code>nginx.conf</code> 文件，作为 nginx 的配置文件，写入以下内容</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> nginx</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log warn</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">pid</span> /var/run/nginx.pid</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/*.conf</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">default_type</span> application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">log_format</span> main

        <span class="token string">'<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> "<span class="token variable">$request</span>" '</span>
        <span class="token string">'<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> "<span class="token variable">$http_referer</span>" '</span>
        <span class="token string">'"<span class="token variable">$http_user_agent</span>" "<span class="token variable">$http_x_forwarded_for</span>"'</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/access.log main</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">keepalive_timeout</span> <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/javascript text/css</span><span class="token punctuation">;</span>


    <span class="token comment"># 虚拟主机server块</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment"># 端口</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">4000</span></span><span class="token punctuation">;</span>
        <span class="token comment"># 匹配请求中的host值</span>
        <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">root</span> /app</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> ~ .*\.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm)$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">7d</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> ~ .*\.(?:js|css)$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">7d</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> ~ .*\.(?:htm|html)$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">add_header</span> Cache-Control

                <span class="token string">"private, no-store, no-cache, must-revalidate, proxy-revalidate"</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span> /app</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><p>然后修改 <code>Dockerfile</code></p>
<div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre v-pre class="language-Dockerfile"><code>FROM nginx:stable # 我们选择 stable 版本的 nginx 镜像
RUN mkdir /app # 创建文件夹
COPY /dist /app # 复制文件
COPY nginx.conf /etc/nginx/templates/default.template

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后重新构建镜像，执行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
docker build <span class="token builtin class-name">.</span> -t <span class="token builtin class-name">test</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>执行完毕之后，然后运行镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run --name <span class="token builtin class-name">test</span> -d <span class="token builtin class-name">test</span> <span class="token comment"># --name 指定容器名称 -d 后台运行容器</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后打开 http://localhost:4000 就可以看到运行的项目</p>
<h2 id="docker进阶" tabindex="-1"><a class="header-anchor" href="#docker进阶" aria-hidden="true">#</a> Docker进阶</h2>
<blockquote>
<p>敬请期待！</p>
</blockquote>
</template>
