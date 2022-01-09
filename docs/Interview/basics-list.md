# 核心高频

## 闭包
* 1. 概念：函数A返回函数B，其中函数B使用了函数A中的变量，那么函数B就被称为闭包。(嵌套函数使用了父级中的变量，它就是闭包，**导致父级的变量不能被释放回收**)
* 2. 使用let创造出块级作用域，就可以不使用闭包了。
* 3. [那些高级/资深的前端是如何回答JavaScript面试题的 ](https://juejin.cn/post/6971727286856843295) -- 闭包 (后面的评论值得一读，看看大家的想法)  
     ```js
     闭包的底层实现原理 todo 
     【环境分三类、周期两阶段创建和执行(3+3)、预编译四部曲、创建VO三步骤】
     1、JS执行上下文：代码的运行环境和代码的预编译都是在这里。  
          1.1、分为三类：全局执行上下文、函数执行上下文、eval执行上下文（可以忽略）  
          1.2、执行上下文的周期分为两个阶段：    
               创建阶段：创建词法环境；生成变量对象（VO），**建立作用域链**；  
               执行阶段：变量赋值，函数引用，执行代码 
          1.3 预编译发生在函数执行之前，分为四部曲
               创建AO对象
               找形参和变量声明，将形参和变量作为AO属性名，值为undefined。
               将实参和形参相统一
               在函数体里找到函数声明，值赋予函数体
     2、概念阐述：变量对象VO
          2.1、JS引擎在内存中新建的对象，用来存储当前执行环境的变量。
          2.2、变量对象VO的创建过程（三步）：
               创建arguments对象；（原来是这个意思！！！ 20220108晚 百度大厦F4）
               当遇到同名的函数时，后面的会覆盖前面的。
               检查当前环境中的声明变量并赋值为undefined，当遇到同名的函数声明，为了避免函数被赋值为undefined，则会忽略此变量声明。
          2.3、变量对象变为活动对象
               发生在执行上下文的第二个节点，即执行阶段。
          2.4、词法作用域：查找变量的过程
          2.5、EventLoop、调用栈、执行栈 todo
               MDN上都没有执行栈这种叫法，只有调用栈的术语解释
     ``` 
* 4. 这道题如果全面深刻掌握了，JS基础也就稳了。（20220108 百度大厦F4 烛下海棠）
* 5. TODO 20220109  
     5.1、闭包的使用场景
* 6. 调用栈call stack：是解释器追踪函数执行流的一种机制。重点是**栈**，先进后出。[MDN call stack](https://developer.mozilla.org/zh-CN/docs/Glossary/Call_stack)

## break VS continue VS return
* 1. break和continue只能用在循环或switch里面  
     break是跳出当前循环语句，不再执行循环；  
     continue是仅仅跳出当前本次循环，继续执行下次循环；  
* 2. return只能用在函数体内，而且仅仅对当前函数生效。  
     return false 返回错误处理结果，终止执行，阻止表单事件和事件默认事件  
     return true 返回正确结果，终止执行  
     return 把控制权返回给页面 

参链：
* [js中的break,continue和return到底怎么用？](https://www.cnblogs.com/roashley/p/7752401.html) 

总结：
* 系统性学习 + 点缀性笔记，书籍、系统网课。（20200316晨）

## Object.prototype.toString.call(obj)
为什么用Object.prototype.toString.call(obj)检测对象类型？
* 1. 用typeof不能判断一个对象变量，因为null和数组的结果也是object。
* 2. xxx.toString方法**返回反映这个对象类型的字符串**。
* 3. 不能直接使用obj.toString()的原因，因为toString为Object的原型方法，而Array、Function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法(Function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串)，而不会去调用Object上原型toString方法。
* 4. 通过call将Array的this上下文切换到Object，从而调用了Object.prototype.toString()。

参链：
* [为什么用Object.prototype.toString.call(obj)检测对象类型?](https://www.cnblogs.com/youhong/p/6209054.html)

## 典型真题
1. 基本类型Symbol  
用 Symbol 的最常见场景就是可以用来**模拟私有属性或方法**了，弥补了 JS 没有 OOP 语言常见的 private、public 这种可见性修饰符的不足。
2. JS数据类型 8种  
     [仅供参链：](https://blog.csdn.net/u013592575/article/details/95087953) 要回本溯源 todo 20220109
     ```js
     2.1、Number、String、Boolean、undefined、Null、Object、Symbol（ES6新增）、bigInt（谷歌67，安全存储，操作大整数）  
     2.2、Object包含了哪几种？**Data、Function、Array**  
     2.3、基本类型和引用类型：  
          基本类型：Number、String、Boolean、undefined、Null  
          引用类型：Object
     2.4、NaN是Number中的一种，非Number。
     ```
     [bigInt官链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)