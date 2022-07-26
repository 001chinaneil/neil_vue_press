# admin-portal

## 事件冒泡机制

### react 组件里取消事件冒泡：e.stopPropagation()可以阻止 react 事件的冒泡

- [参链 1](https://segmentfault.com/q/1010000008966738) [参链 2](https://zhuanlan.zhihu.com/p/26742034)

  整理总结:

  1. 事件冒泡分为合成事件冒泡（在 jsx 中之间绑定的事件）和原生事件冒泡（js 原生代码绑定的事件，类似 document.body.addEventListener(click,xxx)）
  2. 阻止合成事件间的冒泡：用 e.stopPropagation()
  3. 阻止合成事件和最外层 document 上的事件间的冒泡：用 e.nativeEvent.stopImmediatePropagation()
  4. 阻止合成事件和除最外层 document 上的事件间的冒泡：用 e.target 去做判断
