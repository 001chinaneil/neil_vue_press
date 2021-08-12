# 算法思想总结

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