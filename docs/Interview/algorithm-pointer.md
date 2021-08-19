# 双指针系列集
* 1. [LeetCode官方教程](https://leetcode-cn.com/leetbook/read/array-and-string/yco3v/)
* 2. 双指针相向而行
* 3. 双指针(快慢指针)同向而行：核心是确定移动策略，也许会用到排序。
* 4. 确定快慢指针移动的策略

## 示例一：长度最小的子数组 20210629晚
* 参链：[leetCode：209](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

```js
var minSubArrayLen = function(target, nums) {
    let slow = 0;
    let fast = 0;
    let sum = 0;
    let minLength = 0;
    while(fast < nums.length){// 1. 当快指针滑出数组停止[快指针的运动策略]
        sum += nums[fast];
        while(sum >= target){// 2. 当和大于等于目标值时，进行慢指针的移动[重点][慢指针的运动策略]
            sum -= nums[slow];
            // 3. 更新最小长度
            minLength = minLength == 0 ? (fast - slow + 1) : Math.min(minLength,(fast-slow+1));
            slow++;
        }
        fast++;
    }
    return minLength;
};
```

## 示例二：合并2个有序数组
* 参链：[JS合并两个有序数组](http://www.duanlonglong.com/qdjy/819.html)

```js
function solution (num1, num2) {
  let m = num1.length;
  let n = num2.length;
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    num1[p--] = (num1[p1] < num2[p2] ? num2[p2--] : num1[p1--]);
  }
//   console.log(num1)
  return num1;
}
```