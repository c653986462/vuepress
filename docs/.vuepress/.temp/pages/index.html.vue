<template><alert>
<p>欢迎来到识度科技前端文档库，这里包含了最新的前端文档，涵盖前端大部分的内容，在使用组件、工具类、或者启动对应项目前，请务必仔细阅读该文档的对应内容，确认无误后协同项目内部的 <code>README.md</code> 文档一道使用对应内容。</p>
<p>文档的完善离不开大家的支持，如发现本文档有错误，欢迎联系指正。</p>
<p>我们的愿望是(<s>上班摸鱼</s>) <strong>拳打后端，脚踏产品</strong>~，做最帅的前端切图仔！</p>
</alert>
<blockquote>
<p>写作手册，组件文档详情查看 <a href="https://content.nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt-content<ExternalLinkIcon/></a> 文档</p>
</blockquote>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2>
<p>所有的文档都放在 <code>/content/en</code> 目录下，静态资源位于 <code>/static</code> 目录下</p>
<h2 id="新建文档" tabindex="-1"><a class="header-anchor" href="#新建文档" aria-hidden="true">#</a> 新建文档</h2>
<p>在 <code>/content/en</code> 目录下新建一个 <code>.md</code> 文档，书写头部声明，头部声明的格式是 <code>yml</code> 格式，可以添加自定义参数</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 文档说明 <span class="token comment"># 标题</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">'文档说明'</span> <span class="token comment"># 描述</span>
<span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 排序</span>
<span class="token key atrule">category</span><span class="token punctuation">:</span> <span class="token string">'Introduction'</span> <span class="token comment"># 所属目录归类</span>
<span class="token key atrule">menuTitle</span><span class="token punctuation">:</span> <span class="token string">'说明'</span> <span class="token comment"># 左侧目录标题</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">1.0</span> <span class="token comment"># 版本号</span>
<span class="token key atrule">fullscreen</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否全屏（默认false）</span>
<span class="token punctuation">---</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>自定义参数</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">'识度科技平台聚合'</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">'平台聚合说明文档'</span>
<span class="token key atrule">position</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token key atrule">category</span><span class="token punctuation">:</span> <span class="token string">'平台聚合'</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">1.0</span>
<span class="token key atrule">menuTitle</span><span class="token punctuation">:</span> <span class="token string">'平台聚合'</span>
<span class="token key atrule">idmethods</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 声明字符串：组件文件所在路径（只到`git`仓库层，用`/`分割）
  <span class="token punctuation">-</span> 算`md5`值取 32 位值，并对 32 位`md5`值进行大写转换，举例如下
<span class="token punctuation">---</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>上述的 <code>idmethods</code> 即为自定义参数，可以在自定义组件中使用</p>
<blockquote>
<p>在新建文档声明上述必要的头部声明后，框架会自动解析目录结构，不需要额外操作</p>
</blockquote>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<blockquote>
<p>需要 <code>Nodejs</code> 环境</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>git仓库地址<span class="token operator">></span>

<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>项目目录<span class="token operator">></span>

<span class="token function">npm</span> i <span class="token comment"># 安装依赖</span>

<span class="token function">npm</span> run dev <span class="token comment"># 本地运行项目，写作前务必执行，执行后，可以打开本地浏览器 localhost:7000 进行实时预览查看</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="写作" tabindex="-1"><a class="header-anchor" href="#写作" aria-hidden="true">#</a> 写作</h2>
<blockquote>
<p>书写 <code>markdown</code> 文档即可，支持绝大部分格式。（表现可能为不太一致，解析器不同）</p>
</blockquote>
<ul>
<li>可以使用 <code>vscode</code> 实时预览书写的 md 文档。然后打开浏览器查看实时渲染结果</li>
</ul>
<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2>
<blockquote>
<p>使用 <code>Docker</code> 部署，<code>jenkins</code> 已经配置完毕，任务为 <code>dev_frontend_document</code></p>
</blockquote>
</template>
