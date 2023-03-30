# Lodash 工具函数库

[官链](https://www.lodashjs.com/)

## 数组

### 两数组对比过滤

```js
difference(arr1, arr2); // 在arr1中把arr2过滤出去，返回新数组
differenceBy(arr1, arr2, iteratee); // iteratee可以是函数、数组、对象、字符串
differenceWith(arr1, arr2, comparator); // comparator是函数，比较器
```

### 把数组头尾去掉元素，返新不改旧

```js
drop(arr, [number]); // 把arr的前面几个元素去掉，返回新数组不改旧
dropRight(arr, [number]); // 把arr后面的几个元素去掉，返回新数组不改旧
dropRightWhile(arr, [iteratee]); // 把arr尾部开始后面几个元素迭代器(value,index,arr)返回假值开始去掉，返回剩余元素的新数组
dropWhile(arr, [iteratee]); // 从头部开始，逐步通过迭代器，从返回假值开始（不包含）之前的去掉，返回剩余元素的新数组
```

###

```js
fill(arr, value, [start], [end]); // 替换数组指定范围内的值，左闭右开，原数组被改变
flattenDeep(arr); //把多维数组转换成一维数组，这个好用啊，返新不改旧
formPairs(arr); //把数组转换成键值对的对象，特殊场景下很好用，使用的很局限。
//     const f = [
//       ['name', 'lisi'],
//       ['age', 33],
//     ]
//     console.info('formPairs', fromPairs(f))
intersection([arrays]); // 给定数组列表的交集元素组成的数组
```
