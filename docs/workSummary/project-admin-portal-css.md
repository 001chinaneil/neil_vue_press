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
