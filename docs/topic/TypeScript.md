# TypeScript

## 介绍
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