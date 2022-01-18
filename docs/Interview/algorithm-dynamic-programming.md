# 动态规划系列 todo
* 1. 概念：(美国数学家贝尔曼)，问题的规模随着拆分，会变得越来越小，这种将问题拆解，并通过计算小问题的解，最终计算出最优解的思想就是动态规划。
* 2. 典型问题：爬楼梯 & 斐波那契数列 & 01背包问题 & 换零钱
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
// 到45的时候就明显感觉到计算慢了
function feibo(n){
   if(n == 0) return 0;
   if(n == 1 || n == 2) return 1;
   return feibo(n-1) + feibo(n-2);
}
```

方法二：递归改进版，`暂存数组，利用闭包`，优点，解决重复计算问题
```js
// 相比方法一，计算速度和数值都提升了不少
let fibonacci = function () {
    let arr = [0,1];
    let fib = function (n){
        // 一定要用 == undefined，用!arr[n]会栈溢出
        if(arr[n] == undefined){
            arr[n] = fib(n-2) + fib(n-1);
        }
        return arr[n];
    }

    return fib;
}()
fibonacci(30);
```

方法三：循环，巧用结构赋值进行交换值，解决重复计算问题，`动态规划思想`
* 1. 时间复杂度O(n)，空间复杂度O(n)
```js
let fibonacci = function (n) {
    let n1 = 1; n2 = 1;
    for (let i = 2; i < n; i++) {// 从i = 2开始，因为返回的是n2
        [n1, n2] = [n2, n1 + n2]
    }
    return n2
}
fibonacci(30);
```

参链：
* 1. [用js优美的写各种斐波那契数列](https://zhuanlan.zhihu.com/p/27205391) TODO
* 2. [JS写斐波那契数列的几种方法](https://www.cnblogs.com/superlizhao/p/11603158.html) TODO
* 3. [从最简单的斐波那契数列来学习动态规划。（JavaScript版本）](https://blog.csdn.net/weixin_40906515/article/details/106536355) 清晰明了的介绍说明，靠它来写上面的逻辑
* 4. [js 实现斐波那契数列(数组缓存、动态规划、尾调用优化)](https://www.mk2048.com/blog/blog_ija2hkh1aib.html)
* 5. [js实现--动态规划算法](https://blog.csdn.net/m0_37686205/article/details/90182779)

## 二、爬楼梯问题
### 基础版 斐波那契数列版
[力扣题目链接](https://leetcode-cn.com/problems/climbing-stairs/)
* dp[i] = dp[i-1] + dp[i-2];
* 初始化dp[1] = 1，dp[2] = 2，从i=3开始递推

### 最小花费爬楼梯
[力扣题目链接](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)
* dp[i] 代表到n阶台阶的最小花费值
* 递推公式：dp[i] = Math.min(dp[i-1]+cost[i],dp[i-2]+cost[i])
* 初始化：dp = [ cost[0],cost[1] ]
* 返回值：Math.min(dp[i-1]+cost[i],dp[i-2]+cost[i])

## 三、不同路径
### 基础版
[力扣题目链接](https://leetcode-cn.com/problems/unique-paths/)
* 二维数组层次，dp[i][j] 代表 从（0，0）到（i，j）的路径方式数
* 递归公式：从2个方向而来，dp[i][j] = dp[i-1][j] + dp[i][j-1]
* 初始化：dp[i][0] 肯定都是1，dp[0][j]肯定都是1
* 返回值：dp[i][j]
* 二维数组肯定是2个嵌套for循环
```js
let uniquePaths = function(m, n) {
    let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
    // dp[i][j] 表示到达（i，j） 点的路径数
    for (let i=1; i<m; i++) {
        for (let j=1; j< n;j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};
```
### 进化版 途中有障碍物
* 遇到障碍就保持0，没遇到障碍就正常计算；初始化时也要保持这个思路
```js
let uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array(m).fill().map(item => Array(n).fill(0));
    
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
        dp[i][0] = 1;
    }
    
    for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
        dp[0][i] = 1;
    }
    
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
        }
    }
        
    return dp[m - 1][n - 1];
};
```

## 四、整数拆分，返回最大乘积
* dp[i] = 代表数字i的最大乘积
* 拆分成2个，或者2个以上，dp[i] = Math.max(dp[i],j*(i-j),j*dp[i-j])，这是假设中间j时机乘积最大
* 初始化：dp[2] = 1
```js
let integerBreak = function(n) {
    // 数字n的下标是n+1
    let dp = new Array(n + 1).fill(0);
    // dp[0] dp[1] 没有实际意义
    dp[2] = 1;

    // 从i=3开始初始化
    for(let i = 3; i <= n; i++) {
        for(let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j));
        }
    }
    return dp[n];
};
```

## 五、不同的二叉搜索数 todo
20220118 第二遍 还是不懂，为什么是乘？
* dp[i]代表i个节点所有二叉树的条数
* 递推公式：dp[i] += dp[j-1] * dp[i-j]
* 初始化：dp[0] = 1，dp[1] = 1
* 遍历：从i=2开始遍历，2个for循环嵌套
* 返回：dp[n]

```js
const numTrees =(n) => {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            dp[i] += dp[j-1] * dp[i-j];
        }
    }

    return dp[n];
};
```

## 六、01背包问题--动规的第二个阶段
* 主要是01背包和完全背包，而完全背包又是01背包演变来的。

### 01背包
todo 01背包理论基础一 20220116 太难了，没看太懂
```js
dp[i][j] = Math.max(
    dp[i - 1][j], 
    value[i - 1] + dp[i - 1][j - wight[i - 1]],
    // 这里不应该是value[i] + dp[i-1][j-wight[i-1]]吗？为什么是value[i-1]？
)
```
基础理论二：  
