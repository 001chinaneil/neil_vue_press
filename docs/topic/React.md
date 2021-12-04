# React

Facebook开发的前端框架

## 概念学习

20211122：done  
参链：
* [Hello World](https://react.docschina.org/docs/hello-world.html)
1. React应用程序的组成部分：元素和组件。  

参链：
* [JSX简介](https://react.docschina.org/docs/introducing-jsx.html)
1. JSX是JavaScript的语法扩展，描述UI应有的交互形式，它具有JavaScript的全部功能。  
```js
let a = <h1>hello world!</h1>;
```  
2. React不强制要求使用JSX。  
3. JSX也是一个表达式，可以当做参数传入函数，也可以当做返回值返回。  
4. 在属性中嵌入JavaScript表达式时，应该**使用引号和大括号其中的一个**。  
5. JSX表示对象，Babel会把JSX转译成React.createElement()函数调用  

20211123：
参链：  
* [元素渲染](https://react.docschina.org/docs/rendering-elements.html)  
1. 元素是构成React应用的最小砖块。  
2. 想要把一个React元素渲染进根节点，需要使用ReactDom.render();  
3. React元素是不可变对象，一旦创建，就无法改变子元素或属性，就像电影的单帧。

参链：
* [组件 & Props](https://react.docschina.org/docs/components-and-props.html)

1. 组件，从概念上说类似于JavaScript，接受任意参数props，并返回表示页面展示内容的React元素。【核心】  
2. 组件名称必须以大写字母开头，React把小写字母开发的组件会理解为原生标签。
3. React组件和Vue的使用差别
```js
// React
<avatar user={props.author}></avatar>
// Vue
<avatar :user="props.author"></avatar>
```
4. 所有React组件都必须像纯函数一样**保护它们的props不被改变**。

参链：
* [State & 生命周期](https://react.docschina.org/docs/state-and-lifecycle.html)

1. 示例
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
// 挂载回调
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
// 卸载回调
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    //   只能通过setState函数去更新state
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
2. State的更新可能是异步的
3. State的更新会被合并
4. 数据是向下流动的、单向的
5. Class组件应该始终使用props参数来调用父类的构造函数。todo

20211124：  
参链：
* [事件处理](https://react.docschina.org/docs/handling-events.html) todo

1. React事件的命名采用小驼峰式camelCase，而不是纯小写
2. 在使用JSX语法时，需要传入一个函数，而不是字符串
3. 不能通过返回false来阻止默认行为，必须显示的使用preventDefault();
4. this的绑定：  
```js
// 方式一：
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
```js
// 方式二
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```
5. 向事件处理函数传参
```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

参链：
* [条件渲染](https://react.docschina.org/docs/conditional-rendering.html)

1. 通过花括号包裹代码，可以在JSX中嵌入任何代码。
2. 阻止组件渲染，让render()返回null，则不会进行组件渲染。

20211125：  
参链：
* [列表 & Key](https://react.docschina.org/docs/lists-and-keys.html)

1. 和Vue列表渲染，最大的不同就是和写JS一样写React列表，比如声明变量和使用js函数
```js
const li = numbers.map((item)=>{
    return <li>{{item}}</li>
});
// 疑问：简单的组件可以，如果复杂的组件怎么搞呢？todo
```
2. 好的法则：在**map()**方法中的元素需要设置Key属性。  
3. 如果一个**map()**中嵌套了太多层级，此时就是提取组件的好时机。

参链：
* [表单](https://react.docschina.org/docs/forms.html)

1. 感觉表单的双向数据绑定比Vue麻烦多了，还要单独的绑定，单独的回调去更新state
2. 非受控组件 todo：[链接](https://react.docschina.org/docs/uncontrolled-components.html)
3. 成熟方案 todo：[链接](https://jaredpalmer.com/formik)

20211126：  
参链：
* [状态提升](https://react.docschina.org/docs/lifting-state-up.html)

1. 依靠自上而下的数据流

20211127：  
参链：
* [组合 vs 继承](https://react.docschina.org/docs/composition-vs-inheritance.html)

1. props和组合就可以实现任意的组件外观和行为，而不须使用继承。
2. 包含关系，类似于Vue的slot槽概念，会从父组件透传到子组件。**props.children**
3. 可以将任何东西作为props进行传递。

参链：
* [React 哲学](https://react.docschina.org/docs/thinking-in-react.html)

1. 根据单一组件原则来划定范围。
2. 2类‘模型’数据：props和state。[props和state的区别是什么？](https://react.docschina.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)
3. 这是编写React应用组件的原则&方法论。

## 入门教程

20210913：  
参链：
* [React入门教程：井字格游戏](https://react.docschina.org/tutorial/tutorial.html)
* [React 教程：概述和演练 官方推荐初学者笔记博客](https://www.taniarascia.com/getting-started-with-react/)

1. rander()方法，是类组件中唯一需要的方法，用于渲染Dom节点。
2. rander里面有个return，返回的不是字符串，这被称为JSX。
3. 另一种方法：创建React App
4. Facebook创建的creat-react-app，有一个实时开发服务器，使用webpack自动编译React、JSX、ES6，自动转换前缀CSS文件，并使用ESlink测试和警告代码中的错误。

20211129：再次学习  
1. React的赋值是 **{}** ，Vue的赋值是 **{{}}**
2. 观看《Code Push》纪录片，讲述网景公司和微软的浏览器竞争。  
  中美互联网企业成立其实时间差不多，但是造成差距的原因是管理理念、人才规模、资金支撑、技术基础
3. 支持把父组件的属性和事件通过props传递给子组件，而Vue是不行的。【状态提升】小节
4. 【不可变性】就是把数据改变的操作，通过复制一份副本的形式进行更新，而不是直接修改。意义：简化复杂功能；跟踪数据的改变；确定何时更新渲染；
5. 【函数组件】如果一个组件只有一个render()函数，并且没有state，就可以携程函数组件，这样避免了Class繁琐的写法。
6. 感谢React官方文档的分享，很简易清晰的入门教程。
7. 【时间旅行】就像编写普通函数一样封装组件，普通的函数内变量可以直接渲染在组件中，比如status。和render()平级的普通函数都要用this.xxx才可以调用  
不同于Vue，组件中的变量必须挂载到data中。
```js
render(){
  let status = '123';
  return (
    <div>{status}</div>
  );
}
```

20211204晨
## 高级指引

### 代码分割
1. 代码分割是比如Webpack、Rollup、Browserify打包工具支持的一项技术，**能够创建多个包并在运行时加载**。
2. 动态import语法
```js
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```
3. React.lazy 和 Suspense技术还不支持服务端渲染，推荐使用**Loadable Components**库来支持服务端渲染打包。  
React.lazy接受一个函数，这个函数必须动态import组件，必须返回一个Promise，并且该promise必须resolve返回export default的React组件。  
使用Suspense组件中渲染lazy组件，可以让等待过程中做优雅降级，比如loading效果。
```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```
4. 异常捕获边界：Error boundaries，可以监听到组件的加载失败信息
5. 基于路由的代码分割：基于React.lazy和React Router第三方类库
6. 命名导出：React.lazy只支持默认导出，针对命名导出，可以设置一个中间模块，实现按需导入的效果。[链接](https://react.docschina.org/docs/code-splitting.html#named-exports)  



