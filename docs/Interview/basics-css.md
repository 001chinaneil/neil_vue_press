# CSS布局

## 1px问题的解决和原理
* 原理：物理像素(window.devicePixeRatio，简称DPR)和逻辑像素(css里面的像素=>设备独立像素=>iphone的2倍像素)
* 解决：媒体查询 + transform，缺点：IOS8+才支持小数；transform：2倍屏0.5、3倍屏0.33
* 参链：[移动端 1px 像素问题及解决办法](https://www.jianshu.com/p/31f8907637a6)

## rem的弊端
* 弊端一：和根元素的font-size强耦合，如果系统字体变大缩小，布局有可能会乱
* 弊端二：需要在html里面插入一段JS代码
* 计算公式：fontSize = windowWidth * 100 / 750; // 1rem的宽度
* 区别：vw：viewport 可视区域的大小；vh：viewport可视区域的高度；vw的兼容性稍差：IOS8+、安卓4.4+才完全支持；现在低版本手机比较少了，可以使用vw了。
* 默认vw的宽度是包含页面滚动条的宽度的，但是如果设置body或html为100%，则不会包含了。移动端滚动条不占位。
* 参链：[vw对比rem优劣](https://blog.csdn.net/weixin_42554191/article/details/106288738)

## 对viewport的理解
* 参链：[移动前端开发之viewport的深入理解](https://www.cnblogs.com/2050/p/3877280.html)

## 圣杯布局&双飞翼布局
1. 概念：三列布局，左右宽度固定，中间根据屏幕自适应宽度
```html
<!DOCTYPE html>
<head>
    <!-- 20220203 -->
    <!-- 圣杯布局，三栏布局，左右固定宽度中间自适应 -->
    <!-- 1. 三个元素布局采用float左浮动 -->
    <!-- 2. 利用margin-left属性，左元素负100%，右元素负自身宽度 -->
    <!-- 3. 三个元素的父元素用padding给左右栏留出空间 -->
    <!-- 4. 左右元素各自用relative，移动自身的宽度来填充父元素留出的空间 -->
    <style>
        body {
            overflow: hidden;
            height: 200px;
            /* 使用padding给左右栏留出空间 */
            padding: 0 120px 0 100px;
        }
        .main {
            width: 100%;
            background: #ff0000;
            height: 100%;
            float: left;
        }
        .left {
            width: 100px;
            background: transparent;
            height: 100%;
            float: left;
            margin-left: -100%;
            position: relative;
            left: -100px;
        }
        .right {
            width: 120px;
            background: transparent;
            height: 100%;
            float: left;
            margin-left: -120px;
            position: relative;
            right: -120px;
        }
    </style>
</head>
<body>
<div class="main">123</div>
<div class="left">456</div>
<div class="right">789</div>
</body>
```

```html
<!DOCTYPE html>
<head>
<!-- 双飞翼布局 -->
<!-- 1. 和圣杯布局不同的是，main里面嵌套了一个子div，子div使用margin属性在内容栏腾出来左右栏的空间 -->
<style>
    body {
        overflow: hidden;
    }
    .main {
        width: 100%;
        float: left;
        background: green;
        height: 100px;
    }
    .main-content {
        margin: 0 120px 0 100px;
    }
    .left {
        float: left;
        width: 100px;
        height: 100px;
        margin-left: -100%;
    }
    .right {
        float: left;
        width: 120px;
        height: 100px;
        margin-left: -120px;
    }
</style>
</head>
<body>
    <div class="main">
        <div class="main-content">
            123
        </div>
    </div>
    <div class="left">456</div>
    <div class="right">789</div>
</body>
```

## calc()
1. CSS3的计算属性，动态计算长度值，calc(expression数学表达式)，支持加减乘除运算，遵守数学运算优先级
2. 例如：`width: calc(100% - 100px);`

## 各种居中
### flex方式
```css
/* 元素高度动态改变都运行正常 */

/* flex布局 */
display: flex;
/* 主轴对齐方式 */
justify-content: center;
/* 交叉轴对齐方式 */
align-items: center;
```

## 盒子模型
[参链：CSS盒模型详解](https://juejin.cn/post/6844903505983963143)
1. W3C标准盒模型：属性width、height只包含内容content，不包含padding和border
2. IE盒模型：属性width、height包含内容content + padding + border
3. IE8+以后，box-sizing控制，值content-box是标准盒模型，值border-box是IE盒模型
4. 如果在html中声明了DOCTYPE类型，那么所有浏览器都会解析成标准盒模型

## BFC
[参链：学习 BFC (Block Formatting Context)](https://juejin.cn/post/6844903495108132877)
1. 一个元素不能同时包含于2个BFC中
2. 让BFC内部的元素与外部元素隔离

## transform
[官链](https://www.w3school.com.cn/cssref/pr_transform.asp)
1. 使用：`transform: translate(x,y)`

## 典型真题
1. 一行居中显示，多行居左显示
```css
text-align: center; // 父级
display: inline-display;text-align: left; // 子级
```
参链：[css实现一行文字居中，多行文字左对齐](https://www.cnblogs.com/flxy-1028/p/6079681.html)

2. flex: 1含义  
是`flex-grow、flex-shrink、flex-basis`三个属性（放大比例、缩写比例、固定空间）的缩写，默认是 0 1 auto（不放大会缩小）

参链：
* [网站全尺寸适应指南](https://juejin.cn/post/6975845418265477150)
* [50道CSS基础面试题（附答案）](https://segmentfault.com/a/1190000013325778)