# Hybrid App

20220402 如果是一些垃圾文章就真的没必要写在自己博客上了

## 使用背景

1. 从动态化和开发成本角度考虑入手 Hybrid。
2. 各技术方案优劣对比
   ![各技术方案优劣对比](https://img-blog.csdnimg.cn/23709a2fa4a2404db731bb9e3feb3d78.png)

## 兼容性

1. 导航：避免出现”双头“的情况
2. 底部兼容 iPhone X

## 主流技术

1. Hybird + JSBridge
2. React Native：因为 Hybird 方案依赖 webview，很容易产生内存问题，太复杂的交互也会影响渲染性能；RN 没有用 webview，而是采用 JavaScriptCore 做桥接，提高了性能。
3. Weex（阿里好像停止维护了。。。）
4. uni-app、Taro 这类跨端框架
5. Flutter：自绘 UI

## 双向通信

Hybrid 最核心的就是 Native 和 webview 的双向通信层，需要定义一套跨语言通信方案---`JSBridge`  
选择一：  
API 注入：即 Native 获取 JavaScript 上下文，直接挂载对象和方法，让 JS 进行调用。比如当时在虎嗅公司就是这样的，因为是内容型 App，呈现型页面居多。

选择二：  
URL Scheme 跳转拦截：因为客户端可以拦截到任何 webview 的 URL 变化，自定义一套 Scheme 协议，比如当时在作业帮是 zyb://xxxxxx，公司内部 APP 众多，急需要一套快速开发多个 App 的方案，供新业务线使用，初期研发成本很大（协议的定义；通信 action 的制定；静态资源缓存等等问题），优势是后面稳定后再开发新 App 会非常快。

客户端拦截：IOS 上: shouldStartLoadWithRequest；Android: shouldOverrideUrlLoading

## 典型问题

1. 在 iOS 上点击事件是有 300ms 延迟的，可以引入 fastclick 来解决。

```js
// 实例
import FastClick from "fastclick";
FastClick.attach(document.body);
```

2. 某些 webview 和客户端高频通信的情况下，渲染也许会卡顿，看业务情况采用 H5 开发或原生开发
3. 某些机型的手势操作比较难仿真，比如左滑也许会退出整个 webview，而不是返回到上一页。
4. 某些机型长按闪退的问题：

```js
// 解决方式：
JS事件触发加入阻止默认行为：e.preventDefault();
CSS部分，禁止复制文本：
-webkit-touch-callout: none; //解决闪退
//禁止复制
-moz-user-select: none;
-khtml-user-select: none;
user-select: none;
```

5. 1px 的问题（这个是移动端都会出现的问题，并不局限于 Hybird）：通过 media 媒体查询或 transform 解决
6. 典型的”弹窗穿透”问题：即页面里面的弹窗后，后面的页面会滑动。  
   解决办法：弹窗时，把 body 进行固定，比如 overflow: hidden;没有滚动条了也就不会滑动了。
7. 如果列表非常长的话，用前端虚拟滚动实现很好。减少内存消耗，网络有现成例子参考。

## 调试工具

1. vconsole 插件

## 参考链接

1. [混合开发，原生 app 内嵌 h5 页面](https://juejin.cn/post/6924931657623404557)： （简短核心用法，用法非常详细）
2. [APP 混合模式开发方案](https://juejin.cn/post/6904211054021214215)
   多 view：仅做展示功能，实现简单  
   单 view：Native 和 web 同时多次出现在单个 view 里面，开发难度较大，但是体验好，比如百度 App  
   web 主体：主要是 web 呈现，开发难度大幅降低，但是交互体验略差。
3. [混合 APP 开发技术选型](https://juejin.cn/post/6870393361015308296)（各种优劣介绍的不错）
4. [移动 APP 混合框架](https://juejin.cn/post/6872109131793170446)：（分析的不错）
5. [移动端踩坑指南](https://juejin.cn/post/6844903576003674120)
6. [原理篇](https://juejin.cn/post/6844903640520474637) [实战篇](https://juejin.cn/post/6844903648510607373)
7. Native*Or*大前端：20220616
   ![Native_Or_大前端](https://img-blog.csdnimg.cn/cbce6a2d2b67403c961fdd056c7b63ec.png)
