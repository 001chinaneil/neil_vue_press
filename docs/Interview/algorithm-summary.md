# 算法思想总结
* a. 考察的是智力题，是算法思想。
* b. 数据结构：数组-> 链表-> 哈希表->字符串->栈与队列->树->回溯->贪心->动态规划->图论->高级数据结构
* c. 算法分类：排序、二分、双指针、递归、分治、贪心、动态规划、深广度优先、sliding window
* d. 算法网址：牛客网、GitHub、LeetCode
* e. 时间复杂度：O(1)常数项 => O(logn)对数阶 => O(n)线性阶 => O(n^2)平方阶 => O(n^3)立方阶 => O(2^n)指数阶 20211227

```js
字符串、双指针、栈与队列、二叉树、（回溯算法、）贪心算法、动态规划：20220103 TODO
字符串、双指针、栈与队列、二叉树、（回溯算法、）贪心算法、动态规划：20210104 TODO

中小厂：一般就是字符串、双指针、栈与队列问题，因为再难的问题，面试官就也不会了。
大厂：链表、二叉树、动态规划、贪心算法就是比较难的题目了
```

## 一、二分算法
* 1. 是一种在有序数组中搜索目标值索引的算法
* 2. 利用while循环，不断缩短的是目标索引范围

参考：[js实现二分查找算法](https://www.cnblogs.com/sqh17/p/9505887.html)

```js
function binary(arr = [],target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let middle = parseInt( (right + left)/2 );
        if(arr[middle] === target){
            return middle;
        }else if(arr[middle] > target){
            right = middle - 1;
        }else if(arr[middle] < target){
            left = middle + 1;
        }else {
            return -1;
        }
    }
}
```

## 二、递归思想
* 1. 阶乘及其阶乘求和
```js
function jieChengSum(n = 0){
    function jieCheng(n = 0){
        let init = 1;
        if( n <= 1 ) return init;// 递归思想中退出机制
 
        return n * jieCheng(n-1);// 递归思想
    }
 
    let sum = 0;
    for(let i = 1; i <= n; i++){// 从1开始循环
        console.log(i+'的阶乘是：'+i+'  '+jieCheng(n));
        sum += jieCheng(i);
    }
 
    return sum;
}
 
let b = jieChengSum(10);
console.log(b);// 4037913
```
参链：[js中实现阶乘（多种方法）以及阶乘求和](https://blog.csdn.net/weixin_44880730/article/details/108328099)

## 总结：  
* 1. 到了这个时候，原则就是会写的一定要冷静、耐心、思路清晰的写对，不会写的尽量说明白思路，尽力表达。    
* 2. 一类一类的去刷题，总结反思。  
* 3. 坚持到坚持不住的时候，就再坚持一下，一定不能主动放弃。20210627快手本地生活一面  
* 4. 算法题真有意思，和初中数学一样的感觉，纯粹、简单，静心去思考逻辑过程。[快慢指针训练20210629]  
* 5. 前端岗到了五年这个阶段，前面四节(JS基础、框架应用、Webpack、浏览网络)都是非常基础的东西，必须掌握并融会贯通。在此基础上，5算法题、6专题方向、7软实力量也要拿的出手。20210630凌晨  
* 6. 前端万源归因的几点思考：  
     6.1 色值：16进制  
     6.2 基础数据格式：toString()的原理([使用](https://blog.csdn.net/josavion/article/details/78843686))、格式转换  
         toString()原理：内置算法实际上是获取底层this的类名，通过特殊字符串返回。  
         [浅论js中toString、valueOf实现机制及意义](https://www.cnblogs.com/cqqfboy/p/14721224.html)  
         TODO复合对象类型会自动调用valueOf()、toString()，具体调用要基于“场景”(数字相加是valueOf、字符串相加是toString())  
     6.3 盒子模型：二维空间  
* 7. 对前端基础知识的考察目的是什么？  
     7.1 遇到疑难问题的快速定位和解决  
     7.2 能把应用层面的框架、工具用到极致