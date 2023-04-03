# Lodash 工具函数库

[官链](https://www.lodashjs.com/)

1. 基本的逻辑思维能力 + 好的刻意练习训练 = 比较理想的结果
2. 刻意练习中：重要的节点

   - 好的训练强度和节奏
   - 好的教材
   - 好的第一人教练和老师

3. 很多 API 函数都是重复的，掌握增删改查常用的 API 就足够了。

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
```

### 返回交集新数组

```js
intersection([arrays]); //给定数组列表的交集元素组成的数组
intersectionBy([arrays], [iteratee]); // 通过迭代器：入参value，经过返回值的比较，返回交集元素组成的数组
intersectionWith([arrays], [comparator]); // 通过比较函数：入参newValue,oldValue，通过比较，返回为真情况下交集元素的数组
```

### 移除操作，返新

```js
pull(arr, [values]); // 把value从arr中移出去，会改变原数组
pullAll(arr, values); // 和pull类似，不同的是，移除的是一个数组中的值，会改变原数组
pullAllBy(arr, values, [iteratee]); // 迭代器，对于操作元素是对象的情况，非常好用
pullAllWith(arr, values, [comparator]); // 比较器，comparator使用isEqual，非常合适
pullAt(arr, [values]); // 删除arr中指定索引的元素，返回被移除元素组成的新数组
```

### 数组并集，返新

```js
union([arrays]); // 返回数组唯一元素的并集，返新
unionBy([arrays], [iteratee]); // 通过迭代器（入参value）函数，产生唯一性值的标准。eg: Math.floor
unionWith([arrays], [comparator]); // 通过比较器（入参arrVal,othVal）函数，调用比较数组中的每个元素。eg: isEqual
```

### 数组唯一值，去重，返新

```js
uniq(array); // 去重
uniqBy(array, [iteratee]); // 迭代器
uniqWith(array, [comparator]); // 比较器
```

## 集合(对象)
