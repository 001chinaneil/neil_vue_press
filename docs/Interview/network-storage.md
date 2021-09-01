# 浏览存储专题
* 1. 本地存储分为：Cookie、WebStorage（localStorage、sessionStorage）、IndexedDB

## Cookie
* 1. 最初是为了弥补HTTP状态管理的不足，因为HTTP协议是无状态的，实现`状态存储`。
* 2. 本质上是存储在浏览器中的一个很小的文本文件，同一域名下的请求都会携带Cookie，服务器拿到后进行解析。

|  | 缺陷 |
| --- | --- |
| 容量上 | 只能存储`4K` |
| 性能上 | 同一域名下的请求都会携带Cookie，会造成巨大的性能浪费 |
| 安全上 | 以纯文本的形式传输，易被非法截获；在httponly为false下，会被JS脚本读取 |

疑问TODO：
  1. 存储的API，面试真题

## localStorage
* 1. 同一个域名下，会存储相同的一段localStorage。（和Cookie一致）
* 2. 存储的都是字符串，如果想存储对象，用`JSON.stringify()`进行转换，获取时用`JSON.parse()`进行解析

|  | 与Cookie的区别 |
| --- | --- |
| 容量上 | 针对一个域名上限是5M，持久存储 |
| 性能&安全上 | 只存客户端，默认不参与通信 |
| 接口封装 | localStorage暴露在全局，通过getItem、setItem进行获取和存储，非常方便 |

疑问TODO：
  1. 一级域名下、二级域名的获取情况，a.baidu.com、baidu.com，duxiaoman二面真题，结论是都能获取到

## sessionStorage
* 1. 在容量上、性能&安全上、接口封装上和localStorage完全一致，唯一不同的是：不是持久存储，会话结束（页面关闭）时存储就也消失了。
* 2. 应用场景：表单维护，页面刷新信息也不会丢失；存储本次浏览记录，eg：微博；

## IndexedDB
* 1. 运行在浏览器端的`非关系型数据库`，理论上容量是没有上限的。
* 2. [使用文档 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB)
* 3. 特点：
     3.1 支持事务、存储二进制数据  
     3.2 键值对存储
     3.3 异步操作。读写数据库是I/O操作，浏览器对异步I/O进行了支持。  
     3.4 受同源策略限制，即无法访问跨域的数据库。  

参考：  
* 1. [(1.6w字)浏览器灵魂之问，请问你能接得住几个？](https://juejin.cn/post/6844904021308735502) : 第2篇: 能不能说一说浏览器的本地存储？各自优劣如何？