# Lodash 工具函数库

[官链](https://www.lodashjs.com/)

1. 基本的逻辑思维能力 + 好的刻意练习训练 = 比较理想的结果
2. 刻意练习中：重要的节点

   - 好的训练强度和节奏
   - 好的教材
   - 好的第一人教练和老师

3. 很多 API 函数都是重复的，掌握增删改查常用的 API 就足够了。
4. `Lodash`更像是一个工具函数字典，掌握高频常用的函数就可以了，其他的随用随查。20230411新华科技大厦1901 北京 沙尘暴
5. 任何知识的学习，都要靠**悟**，掌握核心精髓才能拉开明显的差距。20230425新华科技大厦1901 北京 晴
6. 20230505 学习API太枯燥了，学习要有目标和deadline，以用为学。

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

```js
countBy(collection, [iteratee]); // 一个可迭代集合中各个key出现的次数
groupBy(collection, [iteratee]); // 一个可迭代集合中各个key组成的元素

orderBy(collection, [(iteratees = [_.identity])], [orders]); // 针对对象类型的数组迭代很方便

partition(collection, [(predicate = _.identity)]); // 创建一个分成两组的数组，把原数组中真值放在第一个数组，假值放在第二个数组。这个挺好用
sample(collection); // 随机取出一个值；
sampleSize(collection, n); // 随机取出n个值；
size(collection); // 返回数组、类数组、字符串等的长度，或者对象可枚举的属性
sortBy(collection, [(iteratees = [_.identity])]); // 稳定排序是它最大的特点
```

## 函数

```js
debounce(func,wait,[options=]) // 防抖 options.leading = true 指定在防抖前开始；options.trailing = true 指定在防抖结束后执行
throttle(func,wait,[options=]) // 节流
```

## 语言

### 拷贝
```js
clone(value) // 浅拷贝
cloneDeep(value) // 深拷贝
cloneWith(value,[customizer]) // 接收一个可以定制的克隆返回值
cloneDeepWith(value,[customizer]) // 深拷贝
```

```js
isArray(value) // 返回true/false
isArrayLike(value) // 判断是否类数组，不是函数，并且length大于等于0，返回Boolean值
isArrayLikeObject(value) // 判断是否是数组，并且value是个对象，返回Boolean值
isEmpty(value) //判断是否是空对象
isEqual(value,othervalue) // 不支持函数和Dom节点比较
isEqualWith(value,othervalue,[customizer]) //customizer是个函数，用来定制比较值函数

toString(value) //转换为字符串，null 和 undefined 会被转换为空字符串；原生的String()会把null和undefined转换为'null'和'undefined' 20230417
```

## 数学

```js
max(array) // 返回数组中的最大值
maxBy(array,fn) // 通过迭代函数fn返回迭代函数返回值的最大值
mean(array) // array的元素平均值
mean(array,fn) // 通过迭代函数fn返回数组各个元素属性值的平均值
min(array) // 返回数组中的最小值
minBy(array,fn) // 通过迭代函数fn返回函数各返回值的最小值
sum(array) // 返回数组中的元素和
sumBy(array,fn) // 通过迭代函数fn返回数组各个元素某个某个属性的和
```

## 对象
```js
at(object,[paths]) // 创建一个数组，元素来自于object的path路径的值
toPairsIn(object) // 返回一个数组(里面各个元素也是个数组，数组第一个是键，数组第二个是值)，入参object的键值对，包括可继承的键值对（prototype）
assign(object,[source]) // 遍历对象属性进行合并
assignIn(object,[source]) // 变量对象属性进行合并，并且包括可继承来源对象的属性

findKey(object,fn) // 使fn返回真值的第一个key，挺好，特殊场景下会很有效率 20230425

merge(object, [source]) // 类似于assign()，特点是可以递归合并source来源对象自身和继承的可枚举属性，对象和数组的属性值会进行递归合并，其他值会进行覆盖合并 20230505
```

