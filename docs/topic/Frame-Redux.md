# Redux

* 20220414 新华科技大厦 begin
* [Redux教程：技术胖](https://jspang.com/article/48)
* [Redux官方教程](http://cn.redux.js.org/introduction/getting-started)
* 三遍学习法：
    * 1. 第一遍视频教程快速搭建起系统框架
    * 2. 第二遍官方教程权威具体前沿的丰富细节
    * 3. 第三遍查漏补缺的进行review
* 使用[antd UI库](https://ant.design/index-cn)作为示例框架

## 技术胖教程学习笔记
1. Redux是数据层框架
2. React Components、Action Creators、Store、Reducer
3. 创建react项目的脚手架命令：`npx create-react-app xxx（项目名字）`，[官链](https://create-react-app.dev/docs/getting-started/)，框架知识是随着迭代而变化的，之前全局安装create-react-app的方式官方已经不支持了。

### 05创建&06&07&08
1. 创建store
```js
// ...省略引入
let store = createStore(reducer);
export default store;
```
2. 创建reducer
```js
// ...省略defaultState
let stateFun = (state = defaultState,action) => {
    // state为原始状态，action为新状态
    // Reducer里只能接收state，不能改变state
    return state;
}

export default stateFun;
```
3. 使用store里面的值
```js
constructor(props) {
    super(props);
    this.state = store.getState();// 用getState()函数获取store里面的值
}
```
4. 调试工具
```js
// 前提是安装了redux-devtools的chrome插件
let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

## 09&10&11&12
1. 20220419 官方教程又更新了（推荐使用@reduxjs/toolkit），技术胖的技术2019已经是延后的了。
2. 技巧一：实际项目中，往往会把actionType都抽离出来成一个单独的文件（actionTypes.js），清晰，易调试。
3. 技巧二：实际项目中，往往也会把action都抽离出来成一个单独的文件（actionCreates.js），集中管理action
4. 总结：
    * 1. store只能有1个
    * 2. reducer只能接收值，不能改变值，改变值是在store里面做的，reducer只需要把新值返回回去即可。
    * 3. reducer只能是纯函数，即函数结果只能由入参决定，比如不能在里面做ajax调用或new Date()这类操作
5. 思考：Redux没有分模块的概念吗？比如Vuex里面的分模块概念

## 13UI和逻辑分离&14无状态组件
1. 业务抽离：把UI和逻辑分两个文件进行编写，通过props进行传递属性和函数
2. 无状态组件就是Hooks，通过props进行接收