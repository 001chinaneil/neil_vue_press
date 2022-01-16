# 其他未分类集
20220116 第二遍刷本节 百度大厦A座 F3 四和春 功夫用在平时！！

## 一、千分位  
* 1. 利用数组splice截取后改变原数组的特性  
```js
function transfrom(num = 0){
    str = String(num);
    let arr = str.split('');
    let result = '';

    while(arr.length > 3){
        result = ',' + arr.splice(-3).join('') + result;
    }

    if(arr.length > 0){
        result = arr.splice(0).join('') + result;
    }

    return result;
}
```  

## 二、数组分组  
`[1,2,3,4,5],2 => [[1,2],[3,4],[5]]`  
*解法一：*    
* 1. 利用reduce函数特性，只要和当前数组有关系的逻辑都可以用reduce
```js
function chunk(arr = [],size = 1){
    return !arr.length ? [] : arr.reduce((prev,curr)=>{
        prev[prev.length-1].length >= size ? prev.push([curr]) : prev[prev.length-1].push(curr);
        return prev;// 显式返回
    },[[]]);
}
```  

*解法二：[最简单，最推荐]* 
* 1. 利用while循环和splice的特性
```js
function chunk(arr = [],size = 1){
    let result = [];
    while(arr.length){
        result.push(arr.splice(0,size));
    }
    return result;
}
```  
## 三、把多维数组转化为一维数组  
*解法一：*  
* 1. flat(n)：会按照指定的深度去遍历数组，并返回新数组(也就是把嵌套数组扒n层皮~)，默认1  

*解法二：*  
```js
while(arr.some((item)=>(Array.isArray(item)))){
    arr = [].concat(...arr);
}
```  

*解法三：* 使用toString()或者join()，把数组转换成字符串，利用split(',')把字符串转换成数组  
```js
arr.toString().split(',');
// 或者
arr.join().split(',');// 一定不能使用 join('')，会出现问题
``` 

*解法四：*
```js
let newArr = JSON.stringify(arr).replace(/(\[|\])/g,'').split(',');
```

## 四、把零放在数组的后面
**要求：**
* 1. 把一个数组里面的0放后面，其他非0元素保持相对位置不变  
* 2. 时间复杂度是O(n)，不新增新的数组变量  

**解法一：记录非零的个数**
```js
function backZero(arr = []){
    if(Object.prototype.toString.call(arr) !== '[object Array]'){
        return new Error('入参非数组，请检查~');
    }

    let a = 0;// 记录非零的个数，他们都是应该排在数组前面的，[这个方法真巧妙！]
    for(let i = 0;i < arr.length; i++){
        if(arr[i] != 0){
            // 互换
            [ arr[a],arr[i] ] = [ arr[i],arr[a] ];
            a++;
        }
    }

    return arr;
}
```

**解法二：利用reduce的特性**
```js
function backZero(arr = []){
    return  arr.reduce((t,v)=>{
                if(v == 0 || v == '0'){
                    t[1].push(v);
                }else {
                    t[0].push(v);
                }
                return t;
            },[[],[]]).flat();
}
```

## 五、不引入新变量进行值的互换，利用ES6的结构赋值

```js
// 实现了翻转reverse的效果
let arr = [1,2,9,0];
for(let i = 0;i < arr.length-i;i++){
   [ arr[arr.length-i-1],arr[i] ] = [ arr[i],arr[arr.length-i-1] ];
}
console.log(arr);
```

## 五、快速返回色值
2021年夏天 快手 本地生活 三面真题
* 1. 快速：Math.random()
* 2. 色值：toString(16) 16进制
* 3. slice(2,8)，6位值，把前面的 `0.` 过滤掉

字符串形式
```js
function getColor(){
    return '#' + Math.random().toString(16).slice(2,8);
}
```

RGB形式
```js
function getColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
```

```js
function color16(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
```

**思考总结**：  
* 1. [MDN Number.prototype.toString([radix])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
* 2. 就是利用了Number.prototype.toString([radix]); 参数是进制的特性，16代表16进制(0-9,a-f)
* 3. 36代表36进制(0-9,a-z) => 可以拓展成随机字符串
* 4. **随机类型，就要想到Math.random();**
* 5. Number.toFixed(2);// 保留2位小数，四舍五入，返回一个字符串类型的数字，(这个API是返新值）
* 6. [参链：JS生成随机颜色值](https://blog.csdn.net/weixin_40920953/article/details/86582142)

## 六、如何比较两个对象是否相同
```js
// 方法一：
// 局限性：2个对象的key顺序都要一致才可以
JSON.stringify();
```

```js
// 方法二：
// 使用Object.getOwnPropertyNames()，能把自身对象属性（包括不可枚举属性但不包括以Symbol值的属性）组成一个数组。
// 和Object.keys()的使用效果是一样的
// 和递归思想
// 值是函数的情况还是判断不了 todo
// 功夫用在平时，有步骤有章法的学习、工作、生活 20220116 百度大厦A座 F3 四和春
function isObjectEqual(obj1,obj2){
    let arr1 = Object.getOwnPropertyNames(obj1);
    let arr2 = Object.getOwnPropertyNames(obj2);
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let key of arr1){
        // typeof 判断对象 数组 null都是object，所以把null的情况排除出去；一切都回归了本质，回归了最基础的概念和内容
        if(obj1[key] && obj2[key] && typeof obj1[key] === 'object' && typeof obj2[key] === 'object'){
            // 利用递归思想
            if( !isObjectEqual(obj1[key],obj2[key]) ){
                return false;
            }
        }else if(obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true;
}
```

## 七、如何快速打乱一个数组
* 立马想到用Math.random()
```js
arr.sort(function(){ return Math.random() - 0.5 });
```




