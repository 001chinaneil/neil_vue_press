# React-Router

* 20220328 铭科苑F6
## 技术胖：[技术课程](https://jspang.com/article/49)

### 01：安装和基础搭建
1. React-Router是基于React的路由库，可以向应用中快速的添加视图和数据流，同时保持页面和URL的同步。
```js
<Routes>
    {/* 问题1：component改为element */}
    {/* 问题2：在react17版本之后，Route需要被Routes包裹 */}
    {/* 问题3：element={Index} 改为 element={<Index/>} */}
    <Route path='/' exact element={<Index/>} />
    <Route path="/list/"  element={<List/>} />
</Routes>
```
### 02：像制作普通网页一样，利用React-Router

### 03&04：动态传参
1. 传值规则：`<Route path="/list/:id"  element={<List/>} />`
2. 具体传值：`<li><Link to="/list/123">列表</Link> </li>`
3. 接收值：`import {useParams} from 'react-router-dom'`，用useParams用法接收值

参链：
1. [阮一峰：React-Router](https://www.ruanyifeng.com/blog/2016/05/react_router.html)
2. [官链：中文版](http://react-guide.github.io/react-router-cn/docs/Introduction.html)
3. [官链：英文版](https://v5.reactrouter.com/web/guides/quick-start)