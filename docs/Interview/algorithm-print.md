# 各种输出系列
## 理论基础：
* 1. 作用域链：执行的时候时从‘车窗’里面向外看，可以搜索到一切变量和函数。外部环境却不可以访问内部的变量和函数。让访问变得有序。(闭包是个例外，让该回收的变量没有被回收，可以继续访问。) **在代码执行前，预编译的时候就确定了。**
* 2. 调用栈：从外到里依次压栈，从里到外依次出栈  
    当执行环境内的代码执行完毕后，里面的变量和方法都会被销毁，全局变量和方法是在网页关闭时被销毁。  
    参链：  
      [1. JS经典面试题--变量提升、执行环境、作用域链](https://segmentfault.com/a/1190000014437648)  
        非常经典：对象是引用类型，赋值是传递的地址引用，所以改变值会同时改变。
        ```js
        foo.n = 3;// 改变内存地址中的值
        var foo = { n: 2 } // 新开辟了一块内存地址
        ```
* 3. this执行上下文：this是在函数执行的时候确认的，而不是在函数定义的地方。[口诀：`变量确定(函数)定义处，this确定(函数)执行处`，变量this两互搏，分清确定是关键]   
    3.1 this指向问题：[简述this](https://yhlben.com/interview/js.html#_1%E3%80%81%E8%AF%B7%E7%AE%80%E8%BF%B0-javascript-%E4%B8%AD%E7%9A%84-this)  
    3.2 口诀：`new、call(bind、apply)、主动调，window来兜底；箭头函数继承父级(函数)this`  
    3.3 new , this是个全新对象  
    3.4 call、bind、apply  
    3.5 谁调用指向谁  
    3.6 以上都不满足，window兜底  
    3.7 箭头函数没有this，被设置为创建时的上下文，也就是上一级的this  
* 4. 私有属性、公有属性、静态属性  
    4.1. 私有属性、私有方法：函数内部的，外部是不能访问使用的  
    4.2. 公有属性、公有方法：`构造函数上(this)`的和`在原型链上`的，`需要实例化`才可以调用，其中**构造函数的属性/方法优先级高于原型链上的属性/方法**；  
    4.3. `静态属性、静态方法：无须实例化即可调用`，eg: Foo.getName = '张三';  
    4.4. 函数声明和函数表达式的区别：函数提升和运行时的差异    
      函数声明会被提升，所有在哪里调用都可以正常执行；`function getName(){}`    
      函数表达式是声明的变量被提升，函数赋值是在执行时被赋值的；`var getName = function(){}`  
* 5. 事件循环（同步、异步、宏任务、微任务）

## 问题1：
```js
var name = 'global'
function a() {
  console.log(name)
}

function b() {
  var name = 'b';
  a();
}

b();
```
<details>
    <summary>答案：</summary>
    global，理由：是定义函数时的作用域
</details>

## 问题2：
```js
function a() {
  console.log('1');
}

a();
function a() {
  console.log('2');
}
a();
```
<details>
    <summary>答案：</summary>
    2 2 <br> 
    理由：第二个函数a覆盖了第一个函数a，`函数也存在提升问题`；var是变量提升，但是赋值没有提升，所以是undefined；let是变量、赋值都不会提升，导致提前访问会报错。<br>  
    变量对象VO的创建过程：3步，创建arguments对象，后面的覆盖前面的，如果声明变量和函数名同名，则忽略声明变量。
</details>

## 问题3：
```js
var a = function () {
  console.log('1');
}

a();
var a = function () {
  console.log('2');
}
a();
```
<details>
    <summary>答案：</summary>
    1 2，  
    理由：变量a被提升了，但是赋值操作是正常流程，a的调用流程也是正常的，所以正常输出。
</details>

## 问题4：
```js
var name = 'global';
function a() {
  console.log(name);
}
a();

function b() {
  var name = 'b';
  function a() {
    console.log(name);
  }
  a();
}

b();
```
<details>
    <summary>答案：</summary>
    global b  
    理由：考察的是作用域链，声明变量确定定义处
</details>

## 问题5：
```js
var name = 'global';
function a() {
  console.log(this.name);
}
a();

function b() {
  var name = 'b';
  function a() {
    console.log(this.name);
  }
  a();
}
b();
```
<details>
    <summary>答案：</summary>
    global global  
    理由：因为b()里面的this是全局的，考察的是this指向问题
</details>

## 问题6：
```js
function a() {
  console.log('a')
  b();
  console.log('a end')
}

function b() {
  console.log('b');
  c();
  console.log('b end')
}

function c() {
  console.log('c');
}

a();
```
<details>
    <summary>答案：</summary>
    a、b、c、b end、a end
    理由：类似剥洋葱原理，考查的是JS调用栈的知识，先进后出。
</details>

## 问题7：滴滴交叉二面
```js
var a=0,b=0;
    
function A(a){
  A = function(b){
    alert(a+b++);
  }
  alert(a++);
}

A(1);
A(2);
```
<details>
  <summary>答案：</summary>
  1 4 <br>
  理由：考察了a++(先执行后++),++a(先++后执行)的区别; <br>
  重点考察了A()里面的赋值函数，会在A()执行时进行赋值操作，导致覆盖全局的A()函数，导致第二次执行A()时是执行新A()，产生了闭包A，a变量不会被释放。a是全局变量，会被第一次执行改变为2，第二次的结果是a+b，2+2
</details>

## 问题8：
```js
function print(fn1){
    let d = 200;
    fn1();
}
let d = 100;
function fn1(){
    console.log(d);
}
print(fn1);
```
<details>
  <summary>答案：</summary>
  100
  理由：考察作用域链，自有变量的查找，是在函数定义的地方，而不是在函数执行的地方！
</details>

## 问题9：私有属性、公有属性、静态属性
面向对象思想的基石 20210809午首著  
**示例：**
```js
function User(name) {
	var name = name; //私有属性
    function getName() { //私有方法
		return name;
	}
  
	this.name = name; //公有属性
}
User.prototype.getName = function() { //公有方法
	return this.name;
}

User.name = 'Wscats'; //静态属性
User.getName = function() { //静态方法
	return this.name;
}

var Wscat = new User('Wscats'); //实例化
```

**示例：** 考察了作用域链、this指向和各类属性的优先级；20210809
```js
var a = 1;
function Fn1(){
    var a = 2;
    console.log(this.a + a);
}
function Fn2(){
    var a = 10;
    Fn1();
}
Fn2();

var Fn3 = function(){
    this.a = 3;
}
Fn3.prototype = {
    a:4
}
var fn3 = new Fn3();// 此时的a是3，而不是4，构造函数的属性优先级高于原型上的属性
Fn1.call(fn3);
```
<details>
  <summary>答案：</summary>
  3 5
</details>

![构造函数优先级高于原型链](https://img-blog.csdnimg.cn/20210818115226274.jpg) 

参链：[js面向对象之公有、私有、静态属性和方法详解](https://www.cnblogs.com/huangshikun/p/6509822.html)

## 问题10：
* 1. 箭头函数的this作用域和它的上级相同，就是[箭头函数this没自己的作用域]
* 2. function(){}// 如果没人主动调用，最后就是window调用

```js
const zhangsan = {
	name: '张三',
	sayHi(){
		// this即当前对象
		console.log(this);
	},
	wait(){
		setTimeout(function(){
			// this === window，默认window在调用
			console.log(this);
		})
	},
    sleep: ()=>{ 
      console.log(this);// window
    }
}
```

## 问题11：20210720小米移动一面
```js
var n = 0;
function a() {
    var n = 10;
    function b() {
        n++;
        console.log(n);
    }
    b();
    return b;
}
var c = a();
c();
console.log(n);
```
<details>
  <summary>答案：</summary>
  11 12 0 <br>
  理由：考察作用域链和调用栈，产生闭包，使用的变量不会被释放 [哎，要记牢啊]
</details>

## 总结：
* 1. 前端几个核心问题：  
    1.1 通信问题：JS和浏览器、JS和客户端、JS和操作系统、小程序和webview、小程序和小程序  
    1.2 同步异步(执行顺序)：async...await、Promise、script标签的async和defer属性、Ajax、XmlHttpRequest、fetch  
    1.3 局部全局(作用域隔离)：Vue组件的return data{}  
    1.4 性能问题：时间纬度、空间纬度，比如webpack缩小检索范围、分包；浏览器的预渲染(返回HTML)、预加载、预解析(dns/proferch)  

参链：  
  [js 变量及作用域经典面试题](https://blog.csdn.net/gaoqiang1112/article/details/105197073/)  
  [web前端-js变量、作用域](https://blog.csdn.net/liona_koukou/article/details/51967398)  
  [js输出结果题汇总](https://blog.csdn.net/qq_33084055/article/details/103825362)  
  [JavaScript面试题](https://blog.csdn.net/weixin_42312074/article/details/95071175)  

