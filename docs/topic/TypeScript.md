# TypeScript

## 01介绍&02静态类型&03基础静态类型和对象类型
20220331 铭科苑F6
* [技术胖：TypeScript 从入门到精通图文视频教程-免费教程](https://jspang.com/article/63)
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

// 函数参数为结构时的写法
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
1. 元组和数组类似，但是比数据更精准。
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