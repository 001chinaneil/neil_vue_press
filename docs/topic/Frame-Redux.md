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

### 05创建&06
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