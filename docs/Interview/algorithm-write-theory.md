# 实现原理编码

## 一、深拷贝  
20220110 铭科苑 F6 二刷
1. 口诀：**(4步走，1.定义判断数组和对象的工具函数，2.简单类型直接返，3.数组对象用扩展，4.利用递归搞循环(嵌套))**  
2. 浅拷贝方法：`Object.assign()`、`{...obj}` 、`Array.prototype.slice()` 、`Array.prototype.concat()`  
3. WeakMap(ES6新增)：提供了一种主动解决内存回收的方式，TODO，先不展开  
   属性：WeakMap.prototype.constructor  
   方法：set、delete、has、get  
4. 循环引用问题：TODO  
5. 递归爆栈问题：TODO  
```js
function deepClone(obj) {  
    // 1. 定义判断对象&数组的工具函数
    function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
        
    function isArray(obj) {
        return Array.isArray(obj);
    }

    let result;
    // 2. 拷贝简单类型，直接返回
    if (!isObject(obj) && !isArray(obj)) {
        return obj;
    }

    // 3. 对象&数组情况，(利用扩展运算符是浅拷贝，只拷贝第一层)
    if (isObject(obj)) {
        result = {...obj};
    }
    
    if (isArray(obj)) {
        result = [...obj];
    }

    // 4. 递归处理[重点][非常好，就是用for...in进行循环遍历]，因为for...in会循环原型链上的属性，所以用hasOwnproperty过滤一下
    for (var key in obj) {
        if(obj.hasOwnProperty(key)){
            if ( isObject(obj[key]) || isArray(obj[key]) ) {
                result[key] = deepClone(obj[key]);
            }
        }
    }

    return result;
}
```  
参链：[面试题之如何实现一个深拷贝](https://www.muyiy.cn/blog/4/4.3.html#%E5%BC%95%E8%A8%80)  [经典！]

## 二、防抖：  
* **防抖函数：防止多次调用，在时间间隔内只最后调用一次。(口诀：每次执行前都要清空定时器，return一个闭包)**  
如果对逻辑执行有要求，那用节流就好了。
```js
// 这是防抖函数
function debounce(callback,timeout){
    // 1. 声明定时器ID & 是否执行完毕(默认执行完毕)
    let id;// 定时器存储器
    return function(...arguments){
        // 2. 清空定时器(所以防抖要清空)    
        clearTimeout(id);
        id = setTimeout(()=>{
            callback.apply(this,arguments);
        },timeout);
    }
}
```

## 三、节流：  
* **节流函数：防止多次调用，每隔一段时间进行一次调用。(口诀：每次执行前都要检查定时器，非空则返回，return一个闭包)**
场景：被频繁调用的，window.onresize()、mousemove事件、上传进度等，希望可以间隔性的更新；是需要立即执行的。  
```js
// 1.自我实现1 利用时间戳(立即执行)
function throttle(callback,timeout){
    let lastExceTime = 0;
    return function(...arguments){
        let now = +new Date();
        if(now - lastExceTime > timeout){
            callback.apply(this,arguments);
            lastExceTime = now;
        }
    }
}

// 2.自我实现2 检查此时定时器是否为空[推荐]
// immediate是否立即执行
function throttle(callback,timeout,isImmediate){
    // 1. 上一轮是否执行完毕标志
    let flag = true;
    return function(){
        if(flag){
            flag = false;
            // 2. 立即执行还是延迟执行 二选一
            isImmediate && callback.apply(this,arguments);// 延迟执行完才会回到flag = true状态
            setTimeout(() => {
                !isImmediate && callback.apply(this,arguments);
                // 3. 执行完毕恢复初始状态
                flag = true;
            },timeout);
        }
    }
}
```  

错误示例：  
停顿之后，再次点击，发现立即执行逻辑不再生效，因为immediate变量会被缓存
```js
function throttle(callback,timeout,immediate = true){
    let throttleId;
    return function(...args){
        if(throttleId) return;
        if(immediate){
            callback.apply(this,args);
            immediate = false;
            return;
        }
        throttleId = setTimeout(()=>{
            callback.apply(this,args);
            throttleId = null;
        },timeout);
    }
}
```    
## 四、手写splice  
1. this是原数组，通过slice进行截取  
2. 通过`this[i] = newArr[i]`的形式进行改写  
3. `this.length = newArr.length`，完成长度改造
4. 注意入参、返回值、特性（会改变原数组）
```js
Array.prototype.mysplice = function(start, nums, ...args) {    
    // 被删除元素，这是最终的返回值
    let deleteCounts = this.slice(start,start+nums);
    // 删除元素后应该的原数组
    let newArr = [...this.slice(0, start), ...args, ...this.slice(start+nums)];
    
    for(let i = 0; i< newArr.length; i++) {
      // 改变原数组的核心步骤
      this[i] = newArr[i];
    }
    // 改变原数组的核心步骤
    this.length = newArr.length;

    return deleteCounts;
}

let arr = [1,2,3,4,5,6];
console.log(arr.mysplice(-2,1),arr);
```  
## 五、手写call、apply、bind函数  
1. arguments是类数组，里面是所有的入参，[...arguments]可以转换成真正的数组;  
2. this是被调用函数，context是目标对象。  
3. 核心逻辑：让目标对象有之前没有的调用函数，返回执行结果，再把新增的调用函数删除。
**call**
```js
// 让目标对象有之前没有的调用函数，返回执行结果，再把新增的调用函数删除；入参：目标对象，字符串
// 工具函数入参中的...arguments，能把调用函数时的其余入参合并成一个数组形式。
// 调用函数时入参中的...arguments，能把数组转成一个个元素的形式。
Function.prototype.myCall = function(context,...arguments){
    context.fn = this;
    let result = context.fn(...arguments);
    delete context.fn;
    return result;
}

function a(){
    console.log(this.name);
}
let b = {
    name: 'zhangsan',
}
a.myCall(b,'1','2');
```

**apply**  
[MDN apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)  
todo 没有实现apply合并数组的并改变原数组的功能，MDN上有示例。
```js
// 让目标对象有之前没有的调用函数或属性，返回执行结果，并删除新增的函数或属性；入参：obj, 数组参数；
Function.prototype.myApply = function (context,arguments){
    let fn = Symbol('fn');
    context[fn] = this;
    let result = context[fn](arguments);
    delete context[fn];
    return result;
}

let a = {
};

let b = {
    c: function(arr){
        return arr[0] + arr[1];
    }
}

console.log(b.c.myApply(a,[1,2]));
console.log(a);
```

**bind是个难点，要晕了！TODO**  
[参链1](https://yhlben.com/interview/js.html#_6%E3%80%81%E6%89%8B%E5%86%99%E4%B8%80%E4%B8%AA-bind-%E5%87%BD%E6%95%B0)  
[参链2](https://blog.csdn.net/q3254421/article/details/82999718)  
* bind返回的是个函数
* 对于普通函数，绑定this指向。
* 对于构造函数，如果当前this是返回函数的示例，就返回this否则返回context，并保证原函数的原型对象上的属性不丢失。
```js
// 复杂版，还是没看懂
Function.prototype.mybind = function(ctx, ...rest) {
  // 根本不需要进行判断，如果是其他类型，会因为找不到mybind函数而报错的
  //if (typeof this !== 'function') {
  //  throw new Error('只能由 function 调用');
  //}
  // 步骤1：把this执行赋值新变量
  const func = this;
  // 步骤2：返回一个新函数，函数里面用apply
  let result = function(...params) {
    return func.apply(
      // 问题1. 为什么要判断是不是构造函数的实例？[不然的话，new操作会改变ctx对象的属性的，其实是想改变实例的属性值]
      // 如果是 new 对象出的，this 绑定的应该绑定为构造函数
      this instanceof result ? this : ctx,
      rest.concat(params)
    );
  };
  // 问题2. 为什么要设置一个空函数？
     [不改的话，是个对象]
  // 问题3. 为什么要设置原型链接？[不然new出来的实例的构造函数就是result了，其实应该是调用函数，要回本溯源，new会返回一个新对象]
  // 步骤3：巧设空函数当桥梁，返回函数的原型是空函数的原型
  let fNOP = function() {};
  fNOP.prototype = func.prototype;
  result.prototype = new fNOP();
  console.log(result,result.prototype);
  return result;
};
```

```js
// 20220111 早 神三元版本
Function.prototype.myBind = function(context, ...args) {
    let self = this;//谨记this表示调用bind的函数
    let fBound = function() {
        //this instanceof fBound为true表示构造函数的情况。如new func.bind(obj)
        return self.apply(this instanceof fBound ? this : context || window, args);
    }
    // fBound.prototype = Object.create(this.prototype);//保证原函数的原型对象上的属性不丢失 ？？
    fBound.prototype = this.prototype;
    return fBound;
}
```

## 六、Promise的实现：TODO
参链：[JavaScript异步与Promise实现](https://zhuanlan.zhihu.com/p/26815654)  
1. 概念：什么是Promise，一种可以链式调用、解决之前回调地域的异步编程方式  
2. 回调地域：指一层嵌套一层，代码冗余、难以维护、可读性差的异步编程方式  
3. Promise用法：
```js
// then()返回的也是个Promise对象
let p1 = new Promise((resolve,reject)=>{
    resolve();// 是个函数
    reject();// 是个函数
});

p1.then((resolve,reject)=>{
    resolve();// 是个函数
    reject();// 是个函数
    }
)
.then()
.then()
```

## 七、手写instanceof：  
**判断实例对象的原型链(__proto__)上是否有构造函数的原型prototype (口诀：要是new出来的实例对象，考察的API的定义，原型链的含义)**
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)  
小米一面真题
```js
function myInstanceof(left,right){
	left = left.__proto__;
    let prototype = right.prototype;
    while(true){
    	if(left === null){
        	return false;
        }
        if(left === prototype){
        	return true;
        }
      
      	left = left.__proto__;
    }
}
```

## 八、手写new操作符  
参链：  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)  
[js如何手写一个new](https://www.cnblogs.com/sunhang32/p/11905393.html)  

概念：创建一个用户定义的**对象类型的实例**或**具有构造函数的内置对象的实例**  

操作过程：  
1. 创建一个空的JavaScript对象({})。  
2. 给创建的对象添加属性`__proto__`，链接至构造函数的原型对象。  
3. 把创建的对象作为this的上下文。  
4. 如果该函数没有返回对象，则返回this(创建的新对象)。  

核心：**返回新对象和改变this指向**。

```js
function myNew(father,...rest){
    let obj = {};
    obj.__proto__ = father.prototype;
    let result = father.apply(obj,rest);

    // typeof null => object; null instanceof Object => false;
    // if(typeof result === 'object' && !!result){
    //     return result;
    // }else {
    //     return obj;
    // }

    return result instanceof Object ? result : obj;
}
```

## 九、手写reduce  
+ 实现累加器
+ 参数：回调函数，初始值
+ 返回值：是一个累积的值 [易混点]
+ 核心：**抓住入参和返回值，用其他类似的方法去实现目标**，(目标、目标、目标，一切为了目标！)
+ 比如：实现一个求数组和的函数，用forEach去实现 
+   1. 返回一个累加值
+   2. 实现callback的四个参数、如果没有初始值就用第一个值代替 

```js
Array.prototype.myReduce = function(callback,init){
    let prev = init;
    this.forEach((item,index,arr)=>{
        prev = !!prev ? callback(prev,item,index,arr) : item;
    });

    return prev;
}

let a = [1,2,3];

let b = a.myReduce(function(prev,curr,index){
    return prev + curr;
});

console.log(b);// 6
```

## 十、手写flat
+ 功能：实现数组降维  
+ 参数：数字(在原先基础上降几维)  
+ 返回值：新的数组
```js
Array.prototype.myFlat = function(num = 1){
    // num默认为1，while是个简版递归
    let _this = this;
    let count = 0;
    while(_this.some((item) => (Array.isArray(item))) && count < num){
        count++;
        _this = [].concat(..._this);
    }

    return _this;
}

let a = [1,[2,[3,[4,[5]]]]];
let b = a.myFlat(3);
console.log(b);// [ 1, 2, 3, 4, [ 5 ] ]
```  
总结：  
+ 基础概念：`let arr3 = arr1.concat(arr2);` // 返回一个新数组
+ 使用while和some特性
+ 返回新数组，不能改变原this
+ some 简写的用法，什么时候可以不用return: 在不用{}的情况下，如果分不清，就用()括起来

## 十一、手写Promise.all 
* 1. 参数是个数组，非数组，返回错误信息
* 2. 数组里面有一个报错就结束全部请求，一切正常的话，返回一个数组(依据索引)来对应参数的顺序
* 3. 返回的是一个Promise对象[这是手写API的框架重点]

```js
Promise.myPromiseAll = function (arr = []){
    if(Object.prototype.toString().call(arr) !== '[object Array]'){
        return new Promise((resolve,reject)=>{
            reject(new Error('参数非数组，请检查入参~'));
        });
    }

    let count = 0;// 循环计数，只有请求成功后才加1，保证最后一次请求成功后就返回整体的结果
    let resultValue = [];// 结果存储
    return new Promise((resolve,reject)=>{
        for(let i = 0;i < arr.length;i++){
            let curr = arr[i];
            let currPromise = curr.then ? curr : Promise.resolve(curr);
            currPromise.then((res)=>{
                console.log(res);
                resultValue[i] = res;
                
                // 关键步骤
                count++;
                if(count == arr.length){
                    resolve(resultValue);
                }
            },(error)=>{
                console.log(error);
                reject(error);
            });
        }
    });
}
```

## 总结&参链：
* 1. 手写原理API实现，最重要是三点：入参，特性，返回值。20220110 铭科苑 F6
* [剖析并手写十五个重要 API 的实现：神三元](https://mp.weixin.qq.com/s/BTzLPZpU6VeDEmeocgQSGA)






    



