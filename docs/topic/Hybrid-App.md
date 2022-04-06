# Hybrid App
20220402 如果是一些垃圾文章就真的没必要写在自己博客上了
## 使用背景
1. 从动态化和开发成本角度考虑入手Hybrid。
2. 各技术方案优劣对比
![各技术方案优劣对比](https://img-blog.csdnimg.cn/23709a2fa4a2404db731bb9e3feb3d78.png)

## 兼容性
1. 导航：避免出现”双头“的情况
2. 底部兼容iPhone X

## 主流技术
1. Hybird + JSBridge
2. React Native：因为Hybird方案依赖webview，很容易产生内存问题，太复杂的交互也会影响渲染性能；RN没有用webview，而是采用JavaScriptCore做桥接，提高了性能。
3. Weex（阿里好像停止维护了。。。）
4. uni-app、Taro这类跨端框架
5. Flutter：自绘UI

## 双向通信
Hybrid最核心的就是Native和webview的双向通信层，需要定义一套跨语言通信方案---`JSBridge`  
选择一：  
API注入：即Native获取JavaScript上下文，直接挂载对象和方法，让JS进行调用。比如当时在虎嗅公司就是这样的，因为是内容型App，呈现型页面居多。  

选择二：  
URL Scheme跳转拦截：因为客户端可以拦截到任何webview的URL变化，自定义一套Scheme协议，比如当时在作业帮是 zyb://xxxxxx，公司内部APP众多，急需要一套快速开发多个App的方案，供新业务线使用，初期研发成本很大（协议的定义；通信action的制定；静态资源缓存等等问题），优势是后面稳定后再开发新App会非常快。  

客户端拦截：IOS上: shouldStartLoadWithRequest；Android: shouldOverrideUrlLoading

## 典型问题
1. 在iOS上点击事件是有300ms延迟的，可以引入fastclick来解决。
```js
// 实例
import FastClick from 'fastclick'
FastClick.attach(document.body);
```
2. 某些webview和客户端高频通信的情况下，渲染也许会卡顿，看业务情况采用H5开发或原生开发
3. 某些机型的手势操作比较难仿真，比如左滑也许会退出整个webview，而不是返回到上一页。
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
5. 1px的问题（这个是移动端都会出现的问题，并不局限于Hybird）：通过media媒体查询或transform解决
6. 典型的”弹窗穿透”问题：即页面里面的弹窗后，后面的页面会滑动。    
解决办法：弹窗时，把body进行固定，比如overflow: hidden;没有滚动条了也就不会滑动了。
7. 如果列表非常长的话，用前端虚拟滚动实现很好。减少内存消耗，网络有现成例子参考。

## 调试工具
1. vconsole插件

参链：
1. [混合开发，原生app内嵌h5页面](https://juejin.cn/post/6924931657623404557)： （简短核心用法，用法非常详细）
2. [APP混合模式开发方案](https://juejin.cn/post/6904211054021214215)
    多view：仅做展示功能，实现简单  
    单view：Native和web同时多次出现在单个view里面，开发难度较大，但是体验好，比如百度App  
    web主体：主要是web呈现，开发难度大幅降低，但是交互体验略差。  
3. [混合APP开发技术选型](https://juejin.cn/post/6870393361015308296)（各种优劣介绍的不错）
4. [移动APP混合框架](https://juejin.cn/post/6872109131793170446)：（分析的不错）
5. [移动端踩坑指南](https://juejin.cn/post/6844903576003674120)
6. [原理篇](https://juejin.cn/post/6844903640520474637) [实战篇](https://juejin.cn/post/6844903648510607373)