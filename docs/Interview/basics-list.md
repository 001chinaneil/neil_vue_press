# 核心高频

## 闭包
* 1. 概念：函数A返回函数B，其中函数B使用了函数A中的变量，那么函数B就被称为闭包。(嵌套函数使用了父级中的变量，它就是闭包，**导致父级的变量不能被释放回收**)
* 2. 使用let创造出块级作用域
* 3. [那些高级/资深的前端是如何回答JavaScript面试题的 ](https://juejin.cn/post/6971727286856843295) -- 闭包 (后面的评论值得一读，看看大家的想法)

## break continue return的辨析
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

## 为什么用Object.prototype.toString.call(obj)检测对象类型？
* 1. 用typeof不能判断一个对象变量，因为null和数组的结果也是object。
* 2. xxx.toString方法返回反映这个对象的字符串。
* 3. 不能直接使用obj.toString()的原因，因为toString为Object的原型方法，而Array、Function等类型作为Object的实例，都重写了toString方法。不用的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法(Function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串)，而不会去调用Object上原型toString方法。
* 4. 通过call将Array的this上下文切换到Object，从而调用了Object.prototype.toString()。

参链：
* [为什么用Object.prototype.toString.call(obj)检测对象类型?](https://www.cnblogs.com/youhong/p/6209054.html)

## 作用域链、词法作用域、执行上下文
* [参链](https://yhlben.com/blog/js-principle.html)

## 典型真题
1. 基本类型Symbol
用 Symbol 的最常见场景就是可以用来**模拟私有属性或方法**了，弥补了 JS 没有 OOP 语言常见的 private、public 这种可见性修饰符的不足。