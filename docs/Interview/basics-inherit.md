# 继承
* 定义：指一个对象直接使用另一个对象的属性和方法，子类继承父类的同时，支持重新定义某些属性或重写某些方法。（20210616晚）

## 原型链继承
* 缺陷：  
  1. 原型上任何类型的属性值，都不会被实例所重写，但是引用类型的属性值会因为实例的影响而被修改。  
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
TODO

参链：
* 1. [Object.create()和new object()和{}的区别](https://www.cnblogs.com/amujoe/p/13411181.html) Object.create(obj) obj将继承到原型链上。

总结：
* 1. 命运的橄榄枝又一次交到了自己手里，目前最大的敌人就是自己的懒惰，不骄不躁，稳扎稳打，久久为功，加油！！（20210616晚）