# 请求方式 
* 异步请求的进化史：XmlHttpRequest => Ajax => Promise => Generator => async...await（20210618午）

## Promise
1. 概念：状态机，pending => 通过函数resolve转变为resolved；pending => 通过函数reject转变为rejected；  

2. 用法：  
* 1. `p = new Promise((resolve,reject)=>{}); p.then((data)=>{},(error)=>{});`  **then第二个参数是捕获异常的** 等价于.catch((error)=>{}) (如果同时存在，then里面的catch优先捕获到错误，实践结论)
* 2. 是 **实例用.then()** 的
* 3. `Promise.race([]).then()` **只要一个返回成功就行；返回最先执行成功的那个**，特别像数组的some()
* 4. `Promise.all([p1,p2,p3]).then()` **全部返回成功才行；而且无论实例p1、p2、p3谁执行的快慢，最后的返回都是固定顺序p1、p2、p3的结果，数组形式** [202106美团一面，耻辱啊]，特别像数组的every()

3. 总结：Promise只是包装控制了异步程序流程，http请求还是xmlhttprequest 

### 示例
* 1. 手写Promise实现原理 TODO

## async...await
* 1. 概念：async 函数就是将 Generator 函数的星号（*）替换成 async，将 yield 替换成 await，仅此而已。 
* 2. 优点：内置执行器；更好的语义；更广的适用性； 
* 3. **await后面尽量跟一个promise对象，否则原来是什么就还是什么。async是不管内部函数返回什么，都是处理成一个promise对象进行返回。**

## 典型真题
1. JS按顺序执行多个异步函数
```js
// 实现功能函数，让数组中的函数，顺序执行
// 参链：[js按顺序执行多个异步函数] https://www.cnblogs.com/zhaoyongblog/p/12869497.html
let newarr = [
    (done) => {
      setTimeout(() => {
       console.log('1')
       done();
      }, 3000)
    },
    (done) => {
      setTimeout(() => {
       console.log('2')
       done();
      }, 2000)
    },
    (done) => {
      setTimeout(() => {
          console.log('3');
          done();
      }, 1000);
    }
]  

mySort(newarr);
```

题解：
```js
// 能让异步代码保持顺序的，只有Promise的resolve函数，别的根本控制不住
// 感觉题干已经给出了解题思路了，done()
async function mySort(arr = []){
    if(Object.prototype.toString.call(arr) !== '[object Array]'){
        return new Error('非数组类型，请检查输入~');
    }

    let arrList = [];
    for(let item of arr){
        let p = function(){
            return  new Promise((resolve)=>{
                        item(resolve);
                    });
        }
        arrList.push(p);
    }

    // console.log(arrList);

    // 方法一：
    // let run = function(){
    //     if(!arrList.length) return;
    //     let fun = arrList.shift();// 每次返回的都是一个新的Promise对象
    //     fun().then(()=>{
    //         run();
    //     });
    // }

    // 方法二：
    // let run = function(i){
    //     if(i>=arrList.length) return;
    //     let fun = arrList[i];
    //     fun().then(()=>{
    //         i++;
    //         console.log('i',i);
    //         run(i);
    //     });
    // }

    // run(0);

    // 方法三：await 后面必须是个Promise对象？
    // 官链：[await MDN] https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await
    //     1. [返回值] = await [表达式]
    //     2. await操作符后面跟一个Promise对象，只能在async函数中使用；如果不是一个Promise对象，将直接返回表达式(原来什么样就是什么样)
    //     3. 表达式的resolve的值将作为返回值
    // 官链：[async MDN] https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
    //     1. async函数是AsyncFunction构造函数的实例，是基于Promise的一种更简洁的写法，而不必刻意的使用链式调用。
    //     2. 返回一个Promise，不管函数体里面是不是显式的返回了Promise
    while(arrList.length){
        await arrList.shift()();
    }
}
```

