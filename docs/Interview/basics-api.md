# 常用API

## 字符串
* 常用字符串 slice()，split()
* 1. slice(start,end)： 支持1-2个参数，第一个参数是开始位置，第二个参数是结束位置，**左闭右开**。
* 2. split(xx)：把字符串以xx分割形成数组，与数组操作函数join(xx)互逆的效果。

* 3. charAt(i)输出指定下标的字母，长度为1，适用于把字符串切割成单个字符串。
* 4. slice()和substring()都支持1-2个参数，第一个参数是开始位置，第二个参数是结束位置，**左闭右开**。  
    区别:  
        slice() 如果第二个参数是负数，则实际的数是负数+字符串长度得到的结果，如果得到的结果小于第一个参数，则返回空字符串。  
        substring() 不接受负值参数，且substring()总是从2个参数中小的参数开始，但是还是 左闭右开。  
        ```js
        <!-- 例如： -->
        temp.substring(7,3); 从3的位置开始截取到7的位置，结果是索引3的字母有，7的位置没有。
        ```
* 5. toUpperCase()// 转换大写；toLowerCase()// 转换小写
```js
let a = 'abc123';
let b = a.toUpperCase();
console.log(a,b);
// 输出结果：abc123 ABC123
```
API函数有2种使用方式：1. 点，比如a.toUpperCase() 2. 传，通过参数传递进去，比如Math.floor(1.23);
API函数看结果的方式：1. 返回新的返回值 2.自身被改变
* 6. replace()：替换字符，// 第一个参数支持正则，默认对大小写敏感，默认替换匹配的第一个，不改变原字符串，返回新字符串。
* 7. trim()：去除字符串两端的空白

截取函数辨析：
|  | 相同点 | 不同点 | 示例 |
| --- | --- | --- | --- |
| slice |  | 支持参数是负数 | str.slice(start,end) |
| substring | 截取字符串 | 参数不支持负值，若前大后小，会调换位置 | str.substring(start,end) |
| substr |  |  | str.substr(start,length) |

检索函数辨析：
|  | 相同点 | 不同点 | 示例 |
| --- | --- | --- | --- |
| indexOf |  | 返回的是第一个存在元素的索引，支持第二个参数从指定位置开始检索 | str.indexOf(xx) |
| search | 都可以检索某个字符是否存在 | 返回的是第一个存在元素的索引，不支持第二个参数，但支持正则检索 | str.search(xx) |
| match |  | 返回匹配的第一个值，是数组格式，支持正则 | str.match(xx) |

JS字符技巧（20210626午）
* 1. URL取参或判断是否有参 
```js
let params = new URLSearchParams(location.search.replace(/^\?/g,''));
params.get('b');// 返回参数值
params.has('a');// 返回布尔值
```
正则末尾g代表全局、i(case-insensitive)代表不区分大小写、m(multiline)代表多行匹配。

