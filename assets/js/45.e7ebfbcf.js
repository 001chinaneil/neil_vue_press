(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{331:function(t,s,a){"use strict";a.r(s);var n=a(14),o=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),s("ul",[s("li",[t._v("口诀："),s("strong",[t._v("任何一个对象都有一个___proto___属性，指向构造函数的原型prototype，而prototype也是一个对象，也有一个__proto__属性，这样一环接一环，就形成了一个链，直至到最后Object.prototype截止")]),t._v("。（20210616晚：总结性描述）")])]),t._v(" "),s("p",[s("strong",[t._v("六大金句概括：")])]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("构造函数属性（constructor）指向构造函数")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("每个对象都有__proto__属性，但是只有函数对象才有prototype属性；"),s("strong",[t._v("对象分为普通对象和函数对象")]),t._v("；")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("原型对象（Person.prototype）是构造函数的一个实例。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("所有的构造器的原型（"),s("strong",[t._v("proto")]),t._v("）都是Function.prototype")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("Function.prototype."),s("strong",[t._v("proto")]),t._v(" == Object.prototype;")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"6"}},[s("li",[t._v("Object.prototype."),s("strong",[t._v("proto")]),t._v(" == null;")])])])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("继承，就是拿到了别的对象的属性和方法。eg: "),s("code",[t._v("Dog.prototype = new Animal();")]),t._v(" 【把一个构造函数的原型对象指向了新的一个构造函数的实例】，Dog继承了Animal上所有的属性和方法。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("就是实例能够访问到原型对象下的属性和方法，当原型对象指向发生改变，这个实例就也能访问到被指向对象(实例/函数)的所有属性和方法。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("JS，一切皆对象。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("JS，是一门基于JS引擎的语言。")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nperson1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nperson1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"第一篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一篇"}},[t._v("#")]),t._v(" 第一篇")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("[规定]实例的 "),s("strong",[t._v("构造函数属性(constructor)")]),t._v(" 指向构造函数。eg: Person1.constructor == Person")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("凡是通过new Function()创建的对象都是函数对象，其余对象都是普通对象。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("每当定义一个对象的时候，"),s("strong",[t._v("对象中总会包含一些预定义的属性")]),t._v("，其中每个函数对象都包含一个prototype属性，"),s("strong",[t._v("这个属性指向函数的原型对象")]),t._v("。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("总结："),s("strong",[t._v("每个对象都有 "),s("em",[t._v("proto")]),t._v(" 属性，但是只有函数对象才有prototype属性")]),t._v("。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("原型对象，顾名思义，就是个普通对象。"),s("strong",[t._v("Person.prototype 就是原型对象")]),t._v("。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"6"}},[s("li",[t._v("Person.prototype.constructor == Person; //在默认情况下，原型对象的constructor属性是个指针，指向prototype属性所在的Person函数。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"7"}},[s("li",[t._v("结论: "),s("strong",[t._v("原型对象(Person.prototype)是构造函数(Person)的一个实例")]),t._v("。[20210705]")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"8"}},[s("li",[t._v("原型对象主要用来做继承。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"9"}},[s("li",[t._v("[特殊]Function.prototype，它是函数对象，但它没有prototype属性。")])])])]),t._v(" "),s("h2",{attrs:{id:"第二篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二篇"}},[t._v("#")]),t._v(" 第二篇")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("[规定]JS在创建对象时，都会有一个 "),s("em",[t._v("proto")]),t._v(" 的内置属性，"),s("strong",[t._v("用于指向创建它的构造函数的原型对象")]),t._v("。eg: "),s("code",[t._v("person1._proto_ == Person.prototype;")])])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("[起始]创建对象的构造器(应该是9个)，有"),s("code",[t._v("Object,Array,Date,Function,String,Number,Boolean,RegExp,Error")]),t._v("。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("Object.prototype."),s("strong",[t._v("proto")]),t._v(" == null ; //null处于原型链的顶端")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[s("strong",[t._v("一个普通对象的构造函数是Object")]),t._v("。")])])])]),t._v(" "),s("h2",{attrs:{id:"第三篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三篇"}},[t._v("#")]),t._v(" 第三篇")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("所有的构造器都来自于Function.prototype，包括根构造器Object和自身Function。所有构造器都继承了Function.prototype的属性和方法，比如bind,apply,call,length。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("Function.prototype."),s("strong",[t._v("proto")]),t._v(" === Object.prototype; 也继承了Object.prototype上的所有方法，比如"),s("code",[t._v("toString()")]),t._v("，"),s("code",[t._v("valueOf()")]),t._v(","),s("code",[t._v("hasOwnProperty")]),t._v("。"),s("br"),t._v(" "),s("strong",[t._v("构造器来自于Function.prototype，Function来自于Object.prototype，Object来自于null")]),t._v("。【到头了】")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("所有函数对象的 "),s("em",[t._v("proto")]),t._v(" 都指向Function.prototype,但它是个空函数。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("原型和原型链是JS实现继承的一个模型，"),s("strong",[t._v("真正实现原型链的是 "),s("em",[t._v("proto")]),t._v(" ,而不是prototype")]),t._v("。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[s("strong",[t._v("实例和原型对象之间存在个链接，而不是实例和构造函数之间")]),t._v("。")])])])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//null")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function(){} (空函数)")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//null")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [] (空数组)")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("参链：")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/dee9f8b14771",target:"_blank",rel:"noopener noreferrer"}},[t._v("最详尽的 JS 原型与原型链终极详解，没有「可能是」。（一）"),s("OutboundLink")],1),t._v(" (来龙去脉）")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/sarahwang/p/6870072.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("js继承之原型继承"),s("OutboundLink")],1),t._v(" （具体是如何实现继承的）")])])])])])}),[],!1,null,null,null);s.default=o.exports}}]);