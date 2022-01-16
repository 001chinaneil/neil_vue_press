# 动态规划系列 todo
* 1. 概念：(美国数学家贝尔曼)，问题的规模随着拆分，会变得越来越小，这种将问题拆解，并通过计算小问题的解，最终计算出最优解的思想就是动态规划。
* 2. 典型问题：爬楼梯 & 斐波那契数列
* 3. 动态规划，拆解成小问题进行处理，做假设。20210815

20220103  
```js
// 动态规划五部曲
1、确定dp数组（dp table）及其下标的含义
2、确定递推公式
3、dp数组如何初始化
4、确定遍历顺序
5、举例推导dp数组
--------------------
6、爬楼梯的扩展题 todo，一步最大能迈m步台阶。
7、第9题：不同的二叉搜索树，太难了，死记硬背的，TODO
8、背包问题、换零钱问题
```

## 一、实现斐波那契数列
* 1. 入参：n，第n个数是第n-1和第n-2个数相加得出的
* 2. 0 1 1 2 3 5 8 13 21 ...
* 3. 完美深刻认识并理解递归思想的好例子[20210815]

方法一：递归普通版，缺点，会重复计算，优点，简单明了
```js
function feibo(n){
   if(n == 0) return 0;
   if(n == 1 || n == 2) return 1;
   return feibo(n-1) + feibo(n-2);
}
```

方法二：递归改进版，`暂存数组，利用闭包`，优点，解决重复计算问题
```js
let fibonacci = function () {
    let memo = [0, 1];
    let fib = function (n) {
        if (memo[n] == undefined) {
            memo[n] = fib(n - 2) + fib(n - 1);
        }
        return memo[n];
    }
    return fib;
}()
fibonacci(30)
```

方法三：循环，巧用结构赋值进行交换值，解决重复计算问题，`动态规划思想`
* 1. 时间复杂度O(n)，空间复杂度O(n)
```js
let fibonacci = function (n) {
    let n1 = 1; n2 = 1;
    for (let i = 2; i < n; i++) {// 从i = 2开始
        [n1, n2] = [n2, n1 + n2]
    }
    return n2
}
fibonacci(30)
```

参链：
* 1. [用js优美的写各种斐波那契数列](https://zhuanlan.zhihu.com/p/27205391) TODO
* 2. [JS写斐波那契数列的几种方法](https://www.cnblogs.com/superlizhao/p/11603158.html) TODO
* 3. [从最简单的斐波那契数列来学习动态规划。（JavaScript版本）](https://blog.csdn.net/weixin_40906515/article/details/106536355) 清晰明了的介绍说明，靠它来写上面的逻辑
* 4. [js 实现斐波那契数列(数组缓存、动态规划、尾调用优化)](https://www.mk2048.com/blog/blog_ija2hkh1aib.html)
* 5. [js实现--动态规划算法](https://blog.csdn.net/m0_37686205/article/details/90182779)

## 二、背包问题
* 主要是01背包和完全背包，而完全背包又是01背包演变来的。

### 01背包
todo 01背包理论基础一 20220116 太难了，没看太懂