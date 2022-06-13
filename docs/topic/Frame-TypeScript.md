# TypeScript

1. [TS 官链](https://www.tslang.cn/samples/index.html)
2. [非常棒的入门](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
3. [菜鸟教程](https://www.runoob.com/typescript/ts-tutorial.html)
4. [中文翻译版](http://ts.xcatliu.com/) 入门很友好

## [技术胖：TypeScript 从入门到精通图文视频教程](https://jspang.com/article/63)

- 20220331 铭科苑 F6
- 20220407 新华科技大厦 1621 完成第一遍学习
- 20220526 复习总结
  1. interface 接口，类对象形式
  2. 解构赋值时的 ts，const {a,b} : {a: string,b: number} = obj;

## 01 介绍&02 静态类型&03 基础静态类型和对象类型

1. `tsc xxx.ts`用来把 ts 文件转换成 js 文件
2. ts-node npm 包可以直接查看 ts 文件执行结果
3. 使用了静态类型，不光变量类型确定了，变量的属性和方法也确定了。
4. 基础静态类型：`const name: string = '张三'`，null、undefined、symbol、boolean、void 等等基本数据类型
5. 对象类型：

```ts
// 对象形式
const xiaoJieJie: {
  name: string;
  age: number;
} = {
  name: "李四",
  age: 20,
};

// 数组形式
const xiaoJieJie: String[] = ["张三", "李四", "王五"];

// 类形式
class Person {}
const xiaoJieJie: Person = new Person();

// 函数形式
const xiaoJieJie: () => String = () => {
  return "张三";
};
```

## 04&05&06

1. 类型注解 type annotation
2. 类型推断 type inferrence
3. 工作潜规则：如果 TS 能自动分析出类型，就不需要注解了，否则就需要注解。
4.

```js
// 简单类型定义
function getTotal(one: number, two: number): number {
  return one + two;
}

const total = getTotal(1, 2);

// 函数无返回值定义方法void
function sayHello(): void {
  console.log("hello world");
}

// 函数永远执行不完，就定义返回值never
function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}

// 函数参数为解构时的写法，[高频使用]
function add({ one, two }: { one: number, two: number }): number {
  return one + two;
}

const three = add({ one: 1, two: 2 });
```

5. 一般数组类型的定义

```js
// 初级写法
const numberArr: number[] = [1, 2, 3];

// 2种或者的写法
const arr: (number | string)[] = [1, "string", 2];
```

```js
// 数组中对象类型的定义
const xiaoJieJies: { name: string, age: Number }[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

// 为了简化，提出一种写法 类型别名type alias
type Lady = { name: string, age: Number };

const xiaoJieJies: Lady[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

// 或者类这种写法的简化
class Madam {
  name: string;
  age: number;
}

const xiaoJieJies: Madam[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
```

## 07 元组&08 接口&09

1. 元组和数组类似，但是比数组更精准。

```js
const arr: [string, string, number] = ["张三", "程序员", 18];
```

2. interface 接口

```js
interface Girl {
  name: string;
  age: number;
  sex: string;
}
```

接口和类型别名的区别：接口必须是一个类对象形式，而类型别名可以不必须是对象。  
3. 接口非必选值的定义

```js
interface Girl {
  // 每行结束，；或者空着都是可以的
  name: string;
  age: number;
  sex: string;
  bust?: number;
}
```

4. 允许加入任意值

```js
interface Girl {
  name: string;
  age: number;
  sex: string;
  [propname: string]: any; // 含义是属性名是字符串，而值可以是任意的值。
}
```

5. 接口里的方法

```js
interface Girl {
  name: string;
  age: number;
  sex: string;
  say(): string; // 代表say函数返回值是字符串
}
```

6. 接口和类的结合

```js
class xiaoJieJie implements Girl {
  name: "张按";
  age: 22;
  sex: "女";
  say() {
    return "欢迎光临~";
  }
}
```

7. 接口间的继承

```js
// Teacher继承了Gril的所有参数类型，还有自己的teach函数属性
interface Teacher extends Gril {
  teach(): string;
}
```

8. 接口只是开发阶段对参数的一种校验，不会用于生产环境。

## 10 类&11 类的访问类型&12

1. 类的重写，子类里面可以重写父类中的属性或方法，会覆盖的。
2. super 关键字，可以取到父类中的方法，（只有父类的方法，没有属性，谨记）

```js
class Hi extends Hello {
  content = "Hi 美女";
  sayHi() {
    return super.sayHi() + "么么哒~";
  }
}
```

3. 类的访问类型：private、protected、public

```js
public：无论类的内部或外部都可以调用
private：只能在类的内部调用
protected：只能在类的内部和继承的子类中使用
```

4. 类的构造函数：就是类在初始化的时候自动执行的一个方法。

```js
class Person{
    constructor(public name:string){}
}

class Teacher extends Person{
    constructor(public age:number){
        super('jspang')
    }
}

const teacher = new Teacher(18)
console.log(teacher.age)
console.log(teacher.name)
```

## 13&14&15

20220404 铭科苑 F6 晚上海淀剧院看完 开心麻花《变身怪杰》 回来继续学习

1. 类的 Getter 属性：可以让类外部得到私有属性的属性
2. 类的 Setter 属性：可以让类外部修改私有属性的属性

```js
class Hello {
    private content = 'Hi 帅哥';
    sayHi(){
        return this.content;
    }
    get contentNew(){
        return this.content;
    }
    set contentNew(arg: string){
        this.content = arg;
    }
}
let Hi = new Hello();
Hi.contentNew = 'Hi 美女~';// 是属性不是方法
console.log(
    Hi.contentNew
);
```

3. 类的静态休止符 static：不用 new 关键字，就可以使用 static 关键字声明的属性或方法。
4. 类的只读属性 readonly：定义之后就不能再修改了。
5. 抽象类的关键字是 abstract

```js
abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号，继承Girl类的子类就都要实现skill方法
}
```

6. 配置文件 tsconfig.json：是`tsc --init`命令生成的
7. tscconfig.json 里面的配置生效，命令行必须是`tsc`执行，文件里面的所有配置都必须是双引号。
8. include：只包含哪些文件、exclude 不包含哪些文件、file 和 include 类似；这三个和`compilerOptions`是平级关系

## 16&17&18 联合类型联合保护

20220405 北京铭科苑 F6 清明假期最后一天的晚上

1. compilerOptions 属性：[管理：TS 编译选项配置](https://www.tslang.cn/docs/handbook/compiler-options.html)

```js
// 常见的配置项
// removeComments：代表是否删除ts代码里面的注释
// strict：代表是否按照ts最严格的语法来校验
// 只有strict为false的情况下才会生效
// noImplicitAny：允许注解类型any不用特意表明
// strictNullChecks：不强制校验NULL类型
// rootDir：代表ts文件们的入口位置
// outDir：代表ts文件们编译后的存放位置
// allowJs：代表允许编译js文件（也就是不光编译ts文件，还可以编译js文件）
// sourceMap：代表生成信息文件，在代码出错的情况下，可以显示原始代码
// noUnuseLocals：代表不能有未使用的变量
// noUnuseParameters：代表不能有未使用的函数
```

2. ts-node 命令遵循 tsconfig.json 文件配置
3. 联合类型：就是一个变量或参数不确定是什么类型的

```js
function add(first: number | string, second: number | string) {
  return xxxxxx;
}
```

4. 类型保护：针对联合类型才会有类型保护

```js
// 1. 类型断言
function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  }else{
    (animal as Waiter).say();
  }
}
// 2. in语法
function judgeWhoTwo(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}
// 3. typeof语法
// 4. instanceof语法
```

## 19&20 泛型&21

- 师傅领进门，修行在个人。20220406 新华科技大厦 1621

1. 枚举类型：enum

```js
// 枚举类型 enum，没有=号
enum Status {
    LIAOTIAN,
    ANJIAO,
    SPA,
}

function daBaoJian(status: any){
    if(status === status.LIAOTIAN){
        console.log('选了聊天')
    }else if(status === status.ANJIAO){
        console.log('选了按脚');
    }else {
        console.log('选了SPA');
    }
}
daBaoJian(Status.SPA);
console.log(Status.LIAOTIAN);// 0
```

2. 泛型：generic，泛指的类型

```js
class SelectGirl<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"]);
console.log(selectGirl.getGirl(1));
```

## 22 命名空间 namespace&23&24&25Parcel 打包

1. 声明用 namespace，用 export 暴露出来的类才是全局的。优势：减少了全局变量污染，实现了基本封装。
2. 调用：`new Home.page();`
3. 如果用 import 引入模块或组件，需要用 require.js 进行处理。
4. 利用 Parcel 来进行打包处理

## xcatliu 教程：

- [中文翻译版](http://ts.xcatliu.com/introduction/index.html) 入门很友好，阅读起来真的很友好 20220601 铭科苑 F6

1. 知识的获取，每次只能在原来的基础上获得一定数量的新知识和新理解，所以要做好已有知识的整理，也要做好新知识精准的部分学习，而不是妄图一次全部学会。
2. 一门学科知识，高频在使用的知识可能只占全部的 40%左右，所以花一部分时间学习最实用的知识是性价比最高的

## 简介

1. Ts 是一门加了类型系统的 JavaScript，适用于任何规模的项目。
2. Ts 是**静态类型、弱类型语言**。按类型检查的时机分为静态类型（在编译阶段就可以检查）和动态类型（在运行时才可以检查）

## 基础

### 原始数据类型

1. 在 JavaScript 中 boolean 是基础类型，Boolean 是构造函数。
2. 用 void 表示没有任何返回值的函数

```js
function alertName(): void {
  console.log("my name is Tom");
}
```

3. null 和 undefined 是所有类型的子类型，例如：`let num: number = undefined;`是不会报错的

### 类型推论

1. 就是没有明显注明类型，但是 ts 会根据使用情况进行类型推断，如果上下不符，会进行报错。

### 联合类型

1. 就是**或者**的意思
2. Union Types 表示取值可以为多种类型中的一种，用`|`进行分割每种类型。

```js
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
```

2. 当访问属性或方法遇到联合属性，则会取这些类型的公有属性或方法。

```js
function getLength(something: string | number): number {
  return something.length;
  // 会报错，因为number是没有length属性的
}
function getString(something: string | number): string {
  return something.toString();
  // 不会报错，因为string和number都有toString()方法
}
```

### 对象的类型--接口

1. interface，可以用于对类的一些行为进行抽象外，还可以对对象的形状 Shape 进行描述。
2. 可选属性

```js
interface Person {
  name: string;
  age?: number; // age就是可选属性，可以有也可以没有
}
```

3. 任意属性

```js
interface Person {
  name: string;
  age?: number;
  [propName: string]: any; // 这里就是任意属性，
  // 一旦确定的任意属性，那么确定属性和可选属性的类型一定要是任意类型的子类型，比如any类型是包括string和number类型的
  // 或者利用联合类型的写法：[propName: string]: string | number;也是可以的
}
```

4. 只读属性

```js
interface Person{
  readonly id: number;// id就是只读属性，只允许给创建对象的时候可以赋值，而不是创建的时候不赋值，后面第二次给只读属性单独赋值这样也是会报错的
  name: string;
}
```

### 数组的类型

1. （类型+方括号）表示法，`let fibonacci : number[] = [1,2,3,4,5]`
2. 数组泛型`Array<elemType>`：`let fibonacci: Array<number> = [1,2,3,4,5]`
3. 用接口表示数组，一般不推荐，因为比较麻烦

```js
interface ArrayNumber {
  [index: number]: number;
}
let fibonacci: ArrayNumber = [1, 2, 3];
```

4. 类数组，类数组不是数组，比如 arguments，实际上 TypeScript 已经内置了类数组的类型，比如 Iarguments，拓展阅读是[内置对象](http://ts.xcatliu.com/basics/built-in-objects.html)

5. any 在数组中的应用，any 表示在数组中可出现任意类型，`let arr : any[] = [1,'2',{b: 3}]`

### 函数的类型

1. 函数声明，入参和返回值的类型都要注意到

```js
function sum(one: number, two: number): number {
  return one + two;
}
```

2. 函数表达式，

```js
// 这样可以通过编译，但是等号左边的mySun是通过右边的类型推断出来的
let mySum = function (one: number, two: number): number {
  return one + two;
};
// 完整写法如下：
let mySum: (one: number, two: number) => number = function (
  one: number,
  two: number
): number {
  return one + two;
};
```

在 TypeScript 类型定义中`=>`用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型；  
在 ES6 中的`=>`代表的是箭头函数  
3. 用接口定义函数的形状

```js
interface search {
  (one: string, two: string): boolean;
}
let mySearch: search;
mySearch = function (one: string, two: string) {
  return one.search(two) !== -1;
};
```

4. 可选参数，依然用`?`表示，但是可选参数后面不能再出现必需参数了

```js
function sum(one: number, two: number, three?: number): number {
  if (three) {
    return one + two + three;
  } else {
    return one + two;
  }
}
```

5. 参数默认值，设置了参数默认值的入参就自动变为可选参数，而且不受`可选参数后面不能再出现必需参数`的限制

```js
function sum(one: number = 10, two: number, three: number): number {
  if (one) {
    return one + two + three;
  } else {
    return two + three;
  }
}
```

6. 剩余参数，可以用`...rest`的方式获取，它是一个数组类型，可以用数组的方式定义类型，而且只能是最后一个参数使用

```js
function push(arr: any[], ...rest: any[]) {
  // xxx
}
```

7. 重载，需求是入参类型不确定的，期望是针对不确定入参给出确定性的入参和返回值类型

```js
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

### 类型断言

1. 用来手动指定一个值的类型。`值 as 类型`（推荐的写法）或者`<类型>值`（还有可能表示泛型）
2. 用途：

```js
1. 将联合类型断言为其中一个类型，谨慎使用，防止运行时错误
function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
      return true;
  }
  return false;
}
2. 将一个父类断言为一个更为具体的子类
3. 将任何一个类型断言为any，比如：`window as any`，是解决TypeScript问题的最后一个手段，
除非非常肯定，否则不要滥用。
4. 将any断言为一个具体的类型，解决历史遗留代码中any的一种方式，提高可维护性。
```

### 声明文件

1. 声明语句：`declare var`声明全局变量
2. 声明文件：把声明语句集中放在一个文件里，以 xxx.d.ts 结尾，一般来说，ts 会解析项目所有的 ts 文件，xxx.d.ts 文件的。
3. 建议统一用@types 管理第三方库，查询库对应的声明文件：[链接](https://microsoft.github.io/TypeSearch/)
4. npm 包：

```js
  1. npm包里面就有自己的types类型文件，这是npm作者自己一道开发的类型文件，最为推荐的方式
  2. @types里面的类型文件，说明npm作者自己没做类型文件，是其他人进行的补充开发
  3. 以上都没有的话，需要在自己项目的types目录下自定义开发类型组件，xxx.d.ts文件
```

[语法链接：](http://ts.xcatliu.com/basics/declaration-files.html#export)

```js
// 语法
  1. export 导出变量
  2. export namespace 包含子属性的对象
  3. export default es6默认导出
  4. export = commonjs 导出模块
```

5. UMD 库：

### 内置对象

1. ECMAscript 提供的内置对象：Boolean、Error、Date、RegExp 等。[官链](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
2. DOM 和 BOM 提供的内置对象：Document、HTMLElement、Event、NodeList 等。[ts 源码定义](https://github.com/Microsoft/TypeScript/tree/main/src/lib)

## 进阶

### 类型别名

1. 类型别名就是给类型起个新名字，多用于联合类型，用 type 进行定义。

```js
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
```

### 字符串字面量类型

1. 就是只能在几个值中进行选择，用 type 进行定义。

```js
type eventType = "click" | "scroll" | "mousemove"; // 就只能在这三个值里面进行选择使用
```

### 元组

1. 数组合并了相同类型的对象，元组是合并了不同类型的对象。

```js
let tom: [string, number] = ["tom", 25];
```

2. 当添加越界的元素时，该元素的类型被限制在每个类型的联合类型。
