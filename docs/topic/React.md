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

20211205：try agagin todo
* [参链：Context](https://react.docschina.org/docs/context.html)

1. 在组件之间共享数据的方式
2. 不理解下面的含义
```js
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
3. 应用场景是：很多不同层级的组件使用同一组数据。副作用是：会造成组件的复用性变差。
4. **React关键部分**：Class语法、JSX套标签、属性和事件都可以向下传递  

20211207：
* [参链：错误边界](https://react.docschina.org/docs/error-boundaries.html)

1. 错误边界是一种React组件，可以捕获并打印其子组件中所发生的所有JavaScript错误，并渲染出备用组件。在渲染期间、整个生命周期、整个组件树的构造函数中捕获错误。
2. 无法捕获异常的场景：事件处理；异步代码（setTimeout、requestAnimationFrame）；服务端渲染；它自身的错误；
3. 如果一个 class 组件中定义了 **static getDerivedStateFromError()** 或 **componentDidCatch()** 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 **static getDerivedStateFromError()** 渲染备用 UI ，使用 **componentDidCatch()** 打印错误信息。
4. 事件处理器不会在渲染期间触发，所以用try...catch...来捕获异常。

20211208：
* [参链：Refs转发](https://react.docschina.org/docs/forwarding-refs.html) todo
* [参链：Fragments](https://react.docschina.org/docs/fragments.html)

1. Refs转发是一项把ref自动通过组件传递给子组件的技巧。
2. Fragments允许将子列表分组，而不须添加额外的节点。可以当空标签使用，挺好的。
```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```
```js
// 更短的语法
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  )
}
```

20211209：
* [参链：高阶组件](https://react.docschina.org/docs/higher-order-components.html) todo 似懂非懂

1. 高阶组件是依据React特性组合而成的设计模式，参数是组件，返回值是新组件。

20211210：
* [参链：深入 JSX](https://react.docschina.org/docs/jsx-in-depth.html) 这里有好多技巧使用，建议关注 todo

1. JSX其实是React.creatElement(component,prop,...children)的**语法糖**。项目中的JSX语法都会被编译成React.createElement()的形式。
2. React必须在作用域内
3. 在JSX类型中使用点语法
4. 用户自定义的组件必须以大写字母开头，小写字母开头默认是HTML标签
5. 在运行时选择类型，JSX标签不能是表达式，但是可以先把表达式赋值给一个大写开头的变量，然后使用。
```js
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```
6. JavaScript表达式作为props。
7. Props默认值为True，但是不建议不传递value值给prop。
```js
// 等价的
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```
8. 可以使用...来展开props。
```js
// 等价的
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

20211210晚：
* [参链：性能优化](https://react.docschina.org/docs/optimizing-performance.html) todo，这里好多优化的方法，等遇到好的case可以再来看看

20211212晚：
* [参链：Portals](https://react.docschina.org/docs/portals.html)

1. 将子节点渲染到父节点之外的优秀方案。
```js
ReactDOM.createPortal(child, container)
```

20211213：
* [参链：不使用 ES6](https://react.docschina.org/docs/react-without-es6.html) 官方文档仅对此参考使用

1. 不适用ES6的替代方案：create-react-class模块

* [参链：协调](https://react.docschina.org/docs/reconciliation.html) 原理剖析，赞

1. 比对不同类型的元素，比对同一类型元素。。。
2. Key属性要确保在列表中是唯一稳定的。

20211214：
* [参链：Refs and the DOM](https://react.docschina.org/docs/refs-and-the-dom.html)

1. 通过refs可以访问Dom节点和在render方法中构建React元素。
2. 创建：使用React.createRefs()创建。
3. 感觉React不如Vue简单易写呢，这么多Hack的用法。

20211215：
* [参链：Render Props](https://react.docschina.org/docs/render-props.html)

1. Render Props指一种在React组件之间使用一个值为函数的prop**共享代码**的简单技术。
2. 使用Render Props来解决横切关注点（Cross-Cutting Concerns），用于告诉组件需要渲染什么内容的函数prop。
3. 感悟：任何一项技术都是为了解决某个问题而出现的，它的主要功能点，它的局限性。

* [参链：静态类型检查](https://react.docschina.org/docs/static-type-checking.html) TS来喽！！

1. Flow和TypeScript是静态类型检查器，可以在运行前识别某些问题，辅之自动补全工具可以优化开发流程。
2. Flow是针对JavaScript的静态类型检查器，由Facebook开发，[官方详细介绍](https://flow.org/en/docs/getting-started/)  
    2.1 将Flow添加到项目中  
    2.2 确保编译后的代码中没有flow语法，因为浏览器并不能识别这些。  
    2.3 添加类型注释并且运行flow来检查它们。
3. TypeScript是微软开发的语言，是JavaScript的类型超集，包含独立的编译器。[详细介绍](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter) todo
4. 好多类型检查语言啊，Reason、Kotlin、F#/Fable，不过掌握TS就可以了。
5. Create-React-app内置了TS语言，可以直接设置使用，
6. 扩展阅读：
    6.1 [TypeScript 文档：基本类型](https://www.typescriptlang.org/docs/handbook/basic-types.html)  
    6.2 [TypeScript 文档：JavaScript 迁移](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)  
    6.3 [TypeScript 文档：React 与 Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) 

20211216晚：
* [参链：严格模式](https://zh-hans.reactjs.org/docs/strict-mode.html)

1. React.strictMode模式仅在开发模式生效，生产环境不生效，可以用在任何位置。

### API Reference
20211218晚：
* [参链：React 顶层 API](https://react.docschina.org/docs/react-api.html) todo
* [参链：React.Component](https://react.docschina.org/docs/react-component.html) todo 生命周期 比较枯燥
* [参链：ReactDOM](https://react.docschina.org/docs/react-dom.html)

1. React 的 DOM 差分算法（DOM diffing algorithm）进行高效的更新。
2. renderToString，将 React 元素渲染为初始 HTML，达到SEO的目的。
```js
ReactDOMServer.renderToString(element);
```

20211220：
* [参链：DOM 元素](https://react.docschina.org/docs/dom-elements.html) todo
  




