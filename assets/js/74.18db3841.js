(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{356:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks"}},[t._v("#")]),t._v(" React-Hooks")]),t._v(" "),s("h2",{attrs:{id:"react-hooks官方文档学习笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks官方文档学习笔记"}},[t._v("#")]),t._v(" react-hooks官方文档学习笔记")]),t._v(" "),s("p",[t._v("20220111午：")]),t._v(" "),s("ul",[s("li",[t._v("Hooks是取代Class写法的新编写方式")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://react.docschina.org/docs/hooks-overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官链：概览"),s("OutboundLink")],1)])]),t._v(" "),s("ol",[s("li",[t._v("State Hook，"),s("code",[t._v("const [count, setCount] = useState(0);")]),t._v("，useState会返回一对值：当前状态和一个让你更新它的函数。声明组件内的变量，是一个个声明的，和Vue统一在data中声明不一样。")]),t._v(" "),s("li",[t._v("Effect Hook，useEffect就是一个Effect Hook，给函数组件增加了操作副作用的能力。它合并了Class组件中的componentDidMount、componentDidUpdate和componentWillUnmount；useEffect应用于数据获取、订阅、手动修改过DOM。")]),t._v(" "),s("li",[t._v("Hook就是JavaScript函数，额外的两个规则：只能在函数最外层调用Hook；只能在React的函数组件中调用Hook。Hook是一种复用状态逻辑的方式，它不复用state本身。")]),t._v(" "),s("li",[t._v("其他Hook："),s("code",[t._v("useContext")]),t._v("可以不使用组件嵌套就可以订阅React的Context；"),s("code",[t._v("useReducer")]),t._v("可以通过reducer来管理组件本地的复杂state。")])]),t._v(" "),s("h2",{attrs:{id:"react-hooks免费视频教程-技术胖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks免费视频教程-技术胖"}},[t._v("#")]),t._v(" React Hooks免费视频教程：技术胖")]),t._v(" "),s("p",[t._v("20220328 铭科苑F6 第一遍end")]),t._v(" "),s("ul",[s("li",[t._v("参链："),s("a",{attrs:{href:"https://www.bilibili.com/video/av63409044/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Hooks免费视频教程：技术胖"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("前提知识准备：React、React-Router、Redux")]),t._v(" "),s("li",[t._v("7个常用hooks函数")])]),t._v(" "),s("h3",{attrs:{id:"_01-react-hooks介绍和环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-react-hooks介绍和环境搭建"}},[t._v("#")]),t._v(" 01：React Hooks介绍和环境搭建")]),t._v(" "),s("ol",[s("li",[t._v("按照creat-react-app，npm init react-app my-app（项目名）")]),t._v(" "),s("li",[t._v("useState的用法比之前class的用法更简单了。")])]),t._v(" "),s("h3",{attrs:{id:"_02-usestate-的介绍和多状态声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-usestate-的介绍和多状态声明"}},[t._v("#")]),t._v(" 02：useState 的介绍和多状态声明")]),t._v(" "),s("ol",[s("li",[t._v("useState不能放入条件判断里面")])]),t._v(" "),s("h3",{attrs:{id:"_03-useeffect代替生命周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-useeffect代替生命周期函数"}},[t._v("#")]),t._v(" 03：useEffect代替生命周期函数")]),t._v(" "),s("ol",[s("li",[t._v("useEffect可以代替componentDidMount和componentDidUpdate生命周期函数")]),t._v(" "),s("li",[t._v("生命周期函数也成为‘副作用’，代表不是主要任务，是某些特定情况下执行的逻辑")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_04-useeffect代替componentwillunmount生命周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_04-useeffect代替componentwillunmount生命周期函数"}},[t._v("#")]),t._v(" 04：useEffect代替componentWillUnmount生命周期函数")]),t._v(" "),s("ol",[s("li",[t._v("useEffect的第二个参数是数组，空数组代表等组件销毁的时候在解绑，如果里面有数据变量，代表该数据变化时进行解绑；")]),t._v(" "),s("li",[t._v("使用了react-router-dom库，有Routes、Route、Link、BrowserRouter")])]),t._v(" "),s("h3",{attrs:{id:"_05-usecontext让父子组件传值更简单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-usecontext让父子组件传值更简单"}},[t._v("#")]),t._v(" 05：useContext让父子组件传值更简单")]),t._v(" "),s("ol",[s("li",[t._v("useContext替换了Vue的props，redux替换了Vue的Vuex")]),t._v(" "),s("li",[t._v("创建createContext，接收useContext；")]),t._v(" "),s("li",[t._v("JSX里面是xxx.Provider")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" countContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件接收")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收父组件传递过来的属性数据")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JSX里面使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("countContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("countContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"_06-usereducer介绍和简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_06-usereducer介绍和简单使用"}},[t._v("#")]),t._v(" 06：useReducer介绍和简单使用")]),t._v(" "),s("ol",[s("li",[t._v("useReducer类似Redux功能")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useReducer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sub'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("已经点击了"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("次"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("增加"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sub'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("减少"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hooks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_07-08-usereducer代替redux小案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_07-08-usereducer代替redux小案例"}},[t._v("#")]),t._v(" 07&&08：useReducer代替Redux小案例")]),t._v(" "),s("ol",[s("li",[t._v("const { dispatch } = useContext(ColorContext);// 一个是对象结构")]),t._v(" "),s("li",[t._v("const [state,dispatch] = useReducer(reducer,'red');// 一个是数组结构")])]),t._v(" "),s("h3",{attrs:{id:"_09-usememo优化react-hooks程序性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_09-usememo优化react-hooks程序性能"}},[t._v("#")]),t._v(" 09：useMemo优化React Hooks程序性能")]),t._v(" "),s("ol",[s("li",[t._v("useMemo、useCallback主要用来解决Hooks无用渲染的性能问题。")]),t._v(" "),s("li",[t._v("因为失去了"),s("code",[t._v("shouldComponentUpdate")]),t._v("组件更新之前这个生命周期")]),t._v(" "),s("li",[t._v("函数组件也没有了mount和update这两个状态，导致函数组件只要已调用就会执行全部逻辑。")]),t._v(" "),s("li",[t._v("变量当数据渲染，函数当dom渲染。")])]),t._v(" "),s("h3",{attrs:{id:"_10-useref用来获取dom和保存变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-useref用来获取dom和保存变量"}},[t._v("#")]),t._v(" 10：useRef用来获取Dom和保存变量")]),t._v(" "),s("h3",{attrs:{id:"_11-自定义hooks函数来获取窗口大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-自定义hooks函数来获取窗口大小"}},[t._v("#")]),t._v(" 11：自定义hooks函数来获取窗口大小")]),t._v(" "),s("p",[t._v("参链："),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/09/react-hooks.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Hooks 入门教程：阮一峰"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);