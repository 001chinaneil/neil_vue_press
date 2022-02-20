# 事件循环
20220208 二刷done 铭科苑F6
* 背景：JavaScript是单线程语言，所有任务都要进入到主线程中进行执行。
* 为了处理高优先级的任务，和解决单任务时间过长的问题

## 一、任务队列
* 1. 所有任务分为同步和异步任务。同步任务是立即执行的任务，会进入到主线程中；异步任务通过任务队列(Event Queue)的形式进行协调。
* 2. 主线程执行完，会读取任务队列的异步任务并执行，这称为事件循环(EventLoop)。
* 3. 每进行一次事件循环称为tick。
* 4. 任务分为宏任务(Macro)、微任务(Micro)，每个宏任务执行完毕后，都要清空所有的微任务。
* 5. 实例：
macrotask 主要包含：script( 整体代码)、setTimeout、setInterval、I/O、UI 交互事件、setImmediate(Node.js 环境)、渲染事件、请求、事件绑定、回调函数    
microtask 主要包含：Promise、async await、MutaionObserver(监听DOM)、process.nextTick(Node.js 环境)、proxy
* 6. 总结：
**同步队列、异步队列(宏任务、微任务) => 同步队列执行完，会读取异步队列（在执行下一个宏任务之前会执行清空微任务列表）。**  
**微任务队列是在执行宏任务执行过程中产生的。**
* 7. 易错点：
只有`Promis.resolve()`才叫加入了微任务中，分清同步队列、异步队列，异步队列又分清**微任务**和宏任务。  
await 默认返回一个Promise对象，所有后面的代码都会被装到promise.then的回调函数里。[易错点]
* 8. 浏览器是多线程的，JavaScript是单线程的。

## 二、经典题
### 题目一：
```js
// 先执行同步任务，在执行下一个宏任务前，先清空微任务队列。
async function async1 ()  {
    console.log('async1 start');
    await  async2();
    console.log('async1 end');// 这里是易错点！！！会被包裹在微任务中
}

async function  async2 ()  {
    console.log('async2');// 这里是易错点！！！这里是同步任务
}

console.log('script start');

setTimeout(function ()  {
    console.log('setTimeout')
},  0);

async1();

new Promise(function (resolve)  {
    console.log('promise1');// 这里是易错点！！！这里是同步任务
    resolve()
}).then(function ()  {
    console.log('promise2')
});

console.log('script end')
```
输出：
```js
script start
async1 start
async2
promise1
script end
async1 end // 微任务
promise2 // 微任务

setTimeout
```

### 题目二：
```js
// 神策 营销云 一面真题
console.log(1)
// 宏任务
setTimeout(()=>{
    console.log(2);
},0)

new Promise((resolve)=>{
    console.log(3);
    for(let i = 0;i < 1000;i++){
        if(i === 999){
            // resolve()都是同步的，只是执行是异步的
            resolve();
        }
    }
    console.log(4);// 都是同步的代码
}).then(()=>{
    console.log(5);
})
console.log(6);
```
```js
//输出 
1 
3 
4 
6 
5 
2
```

## 三、参链
1. [看完还不懂JavaScript执行机制(EventLoop)，你来捶我](https://juejin.cn/post/6992985462163898382) [非常赞][二刷 20220206海淀图书馆北馆 F3]
2. [深入理解JavaScript事件循环机制](https://www.cnblogs.com/yugege/p/9598265.html) [非常赞][二刷 20220207铭科苑]
3. [JavaScript有同步任务和异步任务，浏览器是怎么处理的？](https://www.cnblogs.com/songyao666/p/15405742.html) [二刷]
4. [【事件循环】【前端】事件原理讲解，超级硬核，忍不住转载](https://link.juejin.cn/?target=https%3A%2F%2Fb23.tv%2Ft9Ltpi)

## 四、总结
1. 知识分类的上限就是5个，满5个就拆分。
2. 越来越感觉薄弱的知识点很多，都是浅尝辄止，没有深挖和实践