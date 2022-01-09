# 继承实现
* 定义：指一个对象直接使用另一个对象的属性和方法，子类继承父类的同时，支持重新定义某些属性或重写某些方法。（20210616晚）

## 原型链继承
* 缺陷：  
  1. 原型上任何类型的属性值，都不会被实例所重写，但是**引用类型的属性值会因为实例的影响而被修改**。  
  eg: `stu1.emotion.push("愁");` //emotion属性，stu1实例本身上是没有的，是继承了父类的属性，这时对emotion属性的修改，将会对父类进行修改，从而影响到了后面实例化出来的实例。
  2. 原型链不能实现子类向父类传值。

## 借用构造函数继承
* 优点：call()、apply()，解决了单纯性原型链继承，引用类型的属性值会被实例修改的问题。
* 缺点：每个实例都复制一份属性到自己身上，造成内存过大；一旦需求变化，变化之前的实例不能很好的更新，只有之后实例化出来的实例才有新属性；
* 1. this 谁调用它，它就指向谁。实质就是，实例化出来的每个实例都有构造函数和父类函数的所有属性的副本，之间互不影响。

```js
function student(studentID){
　　this.studentID = studentID;
　　Person.call(this); //这样子类student继承了父类Person。
}
```

## 组合继承
todo：还还需要深究原理和实现
* 定义：**在借用构造函数继承的基础上**加入原型链继承，实现部分属性的公用。（**把复用的属性放到父类的原型对象中**）

```js
function Person(){
　　this.head = "脑袋瓜子";
　　this.emotion = ['喜','怒','哀','乐'];
}

//1. 复用的属性，放到父类的prototype中
Person.prototype.eat = function(){
　　console.log('吃吃喝喝');　
}

Person.prototype.sleep = function(){
　　console.log('睡觉');
}

function Student(studentID){
　　this.studentID = studentID;
　　Person.call(this);// 2. 解决引用类型被子类修改覆盖父类的问题
}

Student.prototype = new Person();  //3. 此处代码更改了Student实例的constructor指向，指向了Person，所以下面一行要改过来。
Student.prototype.constructor = Student; // 4. 把子类的构造函数重新指向自己

var stu1 = new Student(1001);
```

## Class类
20220109第一遍学习
参链：[Class MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
1. Class不存在提升，所以要先定义，后使用，不然会报错的。
2. 分为类声明和类表达式
3. `constructor`用于创建和初始化一个由class创建的对象，一个构造函数可以使用`super关键字`来调用一个父类的构造函数。
4. `static`关键字用来定义一个类的静态方法。类的实例对象不能访问静态方法，通常用于为一个类的工具函数。point.displayName，其中point是类名
5. `extends`关键字来扩展子类，如果子类中定义了构造函数，那么要先在constructor中使用super，才能使用this。

参链：
* 1. [Object.create()和new object()和{}的区别](https://www.cnblogs.com/amujoe/p/13411181.html) Object.create(obj) obj将继承到原型链上。

总结：
* 1. 命运的橄榄枝又一次交到了自己手里，目前最大的敌人就是自己的懒惰，不骄不躁，稳扎稳打，久久为功，加油！！（20210616晚）
* 2. 夯实现有知识体系的同时，还要学会学习新知识补充进现有知识体系中来。学习新知识是需要大量的时间进行思考和总结的，单纯靠突击根本不行。（20220109 百度大厦F3四和春 学习Class有感）