[官链](https://www.w3school.com.cn/js/js_string_methods.asp) 20210617晚

总结：
* 1. 技术笔记一定要记清晰准确，不然还不如不记；提炼出自己的记忆点和技巧点。（20210617晚）


## 数组
* 7句口诀：
* shift、pop是删除，unshift、push是增加；(会改变原数组)
* 要想翻转用reverse;(会改变原数组)
* 聚会join组字符(串);
* 截取孪生slice、splice;
* 最终合并是concat();（合并后返回新数组，原数组不变）
* 随意点名用indexOf，返回-1是没找到。
* 切记：核心函数会改数组，字符检索保(持)原样(不改变原数组)

<table>
    <tr>
        <th></th>
        <th>相同点</th>
        <th>不同点</th>
        <th>示例</th>
    </tr>
    <tr>
        <td> slice </td>
        <td rowspan='2'> 都可以截取数组，都是从左到右顺序截取 </td>
        <td>
            1.不会改变原数组 <br> 
            2.可以操作字符串 <br> 
            3.arg1<0 && arg2 < 0 && arg1 < arg2，末尾为-1 <br> 
            4.左闭右开 <br> 
            5. <strong>第二个参数是下标</strong>
        </td>
        <td> 
            <strong> arr.slice(arg1,arg2); </strong> <br> 
            <strong> string.slice(arg1,arg2); </strong> <br> 
            左闭右开(都是这样的区间，还没看到例外)
        </td>
    </tr>
    <tr>
        <td> splice </td>
        <td> 
            1.会改变原数组 <br> 
            2.删除时，将返回被删除的片段 <br> 
            3.arg1 < 0时，末尾为-1 <br> 
            4.arg1>length时，删除会无效，但是可以添加 <br> 
            5.<strong> 第二个参数是个数 </strong>(美团面试题) <br> 
            <strong> (splice是骗子(p)，都说好了不改变的，你居然偷偷改变了!!)  </strong>
        </td>
        <td> 
            arr.splice(arg1,arg2,arg3,...); <br> 
            arg1是下标，包含此下标元素；<br> 
            arg2是删除个数; <br> 
            arg3是要添加的元素
        </td>
    </tr>
</table>

<table>
    <tr>
        <th></th>
        <th>头部</th>
        <th>尾部</th>
        <th>变化</th>
    </tr>
    <tr> 
        <td>增加</td>
        <td>unshift()</td>
        <td>push()</td>
        <td><strong>原数组被改变</strong></td>
    </tr>
    <tr> 
        <td>删除</td>
        <td>shift()</td>
        <td>pop()</td>
        <td><strong>原数组被改变</strong></td>
    </tr>
    <tr> 
        <td>翻转</td>
        <td>reverse()</td>
        <td></td>
        <td><strong>原数组被改变</strong></td>
    </tr>
    <tr> 
        <td>转字符串</td>
        <td>join(xx)</td>
        <td>用xx间隔数组元素组成字符串</td>
        <td>原数组没有变化</td>
    </tr>
    <tr> 
        <td rowspan='2'>截取</td>
        <td>slice(index,endIndex)</td>
        <td></td>
        <td>原数组没有变化</td>
    </tr>
    <tr> 
        <!-- <td></td> -->
        <td>splice(index,num,addItem)</td>
        <td>可以实现shift、pop、unshift、push相同的效果</td>
        <td><strong>原数组被改变</strong></td>
    </tr>
    <tr> 
        <td>合并</td>
        <td>arr1.concat(arr2)</td>
        <td></td>
        <td><strong>原数组没有变化，返回一个新数组</strong></td>
    </tr>
    <tr> 
        <td>查元素索引</td>
        <td>indexOf(xx)</td>
        <td>查xx元素的索引，-1代表没找到</td>
        <td></td>
    </tr>
</table>

### 构造器
* 1. Array(length);// 生成指定长度的数组，empty*length
* 2. new Array(n1,n2,...);// 参数个数等于0，或大于1，则生成由所有入参组成的新数组；参数个数为1，值为非数字类型，则生成该参数的新数组；**参数个数为1且是数字，生成长度为n的数组，值为empty；**
* 3. Array.of(8);// 会生成元素为8的新数组，而不是长度为8的空数组；
* 4. Array.from();// 把类似数组的可迭代对象转换为数组，eg：`String、Map、Set、Object`

### Array的判断 
* 口诀：6种，一种ES6，2种构造函数，3种prototype

| 原理 | 实例 | 备注 |
| --- | --- | --- |
| **Array.isArray()** | Array.isArray(a); | ES6才支持 |
| 基于构造函数原理：instanceof | a instanceof Array | 用于判断对象则不严谨，因为数组实例和对象实施都返回true |
| 基于constructor | a.constructor === Array |  |
| Array.prototype.isPrototypeOf | Array.prototype.isPrototypeOf(a) |  |
| Object.getPrototypeOf | Object.getPrototypeOf(a) === Array.prototype |  |
| **Object.prototype.toString** | Object.prototype.toString.call(a) === '[object Array]' | 最常见 |

### 寻找最大值
* `Math.max.apply(null,arr);` 或者 `Math.max(...arr)`

### 实用技巧
（ 20210626午 )
* 1. 克隆数组：[...arr]
* 2. 合并数组：[...arr1,...arr2]
* 3. 去重数组：[...new Set([xx,xx,xx])]

