# 去重专题系列

## 方法一：利用Set对象
* 1. 缺点：不能去重对象{}
```js
let arr = [2,3,1,5,34,90,34,23];
let b = [...new Set(arr)];
// let b = Array.from(new Set(arr));
console.log(b);
```

## 方法二：利用reduce (和 普通for循环原理一样，只是不用新建变量了)
* 1. 缺点：不能去重对象{}
```js
function deWeight(arr = []){
	return arr.reduce((t,v,i)=>{
        if(!t.includes(v)){// includes的使用
            t.push(v);
        }
        return t;
    },[]);
}
```

## 方法三：利用对象的key不能重复的特性 去重  
* 1. 优点：可以去重对象{}
```js
function deWeight(arr = []){
	// let obj = {};
    let result = [];
	for(let i = 0;i < arr.length; i++){
    	if(!obj.hasOwnProperty(arr[i])){// 利用hasOwnProperty属性
        	// obj[arr[i]] = arr[i];
            result.push(arr[i]);
        }
    }
    // 顺便把顺序也给排了
    // Object.values(obj);
    return result;
}
```

## 方法四：利用filter去重
* 1. 缺点：不能去重对象{}
```js
let a = [1,2,3,4,3,2,5];
function deWeight(arr = []){
    // indexOf函数的第二个参数是索引，是从此处开始检索，默认0;
    // 利用indexOf返回第一个匹配的索引特性 20210628晚
    return arr.filter((item,index,arr)=>{
        return arr.indexOf(item) == index;
    });
}
deWeight(a);
```