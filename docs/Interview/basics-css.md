# CSS布局

## 1px问题的解决和原理
* 原理：物理像素(window.devicePixeRatio)和逻辑像素(css里面的像素=>设备独立像素=>iphone的2倍像素)
* 解决：媒体查询，缺点：IOS8+才支持小数；transform：2倍屏0.5、3倍屏0.33
* 参链：[移动端 1px 像素问题及解决办法](https://www.jianshu.com/p/31f8907637a6)

## rem的弊端
* 弊端一：和根元素的font-size强耦合，如果系统字体变大缩小，布局有可能会乱
* 弊端二：需要在html里面插入一段JS代码
* 区别：vw：viewport 可视区域的大小；vh：viewport可视区域的高度；vw的兼容性稍差：IOS8+、安卓4.4+才完全支持；
* 参链：[vw对比rem优劣](https://blog.csdn.net/weixin_42554191/article/details/106288738)

## 对viewport的理解
* 参链：[移动前端开发之viewport的深入理解](https://www.cnblogs.com/2050/p/3877280.html)

## 典型真题
1. 一行居中显示，多行居左显示
```css
text-align: center; // 父级
display: inline-display;text-align: left; // 子级
```
参链：[css实现一行文字居中，多行文字左对齐](https://www.cnblogs.com/flxy-1028/p/6079681.html)

参链：
* [网站全尺寸适应指南](https://juejin.cn/post/6975845418265477150)