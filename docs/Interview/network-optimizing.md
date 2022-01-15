# 优化策略专题

## 请求传输层面
* 口诀：**(重点用力，两少一提升)：减少请求、减少资源大小、提升网络传输效率**
* 1. 浏览器缓存: 
    强缓存cache-control是否过期=>协商缓存last-modified(304状态码 not modified)；    
    from memory cache;from disk cache;取决于服务器的etag字段  
* 2. 使用http2: 多路复用(多个http用一个tcp连接)；压缩头部；服务端推送；
* 3. 资源打包压缩(html、CSS、JS)：webpack(uglifyjsPlugin、html-webpack-plugin、postcss.config.js)
* 4. 图片资源优化(不缩放图像、使用雪碧图、使用字体图片、使用webP[兼容方案])
* 5. 使用CDN：给你找最近服务器；热门立即同步，其余谁用谁更新；
* 6. 使用预加载(dns-prefetch：DNS预解析；preload：文档加载完立即需要的；prerender：提前加载下一页数据)

## 渲染层面
* 1. 渲染过程：8步
* 2. dom渲染层和GPU渲染加速(动画)  
        video元素、canvas、css3d、css 滤镜、filter、z-index(todo，不会吗？)触发新的渲染层
* 3. 重排重绘
* 4. 总结：
    ```js
    css属性读写分离；  
    使用`createDocumentFragment`批量修改样式；  
    dom元素离线更新(documentFragment\display:none)；  
    减少dom深度；  
    提前指定图片大小；  
    合理使用GPU加速；  
    避免频繁使用 style，而是采用修改class的方式;
    对于 resize、scroll 等进行防抖/节流处理。
    添加 will-change: tranform ，让渲染引擎为其单独实现一个图层;
    ```

## 其他优化
* 1. 前后端同构：服务器渲染Next.JS

参链：
* 1. [CSR、SSR、Prerender 原理全解密](https://juejin.cn/post/6844903971664953352)

## 性能指标
* 1. FP：准备开始渲染时间点
* 2. FCP：首次有内容渲染时间点
* 3. FMP：导航加载开始到首屏显示时间点
* 4. TTI：页面完全处于可交互阶段
