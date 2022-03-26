# React-Hooks
## react-hooks官方文档学习笔记
20220111午：  
* Hooks是取代Class写法的新编写方式
* [官链：概览](https://react.docschina.org/docs/hooks-overview.html)
1. State Hook，`const [count, setCount] = useState(0);`，useState会返回一对值：当前状态和一个让你更新它的函数。声明组件内的变量，是一个个声明的，和Vue统一在data中声明不一样。
2. Effect Hook，useEffect就是一个Effect Hook，给函数组件增加了操作副作用的能力。它合并了Class组件中的componentDidMount、componentDidUpdate和componentWillUnmount；useEffect应用于数据获取、订阅、手动修改过DOM。
3. Hook就是JavaScript函数，额外的两个规则：只能在函数最外层调用Hook；只能在React的函数组件中调用Hook。Hook是一种复用状态逻辑的方式，它不复用state本身。
4. 其他Hook：`useContext`可以不使用组件嵌套就可以订阅React的Context；`useReducer`可以通过reducer来管理组件本地的复杂state。

## React Hooks免费视频教程：技术胖
* 参链：[React Hooks免费视频教程：技术胖](https://www.bilibili.com/video/av63409044/)
* 前提知识准备：React、React-Router、Redux
### 01：React Hooks介绍和环境搭建
1. 按照creat-react-app，npm init react-app my-app（项目名）
2. useState的用法比之前class的用法更简单了。

### 02：useState 的介绍和多状态声明
1. useState不能放入条件判断里面

### 03：useEffect代替生命周期函数
1. useEffect可以代替componentDidMount和componentDidUpdate生命周期函数
2. 生命周期函数也成为‘副作用’，代表不是主要任务，是某些特定情况下执行的逻辑
```js
useEffect(() => {
    console.log('xxxxxx');
})
```

### 04：useEffect代替componentWillUnmount生命周期函数
1. useEffect的第二个参数是数组，空数组代表等组件销毁的时候在解绑，如果里面有数据变量，代表该数据变化时进行解绑；
2. 使用了react-router-dom库，有Routes、Route、Link、BrowserRouter

### 05：useContext让父子组件传值更简单
1. useContext替换了Vue的props，redux替换了Vue的Vuex
2. 创建createContext，接收useContext；
3. JSX里面是xxx.Provider
```js
// 创建
let countContext = createContext();

// 子组件接收
function Count(){
    // 接收父组件传递过来的属性数据
    let count = useContext(countContext);
    return (<h2>{count}</h2>)
}

// JSX里面使用
<countContext.Provider value={count}>
    <Count></Count>
</countContext.Provider>
```

### 06：useReducer介绍和简单使用
1. useReducer类似Redux功能
```js
import React,{ useReducer } from "react";

function Example(){
    let [ count, dispatch ] = useReducer((state,type) => {
        switch(type){
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default:
                return state;
        }
    },0);

    return (
        <div>
            <p>已经点击了{count}次</p>
            <button onClick={ () => {dispatch('add')} }>增加-hooks</button>
            <button onClick={ () => {dispatch('sub')} }>减少-hooks</button>
        </div>
    )
}

export default Example;
```



参链：  
[React Hooks 入门教程：阮一峰](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)  
