# admin-portal-js

## react 组件里取消事件冒泡：e.stopPropagation()可以阻止 react 事件的冒泡

- [参链 1](https://segmentfault.com/q/1010000008966738) [参链 2](https://zhuanlan.zhihu.com/p/26742034)

  整理总结:

  1. 事件冒泡分为合成事件冒泡（在 jsx 中之间绑定的事件）和原生事件冒泡（js 原生代码绑定的事件，类似 document.body.addEventListener(click,xxx)）
  2. 阻止合成事件间的冒泡：用 e.stopPropagation()
  3. 阻止合成事件和最外层 document 上的事件间的冒泡：用 e.nativeEvent.stopImmediatePropagation()
  4. 阻止合成事件和除最外层 document 上的事件间的冒泡：用 e.target 去做判断

## Select 组件的 Option，远程搜索后，数据更新了，但是组件没更新。

- 解决: antd 组件默认开启了 filterOption 为 true，设置 false 就可以了

## react antdesign datePaick 预填日期出现警告的处理

- Deprecation warning in Moment.js - Not in a recognized ISO format
- [参链](https://stackoverflow.com/questions/39969570/deprecation-warning-in-moment-js-not-in-a-recognized-iso-format/51238958)
- 解决：`moment(new Date(initData.joinDate))`

```js
<Form.Item
  label="Move-in Date"
  initialValue={moment(new Date(initData.joinDate)) ?? ""}
  name="joinDate"
>
  <DatePicker style={{ width: "100%" }} />
</Form.Item>
```
