# 排序算法系列  

概念：  
* 时间复杂度：完成一个程序所需要的时间；O(1)：常量；O(logn)：对数；O(n)：线性；O(n^2)：指数型；[一套图 搞懂“时间复杂度”](https://blog.csdn.net/qq_41523096/article/details/82142747)  
* 空间复杂度：完成一个程序所需要的内存/变量；  

标准：  
* 数组内部数字的升序排列

稳定性分析TODO

| 思想&时间复杂度 | 空间复杂度  |      |      |
| ------------ | ----------- | ----| ---- |
| 循环比较O(n^2)   | O(n^2)    |冒泡排序：你比我小，我就要和你换，大值往上 |选择排序：你比我小，我就要和你换，小值往下
| 分而治之O(nlogn) | O(logn)   |快速排序：取基值，左小右大，递归调，concat连 |归并排序：一直中分，用slice，合并比较终用shift
| 无序插有序O(n^2) | O(1)      |插入排序：你比我大，你就后移，找到最后一个大值，插入 |二分法排序：找到第一个大值，大值自身及后面都后移，插入
|  | | arr.sort((a,b)=>(a-b));

## 一、冒泡排序  
* 1. 两两比较，如果前一个比后一个大，则互换位置，每次循环比较之后，最后一个永远是最大的，不参与下一轮比较。
* 2. 口诀：**一层减1，二层减i减1**
* 3. 时间复杂度：(n-1)*(n-i-1) = n^2  (**n-1轮，每轮n-i-1次**)

```js
function sort(array){
    for(var i = 0; i < array.length - 1; i++){
      for(var j = 0; j<array.length - i -1; j++){ //最后一个不参与排序
        if(array[j] > array[j+1]){
          var smap = array[j]; //把大值赋值给一个变量
          array[j] = array[j+1]; //把小值前移
          array[j+1] = smap; //把大值后移
        }
      }　　　　
    }
   return array;
}
```

## 二、快速排序
* 1. 口诀：**取基准，左小右大，做递归；两个坑儿要记牢，长度小(于)1要返回，splice截取后要取[0]**
* 2. `arr.splice(index,num,items);` 返回被截取的数组
* 3. `Math.floor(num);` 对浮点数向下取整

```js
function quickSort(array){
    if(array.length <= 1){// 避免进入递归死循环，此行必加
      return array;
    }　　

    //var middleIndex = Math.floor(array.length / 2);
    //var middle = array.splice(middleIndex,1)[0]; //获得中间数值
    // 20210615 新写法
    var middle = array.splice(0,1)[0];// 直接截取第一个得了，并且用splice函数截取出原数组，简单直接，因为怎么都是顺序一遍
    var left = [];
    var right = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] < middle){
        left.push(array[i]); //把小于中间数的放到左边的数组里
      }eles{
        right.push(array[i]); //把大于中间数的放到右边的数组里面
      }
    }
    return quickSort(left).concat([middle],quickSort(right)); //进行递归调用
}
```

## 三、插入排序
* 1. 设定有序数列和无序数列，把无序数列中的项插入到有序数列中，在有序数列的内循环中采取**移动赋值**的方式达到目的。
* 2. 适合小数据量排序（<1000）
* 3. 口诀：**找准插入的位置：巧用while来找临界点，比较条件(j >= 0 && arr[j] > curr)是关键**
* 4. 默认第一项已经排好序，所以循环是从i=1开始  

```js
function insertSort(arr = []){
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i];// 当前元素
        // 声明待插入点j
        let j = i-1;
        while(j >= 0 && arr[j] > curr){// 关键的比较条件
            arr[j+1] = arr[j];// 你往后面走!
            j--
        }
        // 找到了j+1
        arr[j+1] = curr;
    }
    return arr;
}
```

总结：算法题贵在精不在多，在精的前提下，尽量的多。20210808午首著一层

## 四、二分法排序 TODO

## 五、选择排序 TODO

## 六、归并排序 TODO
* 1. 口诀：**先分解，分到不能再分，return递归合并；后合并，合到其一为空，起变量，用shift，concat连。**(20210627总结口诀)

```js
// 归并排序：分而治之的思想
function mergeSort(arr = []){
  // 1. 先分解
  function sort(arr = []){
    if(arr.length <= 1){ return arr } // 分到不能再分为止

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(sort(left),sort(right));
  }

  // 2. 再合并
  function merge(left = [],right = []){
    let temp = [];
    while(left.length && right.length){// 直到某个数组为空为止，while挺好用
      if(left[0] < right[0]){
        temp.push(left.shift());// 关键一步，把小值剔除(shift)原数组
      }else {
        temp.push(right.shift());
      }
    }
    return temp.concat(left,right);
  }

  return sort(arr);
}
```

## 七、原生排序Sort
* 1. 无法保证时间和空间复杂度(取决于具体表现)
* 2. 口诀：**顺升，逆降，改变原数组；**
* 3. `arr.sort((a,b)=> a-b ); //升序排列；b-a// 降序排列；`

## 八、希尔排序 TODO

参考链接：
* 1. [js 实现排序算法 -- 希尔排序（Shell Sort）](https://www.cnblogs.com/cc-freiheit/p/10983821.html)
* 2. [十大经典排序算法（动图演示）](https://www.cnblogs.com/onepixel/p/7674659.html)
* 3. [JS实现插入排序](https://blog.csdn.net/bangbanggangan/article/details/80986501)
* 4. [归并排序算法及其JS实现](https://www.cnblogs.com/sunmarvell/p/9248676.html): 分而治之思想，归并思想
