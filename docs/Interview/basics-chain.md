# 原型链
* 口诀：任何一个对象都有一个___proto___属性，指向构造函数的原型prototype，而prototype也是一个对象，也有一个__proto__属性，这样一环接一环，就形成了一个链，到最后Object.prototype截止。（20210616晚：总结性描述）
* 1. 继承，就是拿到了别的对象的属性和方法。eg: `Dog.prototype = new Animal();` 【把一个构造函数的原型对象指向了新的一个构造函数的实例】，Dog继承了Animal上所有的属性和方法。
* 2. 就是实例能够访问到原型对象下的属性和方法，当原型对象指向发生改变，这个实例就也能访问到被指向对象(实例/函数)的所有属性和方法。
* 3. JS，一切皆对象。
* 4. JS，是一门基于JS引擎的语言。

```js
Person.prototype.constructor == Person;
person1.constructor == Person;

person1.__proto__ == Person.prototype;
```

## 第一篇
* 1. [规定]实例的**构造函数属性(constructor)**指向构造函数。eg: Person1.constructor == Person
* 2. 凡是通过new Function()创建的对象都是函数对象，其余对象都是普通对象。
* 3. 每当定义一个对象的时候，**对象中总会包含一些预定义的属性**，其中每个函数对象都包含一个prototype属性，**这个属性指向函数的原型对象**。
* 4. 总结：**每个对象都有 _proto_ 属性，但是只有函数对象才有prototype属性**。
* 5. 原型对象，顾名思义，就是个普通对象。**Person.prototype 就是原型对象**。
* 6. Person.prototype.constructor == Person; //在默认情况下，原型对象的constructor属性是个指针，指向prototype属性所在的Person函数。
* 7. 结论: **原型对象(Person.prototype)是构造函数(Person)的一个实例**。[20210705]
* 8. 原型对象主要用来做继承。
* 9. [特殊]Function.prototype，它是函数对象，但它没有prototype属性。

## 第二篇
* 1. [规定]JS在创建对象时，都会有一个 _proto_ 的内置属性，**用于指向创建它的构造函数的原型对象**。eg: `person1._proto_ == Person.prototype;`
* 2. [起始]创建对象的构造器(应该是9个)，有`Object,Array,Date,Function,String,Number,Boolean,RegExp,Error`。
* 3. Object.prototype._proto_ == null ; //null处于原型链的顶端
* 4. **一个普通对象的构造函数是Object**。

## 第三篇
* 1. 所有的构造器都来自于Function.prototype，包括根构造器Object和自身Function。所有构造器都继承了Function.prototype的属性和方法，比如bind,apply,call,length。

* 2. Function.prototype._proto_ === Object.prototype; 也继承了Object.prototype上的所有方法，比如`toString()`，`valueOf()`,`hasOwnProperty`。  
     **构造器来自于Function.prototype，Function来自于Object.prototype，Object来自于null**。【到头了】
* 3. 所有函数对象的 _proto_ 都指向Function.prototype,但它是个空函数。
* 4. 原型和原型链是JS实现继承的一个模型，**真正实现原型链的是 _proto_ ,而不是prototype**。
* 5. **实例和原型对象之间存在个链接，而不是实例和构造函数之间**。

示例：
```js
function Person(){}
var person1 = new Person();
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null
Person.__proto__ == Function.prototype; //true
console.log(Function.prototype)// function(){} (空函数)
 
var num1 = new Array();
console.log(num1.__proto__ == Array.prototype) // true
console.log( Array.prototype.__proto__ == Object.prototype) // true
console.log(Object.prototype.__proto__) //null
console.log(Array.prototype) // [] (空数组)
console.log(Array.__proto__ == Function.prototype)// true
```

参链：
* 1. [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（一）](https://www.jianshu.com/p/dee9f8b14771) (来龙去脉）
* 2. [js继承之原型继承](https://www.cnblogs.com/sarahwang/p/6870072.html) （具体是如何实现继承的）