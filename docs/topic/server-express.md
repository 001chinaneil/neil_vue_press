# Express

* 课程链接：[汇智网课程](http://www.hubwiz.com/class/544db33888dba01ef09d0682)
* 20240726 下午

## 基本概念
1. Express算是Node领域比较知名、用途广泛的一款应用框架了。

```js
var express = require('express');
var app = express();
app.get('/', function (request, response) {  
   response.send('Hello World!');
});
 
app.listen(80);

/*
1. 引进包，创建应用，监听路由，监听端口，一个简单的服务器服务就完成了。
2. 任何一门计算机语言都是一层“窗户纸”，背后都是API、逻辑、使用场景。
*/
```

```js
var express = require('express');
var app = express();
app.get('/', function (request, response) {  
   response.send('欢迎来到首页！');
});

app.get('/about', function (request, response){
	response.send('欢迎来到关于页面！')
});

app.get('*', function(request, response){
	response.send('404 error!')
})
 
app.listen(81);

/*
1. 这就实现了基本的路由监听，返回静态页面的功能基本可以满足了。
*/
```

2. middleware中间件是处理HTTP请求的函数，用来完成各种特定任务，最大特点是中间件处理完能把数据传递给下一个中间件。

```js
function Middleware(request, response, next){
	// 不执行next() 或者 next带有参数，后面的中间件都不会执行
  next()
}
```

3. app.all()可以匹配所有的HTTP动词，可以过滤所有路径的请求。
```js
app.all(path,function(request, response));
```

4. app.use()是Express调用中间件的一个方法，它返回一个函数。
```js
app.use([path], function(request, response, next){});
```

5. app.use()还可以根据不同的请求路径，返回不同的内容。

```js
app.use(function(request, response, next){
	if(request.url === '/about'){
    	response.send('欢迎来到 关于 页面！');
    }else {
    	next();	
    }
});
```

6. request里面包含主机名和路径名
```js
app.use(function(request, response, next){
	if(request.url === '/about'){
    	response.send(`${request.hostname} : ${request.path}` );
    }else {
    	next();	
    }
});
```

7. query是get方法里面获取请求路径参数的对象属性，比如xxx?a=1
```js
app.use("*",function(request, response, next){
   console.log('请求参数：', request.query.a)
	next();	
})
```

8. params的基本用法：获取路由规则里面的值；
```js
app.get("/user/:name", function(req,res){
	console.log(req.params.name, '获取路由规则的参数对象值！')
})
```

9. send()是返回响应值
```js
可以是字符串、数组、对象或者数值

// 数值会有个对应值
res.send(200); // OK
res.send(404); // Not Found
res.send(500); // Internal Server Error
```

## 准备登录

1. 模板引擎
* express框架默认是ejs和jade模版

2. 静态资源
* 在项目目录下面新建public文件夹，存放css、js、images等静态资源
```js
app.use(express.staic(require('path').join(__dirname, 'publick')));

//expres.staic 指定静态资源的查找目录
```

3. 渲染页面
```js
var express = require('express');
var app = express();
var path = require('path');
 
app.set('views', __dirname);
 
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );
 
app.get('/', function(req, res) {
   res.render('index');
   // render函数，对网页模板进行渲染。
   // res.render(view, [locals], callback); 渲染函数
});
 
app.listen(80);
```

4. 重定向
* 使用redirect实现重定向，**res.redirect([status], url);**，默认status是302。

```js
1. 前端FE实现静态资源
2. 后端RD实现动态逻辑
```
