# Next
20220408 新华科技大厦 begin
* React生态的服务端渲染解决方案，支撑SEO引擎抓取，加快首屏打开速度。
* [Next框架教程：技术胖](https://jspang.com/article/51)
* [Next官链文档](https://www.nextjs.cn/)

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