2. 限制数量请求池函数实现 todo  
参链：[限制数量请求池函数实现](https://segmentfault.com/a/1190000040197250)  
[23行代码实现一个带并发数限制的fetch请求函数](https://juejin.cn/post/6844903796506624014)  todo  
20220109 百度大厦F3 四和春 第一次自主写出来了 赞！
```js
const request = createRequestPool(3);
for (let i = 0; i < 5; i++) {
    request('https://e.juejin.cn/extension/banner').then((res)=>{
        console.log(res);
    }).catch((error)=>{
        console.log(error);
    })
}

/**
 * 记笔记，待验证，伪代码
 */
function createRequestPool(poolSize) {
    // 1. 排队池：待发送请求的列表
    const reqs = [];
    // 2. 请求池：排队发送请求中的列表
    const temps = [];
  
    // 最终返回的是一个发送请求的封装函数
    return function (url) {
        // 4. 执行队列
        function runTask() {
            // 请求池的添加条件：添加到排队发送请求列表中，等请求池满了为止
            while (reqs.length && temps.length < poolSize) {
                temps.push(reqs.shift());
            }
    
            // 遍历排队发送请求的队列，发起请求
            for (let i = 0; i < temps.length; i++) {
                fetch(temps[i].url)
                    .then((data) => {
                        console.log('索引 then：',i);
                        // 移除当前请求，并返回结果
                        temps[i].resolve(data);
                        temps.splice(temps.indexOf(temps[i]), 1);
                        
                        // 开启队列：每完成一个，就需要执行队列中的任务
                        runTask();
                    })
                    .catch((err) => {
                        console.log('索引 catch：',i);
                        // 移除当前请求，并返回结果
                        temps[i].reject(err);
                        temps.splice(temps.indexOf(temps[i]), 1);
                        
                        // 开启队列
                        runTask();
                    });
            }
        }
    
        // 3. 最终实质返回的是个Promise对象
        return new Promise((resolve, reject) => {
            // 把新的请求添加进待请求列表中
            reqs.push({
                url,
                resolve,
                reject
            });
            // 开启队列
            runTask();
        });
    }
}
```

3. 剥洋葱模型
参链：[洋葱模型JS实现](http://js.jsrun.net/7fwKp/edit)  
特别像JS的调用栈

题目：
```js
let middleware = []
middleware.push((next) => {  
    console.log(1)
    next()
    console.log(1.1)
})
middleware.push((next) => {
    console.log(2)
    next()
    console.log(2.1)
})
middleware.push((next) => {
    console.log(3)
    next()
    console.log(3.1)
})
let fn  = compose(middleware);
fn()
// 实现使得输出为1 2 3 3.1 2.1  1.1
function compose() {

}
```

题解一：利用函数的嵌套，JS的调用栈
```js
function compose(middleware) {
    // 利用JS的调用栈
    return function (){
        dispatch(0);

        function dispatch(i){
            let fn = middleware[i];
            // 终止条件
            if(!fn) return null;
            // 拿到之后，把下一个执行函数塞进去
            fn(function next(){
                dispatch(i+1);
            });
        }
    }
}

let fn  = compose(middleware);
fn();
```

题解二：支持异步和传参
```js
function compose(middleware){
    return async function(){
        await dispatch(0);
        async function dispatch(i){
            let fn = middleware[i];
            if(!fn) return null;
            await fn(function next(){
                dispatch(i+1);
            })
        }
    }
}
```

题解三：使用Promise
```js
function compose(middleware){
    return function (...args){
        dispatch(0);
        function dispatch(i){
            return new Promise((resolve)=>{
                let fn = middleware[i];
                if(!fn) resolve(null);
                resolve(fn(function next(){
                    dispatch(i+1);
                },...args));
            });
        }
    }
}
```

## 其他类型的Promise面试题
* [【建议星星】要就来45道Promise面试题一次爽到底(1.1w字用心整理)](https://juejin.cn/post/6844904077537574919) [非常赞！]
```js
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolve3');
    console.log('timer1')
  }, 0)
  resolve('resovle1');
  resolve('resolve2');
}).then(res => {
  console.log(res)
  setTimeout(() => {
    console.log(p1)
  }, 1000)
}).finally(res => {
  console.log('finally', res)
})
// 输出结果：
// resovle1 
// finally undefined
// timer1
// Promise resovled undefined

// 知识点：
1. Promise的状态一旦改变就无法改变。
2. finally不管Promise的状态是resolved还是rejected都会执行，
且它的回调函数是接收不到Promise的结果的，所以finally()中的res是一个迷惑项。
3. 最后一个定时器打印出的p1其实是.finally的返回值，
我们知道.finally的返回值如果在没有抛出错误的情况下默认会是上一个Promise的返回值(3.10中也有提到), 
而这道题中.finally上一个Promise是.then()，
但是这个.then()并没有返回值，所以p1打印出来的Promise的值会是undefined，
如果你在定时器的下面加上一个return 1，则值就会变成1。
```

### 实现每隔1秒输出1,2,3
```js
// 解法一：利用Promise.then的顺序特性
function printNums(arr = []){
    arr.reduce((prev,curr)=>{
        return prev.then(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log(curr)
                    resolve();
                },1000);
            });
        });
    },Promise.resolve());
}

// 解法二：利用循环和setTimeout时间参数
function printNums(arr = []){
    for(let i = 0;i < arr.length;i++){
        setTimeout(()=>{
            console.log(arr[i]);
        },i*1000);
    }
}

// 解法三：利用递归的特性
function printNums(arr = [],i = 0){
    setTimeout(()=>{
        if(i < arr.length){
            console.log(arr[i]);
            printNums(arr,i+1);
        }else {
            return;
        }
    },1000);
}
```

参链：
1. [Promise入门详解和基本用法](https://www.cnblogs.com/qianguyihao/p/12660393.html)
2. [大厂面试题手写Promise源码](https://www.cnblogs.com/lyt0207/p/12387564.html) [重点]
3. [async 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/async.html) [阮一峰]

总结：
1. 每学一遍知识点，要有**悟的过程和悟的结论**，战胜懒惰，追求极致。20210618
2. 当前如果知识点晦涩难懂，也许是讲述的问题，换个文章去看，也许会对自己的思路。