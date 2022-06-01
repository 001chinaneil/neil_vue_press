# TypeScript
1. [TS官链](https://www.tslang.cn/samples/index.html)
2. [非常棒的入门](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
3. [菜鸟教程](https://www.runoob.com/typescript/ts-tutorial.html)
4. [中文翻译版](http://ts.xcatliu.com/) 入门很友好

## [技术胖：TypeScript 从入门到精通图文视频教程](https://jspang.com/article/63)
* 20220331 铭科苑F6  
* 20220407 新华科技大厦 1621 完成第一遍学习  
* 20220526 复习总结
  1. interface接口，类对象形式
  2. 解构赋值时的ts，const {a,b} : {a: string,b: number} = obj;
## 01介绍&02静态类型&03基础静态类型和对象类型
1. `tsc xxx.ts`用来把ts文件转换成js文件
2. ts-node npm包可以直接查看ts文件执行结果
3. 使用了静态类型，不光变量类型确定了，变量的属性和方法也确定了。
4. 基础静态类型：`const name: string = '张三'`，null、undefined、symbol、boolean、void等等基本数据类型
4. 对象类型：
```ts
// 对象形式
const xiaoJieJie: {
    name: string,
    age: number
} = {
    name: '李四',
    age: 20
}

// 数组形式
const xiaoJieJie: String[] = ['张三','李四','王五'];

// 类形式
class Person {}
const xiaoJieJie: Person = new Person();

// 函数形式
const xiaoJieJie: ()=> String = ()=>{
    return '张三';
}
```

## 04&05&06
1. 类型注解type annotation
2. 类型推断type inferrence
3. 工作潜规则：如果TS能自动分析出类型，就不需要注解了，否则就需要注解。
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

## 07元组&08接口&09
1. 元组和数组类似，但是比数组更精准。
```js
const arr: [string,string,number] = ['张三','程序员',18];
```
2. interface接口
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
    [propname: string]: any;// 含义是属性名是字符串，而值可以是任意的值。
}
```
5. 接口里的方法
```js
interface Girl {
    name: string;
    age: number;
    sex: string;
    say(): string;// 代表say函数返回值是字符串
}
```
6. 接口和类的结合
```js
class xiaoJieJie implements Girl{
    name: '张按';
    age: 22;
    sex: '女';
    say(){
        return '欢迎光临~';
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

## 10类&11类的访问类型&12
1. 类的重写，子类里面可以重写父类中的属性或方法，会覆盖的。
2. super关键字，可以取到父类中的方法，（只有父类的方法，没有属性，谨记）
```js
class Hi extends Hello{
    content = 'Hi 美女';
    sayHi() {
        return super.sayHi() + '么么哒~';
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
20220404 铭科苑F6 晚上海淀剧院看完 开心麻花《变身怪杰》 回来继续学习
1. 类的Getter属性：可以让类外部得到私有属性的属性
2. 类的Setter属性：可以让类外部修改私有属性的属性
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
3. 类的静态休止符static：不用new关键字，就可以使用static关键字声明的属性或方法。
4. 类的只读属性 readonly：定义之后就不能再修改了。
5. 抽象类的关键字是abstract
```js
abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号，继承Girl类的子类就都要实现skill方法
}
```
6. 配置文件tsconfig.json：是`tsc --init`命令生成的
7. tscconfig.json里面的配置生效，命令行必须是`tsc`执行，文件里面的所有配置都必须是双引号。
8. include：只包含哪些文件、exclude不包含哪些文件、file和include类似；这三个和`compilerOptions`是平级关系

## 16&17&18联合类型联合保护
20220405 北京铭科苑F6 清明假期最后一天的晚上
1. compilerOptions属性：[管理：TS编译选项配置](https://www.tslang.cn/docs/handbook/compiler-options.html)
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
2. ts-node命令遵循tsconfig.json文件配置
3. 联合类型：就是一个变量或参数不确定是什么类型的
```js
function add(first: number | string, second: number | string){
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

## 19&20泛型&21
* 师傅领进门，修行在个人。20220406 新华科技大厦 1621
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

## 22命名空间namespace&23&24&25Parcel打包
1. 声明用namespace，用export暴露出来的类才是全局的。优势：减少了全局变量污染，实现了基本封装。
2. 调用：`new Home.page();`
3. 如果用import引入模块或组件，需要用require.js进行处理。
4. 利用Parcel来进行打包处理

## xcatliu教程：
* [中文翻译版](http://ts.xcatliu.com/introduction/index.html) 入门很友好，阅读起来真的很友好20220601铭科苑F6
1. 知识的获取，每次只能在原来的基础上获得一定数量的新知识和新理解，所以要做好已有知识的整理，也要做好新知识精准的部分学习，而不是妄图一次全部学会。
2. 一门学科知识，高频在使用的知识可能只占全部的40%左右，所以花一部分时间学习最实用的知识是性价比最高的
## 简介
1. Ts是一门加了类型系统的JavaScript，适用于任何规模的项目。
2. Ts是**静态类型、弱类型语言**。按类型检查的时机分为静态类型（在编译阶段就可以检查）和动态类型（在运行时才可以检查）

## 基础
### 原始数据类型
1. 在JavaScript中boolean是基础类型，Boolean是构造函数。
2. 用void表示没有任何返回值的函数
```js
function alertName(): void{
  console.log('my name is Tom');
}
```
3. null和undefined是所有类型的子类型，例如：`let num: number = undefined;`是不会报错的
### 类型推论
1. 就是没有明显注明类型，但是ts会根据使用情况进行类型推断，如果上下不符，会进行报错。
### 联合类型
1. 就是或者的意思
2. Union Types表示取值可以为多种类型中的一种，用`|`进行分割每种类型。
```js
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
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
1. interface，可以用于对类的一些行为进行抽象外，还可以对对象的形状Shape进行描述。
2. 可选属性
```js
interface Person{
  name: string;
  age?: number;// age就是可选属性，可以有也可以没有
}
```
3. 任意属性
```js
interface Person{
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
interface ArrayNumber{
  [index: number]: number
}
let fibonacci: ArrayNumber = [1,2,3];
```
### 类数组
1. 类数组不是数组，比如arguments，实际上TypeScript已经内置了类数组的类型，比如Iarguments，拓展阅读是[内置对象](http://ts.xcatliu.com/basics/built-in-objects.html)

### any在数组中的应用
1. any表示在数组中可出现任意类型，`let arr : any[] = [1,'2',{b: 3}]`
