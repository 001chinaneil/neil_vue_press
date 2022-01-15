# 浏览缓存专题
* 1. **口诀**：先强后协商，强缓存（1.0Expires、1.1Cache-Control）、协商缓存（Last-Modified[基于时间]、ETag[基于内容]）、缓存位置（Service Worker、Memory Cache、Disk Cache、Push Cache）
* 2. 官链：[Cache-Control MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
## 强缓存
* 1. 缓存作用分两种情况，一种不用发送HTTP请求，一种需要发送HTTP请求
* 2. **强缓存不需要发送HTTP请求**，通过检查字段得出（HTTP1.0是Expires，HTTP1.1是 Cache-Control）
* 3. Expires采用过期时间，**缺点是服务器返回时间和浏览器自身时间可能不一致**，在1.1被废弃
* 4. Cache-Control采用缓存时长，有6大属性  

| Cache-Control的字段名 | 代表的含义 |  
| --- | --- |
| max-age | 最大缓存时间，单位秒 |
| public | 客户端和代理服务器都可以缓存数据，直接这个就行 |
| private | 客户端可以缓存数据，中间代理服务器不能缓存数据，直接这个就行 |
| no-cache | 跳过强缓存，发送HTTP请求，进入协商缓存，直接这个就行 |
| no-store | 不进行任何缓存，直接这个就行 |
| s-maxage | 代理服务器的缓存时间，单位秒 |

## 协商缓存
* 1. 概念：强缓存失效后，浏览器请求头中携带相应的**缓存tag**，服务器据此进行判断是否返回缓存。
* 2. 缓存tag分为2种：`Last-Modified和ETag`，都是指的响应头。
* 3. Last-Modified：第一次请求后，响应头中会加上这个字段；再次请求时，请求头会加上`If-Modified-Since`，值为返回的值；服务器在接收到`If-Modified-Since`的值和资源的Last-Modified值进行对比，如果小于则返回新资源，否则**返回304，告诉浏览器直接用缓存**。
* 4. ETag：服务器根据当前文件内容，生成唯一标志，在响应头中返回这个值。浏览器在接收到这个值后，下次请求会在请求头的`If-None-Match`中带上这个值；服务器接收到这个值后进行对比，如果不同则返回新资源，否则**返回304，告诉浏览器直接用缓存**。
* 5. Last-Modified比ETag精确度略差的原因：1）编辑文件，但是内容没变，也会导致缓存失效。2）精确度是秒，如果在1s内更改多次，也是察觉不到的。

| 名称 | 精确度 | 性能 | 优先级 | 
| --- | --- | --- | --- |
| Last-Modified | 差 | 高 | 低 |
| ETag | 高 | 差 | 高 |

思考总结：
1. 请求头和响应头这些字段是谁在控制？服务器、浏览器？  
   是的，响应头是服务器在控制，请求头是浏览器（代码请求）在控制
2. 采用HTTP几是谁在控制？怎么判断是哪个版本的HTTP协议？
   控制面板，在status上右键选Protocol，可以看到各个请求基于什么版本了。  
   采用HTTP几是谁在控制？服务器具有决定权，由HTTP报文的起始行决定。
3. todo 突然有了一种想学一门后端语言的冲动，想看看后端逻辑和服务器是怎么回事儿。20220115 铭科苑

## 缓存位置
* 1. 浏览器缓存位置分4种，优先级从高到低是：Service Worker、Memory Cache、Disk Cache、Push Cache
* 2. Service Worker：即让JS运行在主线程之外，支撑的功能：`离线缓存`、`消息推动`、`网络代理`，也是PWA的重要实现机制。TODO拓展
* 3. Memory Cache：内存缓存，速度最快，但是时间最短，渲染进程结束后，内存缓存就也失效了。（TODO：那什么时候渲染进程结束？）
* 4. Disk Cache：硬盘缓存，速度相对较慢，优点是存储量大和时间长。  
      ```js
      4.1 分配策略如下：
         1）如果大文件JS、CSS放硬盘，反之放内存；
         2）内存占用率高的时候放硬盘；
      ```
* 5. Push Cache：HTTP2的内容 [扩展文件：](https://link.juejin.cn/?target=https%3A%2F%2Fjakearchibald.com%2F2017%2Fh2-push-tougher-than-i-thought%2F)

疑问TODO：不能在拓展了吗？具体存储在什么位置？文件目录什么的

思考总结：  
1. 长连接（HTTP1.1）和多路复用（HTTP2.0）的区别？  
   ```js
   长连接讲的是同域名下的一个TCP连接的复用，是串行，受6个并发数量的限制。
   多路复用是同域名下一个TCP连接的复用，但是是并行。（应该还可以拓展，比如单个TCP连接中并行数量的限制）
   ```
2. 为什么有的图片有内存缓存，有的却不走呢？  
   TODO（eg: https://tf.zuoyebang.com/static/hy/cornucopia/kmcloo22.html）


