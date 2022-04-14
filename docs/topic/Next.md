# Next
20220408 新华科技大厦 begin
* React生态的服务端渲染解决方案，支撑SEO引擎抓取，加快首屏打开速度。
* [Next框架教程：技术胖](https://jspang.com/article/51)
* [Next官链文档](https://www.nextjs.cn/)
* 只需要把控标准和成本，具体过程由执行者负责。20220413
* 框架必要部分：
    * 1. 赋值数据的语法：`{}`
    * 2. 事件的调用：onClick
    * 3. 组件间数据传递的方式：todo
    * 4. 路由系统：pages文件夹下自动是页面路由
    * 5. 全局数据：Hooks
    * 6. 获取远程数据：`getStaticProps`和`getServerSideProps`
    * 7. 样式开发：style jsx

## 技术胖教程笔记
## 01&02安装&03pages&components
1. 可以用`npm`、`npx`、`create-next-app`创建项目
2. 比如：`npx create-next-app xxxx（项目名称）`
3. pages文件夹下的文件自动就是路由，不用创建路由文件
4. components下面就是组件，创建完之后，在使用的地方import引入后就可以使用。

## 04路由&05&06
1. Link路由和JS编码路由Router组件
```js
import React from 'react'
// Link路由
import Link from 'next/link'
// JS编码路由
import Router from 'next/router'
const Home = () => {
  function gotoA(){
    Router.push('/jspangA')
  }
  return(
    <>
      <div>我是首页</div>
      <div>
        <Link href="/jspangA">
          <a>
            <span>去JspangA页面</span>
            <span>前端博客</span>
          </a>
        </Link>
      </div>
      <div><Link href="/jspangB"><a>去JspangB页面</a></Link></div>
      <div>
        <button onClick={gotoA}>去JspangA页面</button>
      </div>
    </>
  )
}
export default Home
```
2. 传递参数
```js
function gotoXiaojiejie(){
    Router.push({
      pathname:'/xiaojiejie',
      query:{
        name:'井空'
      }
    });
}
```
3. 接收参数用`withRouter`
```js
import { withRouter} from 'next/router';
import Link from 'next/link';
const Xiaojiejie = ({router})=>{
    return (
        <>
            <div>{router.query.name},来为我们服务了 .</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}
export default withRouter(Xiaojiejie);
```
4. 路由钩子函数
```js
Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
})

Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
})

Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
})

Router.events.on('routeChangeError',(...args)=>{
    console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
})

Router.events.on('hashChangeStart',(...args)=>{
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
})

Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
})
```

## 07getInitialProps&08style jsx编写样式
1. Next使用getInitialProps来获取远程数据
2. 使用style jsx来写样式
```js
import React, { useState } from 'react';

// 函数命名要大写，React是识别大小写的
function JsPang(){
    const [color, setColor] = useState('blue');

    function colorChange(){
        setColor(color == 'blue' ? 'red' : 'blue');
    }

    return (
        <>
            <style jsx>
                {
                    `
                        div{color: ${color};}
                    `
                }
            </style>
            <div>技术胖</div>
            <button onClick={colorChange}>改变颜色</button>
            <JSPang>按钮组件</JSPang>
        </>
    )
}

export default JsPang;
```

## 09懒加载&10Head的SEO
1. 懒加载模块
```js
import React, {useState} from 'react'
//删除import moment
function Time(){

    const [nowTime,setTime] = useState(Date.now())

    const changeTime= async ()=>{ //把方法变成异步模式
        const moment = await import('moment') //等待moment加载完成
        setTime(moment.default(Date.now()).format()) //注意使用defalut
    }
    return (
        <>
            <div>显示时间为:{nowTime}</div>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}
export default Time
```
2. 懒加载组件：用dynamic
3. Head的SEO：`import Head from 'next/head'`，框架提供的封装后的组件

## 11集成antd库&12部署
1. `@zeit/next-css`让next框架可以加载CSS文件
2. next11及其之后都是用SWC代替了babel进行编译
3. 2种形式的预渲染：
    * 1. SSG：静态生成，在构建时生成，后面就复用了
    * 2. SSR：服务端渲染，每次请求进行重复渲染。（当每次请求都需要更新数据时，推荐）
4. 使用`getStaticProps`进行数据静态生成。它仅在服务器端运行。
5. 使用`getServerSideProps`进行服务器渲染的数据生成。（原来是这样啊！）