### 参链
* 1. [JS数组操作(数组增加、删除、翻转、转字符串、取索引、截取(切片)slice、剪接splice、数组合并)](https://www.jb51.net/article/84667.htm)
* 2. [梳理所有的JS数组函数](https://www.jianshu.com/p/358c0b7588c9) ( 太棒了，数组函数，一网打击~20210624 )

## 对象
* 1. **Object.assign();** // 属性合并
* 2. **Object.keys();** // 返回以对象key为元素的数组
* 3. **Object.freeze();** // 冻结，防止对象被修改--不能修改，不可删除，不可写入，可读(枚举)
* 4. Object.seal();// 封闭，--不可修改，不可删除，可写入，可读(枚举)
* 5. Object.getPrototypeOf(obj) // 获取原型
* 6. Object.setPrototypeOf(obj,{a: x,b: x})// 设置原型
* 7. Object.isExtensible(obj); // 获取对象的可扩展性
* 8. Object.getOwnProperty(obj); // 获取自有属性 
* 9. Object.preventExtensions(obj); // 禁止扩展对象--不可添加，可删除
* 10. **Object.defineProperty(obj);** // 拦截对象属性，
```js
Object.defineProperty(obj,'a',{
    // [set,get] 和 [value,writable]互斥，两组里任意一个属性和另一组内任意属性同时出现会报错。
    get(){},
    set(value),
});
```
* 11. **obj.hasOwnProperty('xx');** // 判断是否是自有属性
* 12. **'xx' in obj;** // 返回布尔值，用于判断属性(自有属性、原型属性都包含)是否在对象中

### 参链
* 1. [JS操作对象的14中方法](https://blog.csdn.net/qq_36936887/article/details/114373995)

## 循环迭代
* 总结：1 + 4 + 5（20211231午 百度鹏寰大厦F8-B）
* 1代表简单纯粹的for循环（数组、对象都能搞，性能还高）
* 4代表some、every、find、filter
* 5代表for...in、for...of、forEach、map、reduce
* 会返回新数组：map、filter、reduce，都不会改变原数组。(口诀：**map、filter、reduce返新不改旧** 20210627午)

<table>
    <tr>
        <th></th>
        <th>相同点</th>
        <th>异同点</th>
    </tr>
    <tr>
        <td>some</td>
        <td rowspan='4'>
            接收一个回调函数 <br>
            (item,index,arr)
        </td>
        <td>
            返回布尔值，只要有一个满足就行
        </td>
    </tr>
    <tr>
        <td>every</td>
        <!-- <td></td> -->
        <td>返回布尔值，必须全部满足才行</td>
    </tr>
    <tr>
        <td>find</td>
        <!-- <td></td> -->
        <td>返回满足条件的第一个元素</td>
    </tr>
    <tr>
        <td>filter</td>
        <!-- <td></td> -->
        <td>返回<strong>一个新数组</strong>，把满足条件的过滤出来</td>
    </tr>
</table>

|     | for...in | for...of    | forEach  | map    | reduce   |
| ----| :-------:| :---------: | :------: | :----: | :------: |
| 数组 | YES      | YES         | YES     | YES     | YES      |
| 对象 | **YES**  | NO          | NO      | NO      | NO       |


<table>
    <tr>
        <th></th>
        <th>相同点</th>
        <th>异同点</th>
        <th>用法</th>
    </tr>
    <tr>
        <td>for...in</td>
        <td rowspan='2'>
            1.匿名函数中的this都指向window <br>
            2.使用<strong>break中断循环，并退出所有</strong><br>
            3.使用<strong>continue跳过当次循环</strong>，并继续执行下次循环<br>
            4.单纯的中断流程都不能用return，因为return只能在函数中返回
        </td>
        <td>
            1.遍历对象可枚举的属性，类似Object.keys();不包括原型链上的属性 <br>
            2.遍历数组返回元素下标，返回的是string类型 
        </td>
        <td>
            for(let key in arr){...}
        </td>
    </tr>
    <tr>
        <td>for...of</td>
        <!-- <td></td> -->
        <td>只可循环iterable类型，Array、Set、Map</td>
        <td>for(let value of arr){...}</td>
    </tr>
</table>

<table>
    <tr>
        <th></th>
        <th>相同点</th>
        <th>异同点</th>
        <th>用法</th>
    </tr>
    <tr>
        <td>forEach</td>
        <td rowspan='2'>
            1.只能遍历数组 <br>
            2.匿名函数中的this都指向window <br>
            3.不能使用continue、break，<strong>使用return和return false也只能跳过当次循环</strong> <br>
            4.都不会改变原数组
        </td>
        <td>不会返回新数组</td>
        <td>arr.forEach(function(item,index,arr){...})</td>
    </tr>
    <tr>
        <td>map</td>
        <!-- <td></td> -->
        <td>会返回新数组</td>
        <td>arr.map(function(item,index,arr){...})</td>
    </tr>
</table>

### 参链
* [JS中数组迭代方法](https://juejin.cn/post/6844903590444662792#comment)

### 高阶用法
* 20210617晚
* [JS高阶函数——reduce()用法总结](https://zhuanlan.zhihu.com/p/65235741) [25个你不得不知道的数组reduce高级用法](https://zhuanlan.zhihu.com/p/106656582) [Get!]
* 比如：累加；累乘；找出最大值(最小值)；去重；字符统计/单词统计；数组纬度转换(多维转一维)；

* 1. 统计数组成员个数
```js
function shushu(arr = []){
    return arr.reduce((t,v)=>{
         t[v] = t[v] ? ++t[v] : 1;
         return t;
    },{});
}
```

* 2. 划分千分位[todo] (缺少reduce的方案)
```js
number.toLocalsString();// 就把整数转换为千分位了，缺点是小数位不行
```
```js
function test(num = 0){
    let a = String(parseInt(num)).split('');// 1. 转换成数组
    let result = '';
    while(a.length > 3){
        result = ',' + a.splice(-3,3).join('') + result;// 2. 利用splice会改变原数组的特性
    }
    result = a.join('') + result;// 3. 把剩余的部分连接
    return result;
}
```

* 3. 异步累计[todo]
```js
async function deps(arr){
   return   arr.reduce(async(t,v)=>{
                let dep = await t;
                let temp = await (v);
                dep[v] = temp;
                return dep;
            },Promise.resolve({}));
}

let result = await deps([1,2]);
console.log(result);
```

* 4. 斐波那契数列[Get!]：前两位之和等于下一位，初始化为[0,1]
```js
function febo(length){
    if(length == 0) return [];
    if(length == 1) return [0];
    if(length == 2) return [0,1];
    let arr = [ ...new Array(length).keys() ];
    
    return arr.reduce(
        (prev,curr,i) => (i > 1 && prev.push( prev[i-1] + prev[i-2] ),prev),
        [0,1]
    );
}

febo(0);
```

* 5. 数组转对象：巧妙利用...rest
```js
let list = [
    {
        name: 'zhangsan',age: 25, height: 180,
    },
    {
        name: 'lisi',age: 29, height: 170,
    }
];

function trans(arr = [],){
    return arr.reduce((t,v)=>{
        let { name,...rest } = v;
        t[name] = rest;
        return t;
    },{});
}

trans(list);
```

* 6. 九九乘法表
```js
// 利用reduce写九九乘法表
function jiujiu(){
    let col = [...new Array(9).keys()];// 竖向数量 9
    return  col.reduce((t,v)=>{
                        // v + 1是横向长度
                        let row = [...new Array(v+1).keys()];
                return  t  + row.reduce((u,w)=>{
                                return (`${u}${w+1}x${v+1}=${(v+1)*(w+1)} `);
                             },'\n');// 一行的计算
            },'');
}
console.log(jiujiu());
```

### 总结：
（ 20210625晚 ）
* while(){}// 条件成立，一直循环，挺好用；
* 普通for循环// 简单而强大~

（ 20210626午 ）
* 从何处学习高超的编码技巧？ => 从网络技巧总结性博文学习 =》从Vue源码中学习 =》从GitHub上学习！

## 数值

## 布尔

## 函数

## Dom

## 正则
### 和正则相关的API函数
总结：replace()、match()、search()的用法都是待匹配在前，匹配规则是入参；exec()、test()是匹配规则在前，待匹配是入参
1. replace()
```js
// 把text里面能匹配上正则的，替换为xxx
text.replace(regexp,'xxx')
```

2. match()
```js
// 取出匹配的字段，返回值是个数组，匹配不到就返回null
const regexp = /\d+/g;
const text = "javascript1 2a 3d";
const i = text.match(regexp)
console.log(i) // ['1','2','3']
```

3. search()
```js
// 返回匹配规则的起始索引
const regexp = /\d+/;
const text = "javascript1 2a 3d";
const i = text.search(regexp);
console.log(i); // 10
```

4. exec()
[官链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

5. test()
```js
// 返回是否匹配的boolean值
regexp.text(text)
```

参链：
* 1. [灵活运用JS开发技巧](https://juejin.cn/post/6844903838449664013) 所有知识点都是纸老虎，确定目标，踏实实践总结，一定可以掌握的。
