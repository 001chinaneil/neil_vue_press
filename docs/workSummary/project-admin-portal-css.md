# admin-portal-css

## 1. 兼容\n换行符
1. 20230421 场景：CRM PC Prospect detail follow up list列表里面后端可能会返回换行符来显示数据，前端需要兼容这种场景。
2. 解决方案：

```css
word-break: break-word;
white-space: pre-line;
/**
官链：https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space
white-space: 指代空格如何合并，行是否采用软换行；
pre-line: 这个属性值表示，连续空格会被合并，遇到换行符或者<br/>标签会进行换行；项目中使用最频繁了。

官链：
word-break: 指代怎么在单词内断行
break-word: 在文本可能溢出容器时，提前进行断行；项目中使用最频繁了。
**/
```

## 2. flex可以清除子元素浮动
1. 20230424 场景：CRM PC followup list 对话式布局右侧，偶然发现使用float的子元素居然没有失去高度
2. 实际原因：**flex也可以清除子元素浮动**
3. 其他方法：
```css
/* 1. 利用伪元素，给父元素加上 */
.classDemo::after{
    clear: both;
    content: '';
    display: table;
}
/* 2. 给父元素加overflow: hidden; */
/* 3. 使用grid布局，给父元素加上 */
```

## 3. flex实现子元素各间距固定
1. 20230531 场景：CRM AI Leaseing项目 opportunity模块，希望子模块的宽度随父元素宽度各均分，子模块之间的宽度固定
2. 实现方法：
```css
/* 父元素 */
.fatherClass {
    display: flex;
    justify-content: space-between;
}

.childClass {
    /* 3: 代表的是几个模块，32px：代表3个模块有2个间距，每个间距是16px; */
    width: calc( (100%-32px) / 3 ); 
}
```
3. 原理：
[官链：](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)
calc() 可以执行加减乘除和嵌套计算，赞👍🏻

## 4. vh代表什么含义，和vm，em，rem都有什么区别？
[参链：张鑫旭](https://www.zhangxinxu.com/wordpress/2012/09/new-viewport-relative-units-vw-vh-vm-vmin/)
1. vw、vh、vm（指的是vmin，宽度和长度其中较小的值），都是视区单位，指的是浏览器可视区域的大小，即window.innerWidth或者window.innerHeight，不包括任务栏标题栏工具栏
2. 1vm 等于 1%，浏览器可视区域宽度是100vm，可视区域高度是100vh，%是相对于父级元素的，可能存在级联效果。
3. 结论：vh和vw应用于非定位元素的高度相关属性上，height/min-height/max-height/line-height/padding-top/padding-bottom
4. 绝佳应用场景：
    1. Office Word效果，一屏一页。（感想：好的技术设计，可以让代码和效果很丝滑）

5. em、rem：都是相对单位  
    a. em相对父元素的文本对象，如果父元素没设置，就按浏览器默认文本为准，16px  
    b. rem一直根据根元素对象为标准  
[参链](https://vue3js.cn/interview/css/em_px_rem_vh_vw.html)

## 5. scrollWidth、offsetWidth、clientWidth的区别
1. 场景：[20230720] CRM Tour v2 自研Calendar需求，需要初始化滚动定位到默认选中的日期。
2. 选择：使用**offsetWidth**，保证移动的距离是显示的实际距离
3. 区别：
- scrollWidth：是元素的实际内容宽度 + 滚动条的宽度（如果有） paddingRightWidth + innerDivWidth + paddingRightWidth
- offsetWidth：是元素的实际宽度 + 边线宽度，borderRightWidth + paddingLeft + contentWidth + paddingRight + scrollBarWidth + borderRightWidth
- clientWidth：是元素的可视区域宽度，不包括边线宽度，paddingLeftWidth + contentWidth + paddingRightWidth

```js
offsetWidth >= clientWidth

scrollWidth >= clientWidth

scrollWidth  = offsetWidth - borderRightWidth - borderLeftWidth - clientWidth
```

4. 延伸：box-sizing属性
- 默认值content-box，设置元素的宽度为100px，但实际padding和border的宽度也会加到宽度上，导致实际宽度>=100px
- border-box，此时设置宽度为100px，实际效果也是100px，padding和border的宽度是包含在这100px里面的

## 6. 设置滚动条宽度
1. 场景：[20230720] CRM Tour v2 自研Calendar需求，出现的横向滚动条比较粗，影响观感
2. 处理：
```js
.className::-webkit-scrollbar {
    width: 1px;
}
```
3. [参链](https://blog.csdn.net/NineWaited/article/details/126450775)
