# 二叉树系列集--层序遍历实战
层序遍历解决问题--打10个  
总结：二叉树的层序遍历就是**图论中的广度优先搜索在二叉树中的应用**。
## 二叉树的右视图
[力扣题目链接](https://leetcode-cn.com/problems/binary-tree-right-side-view/)  
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
```js
// 20220123 海淀图书馆（北区）F3
// 最右侧的层级节点
// 入参：root
// 返回值：res数组
// 核心逻辑：把每一层的最后一个节点放入res数组
const rightLevelOrder = function (root){
    if(root === null){
        return [];
    }

    let res = [],queue = [];
    queue.push(root);

    while(queue.length){
        let currLevelLength = queue.length;
        for(let i = 0;i < currLevelLength;i++){
            // 该删还要删
            let curr = queue.shift();
            // 只有最有一个入res数组
            if(i === currLevelLength-1){
                res.push(curr.val);
            }

            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    return res;
}
```

## 二叉树的层平均值
[力扣题目链接](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/)  
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
```js
// 20220123
// 入参：root
// 返回值：res数组
// 核心逻辑：拿到每层节点数值后，求均值并放入res中

const averageOfLevels = function (root){
    if(root === null){
        return [];
    }

    let res = [],queue = [];
    queue.push(root);

    while(queue.length){
        let currLevelLength = queue.length;
        let currSum = 0;
        for(let i = 0;i < currLevelLength;i++){
            let curr = queue.shift();
            currSum += curr.val;
            
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }

        let average = currSum/currLevelLength;

        res.push(average);
    }

    return res;
}
```

## N叉树的层序遍历
[力扣题目链接](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)    
不同于二叉树的node.left和node.right，而是node.children，里面都是子树元素，可以迭代
```js
// 20220123
// 入参：root
// 返回值：res数组，二维数组，里面是每层节点组成的数组
// 核心逻辑：层与层的区别；N叉树的子树在node.children里面

const nTreeLevelOrder = function (root){
    if(root === null){
        return [];
    }

    let res = [],queue = [root];

    while(queue.length){
        let currLevelLength = queue.length;
        let currLevelArr = [];
        for(let i = 0;i < currLevelLength;i++){
            let curr = queue.shift();// 出队列
            currLevelArr.push(curr.val);

            for(let item of curr.children){
                item && queue.push(item);
            }
        }

        res.push(currLevelArr);
    }

    return res;
}
```

## 在每个树行中找最大值
[力扣题目链接](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/)  
需要在二叉树的每一行中找到最大的值。
```js
// 20220123
var largestValues = function(root) {
    if(root === null){
        return [];
    }
    let res = [],queue = [root];
    
    while(queue.length){
        let currLevelLength = queue.length;
        let currLevelArr = [];

        for(let i = 0;i < currLevelLength;i++){
            let curr = queue.shift();
            currLevelArr.push(curr.val);

            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }

        res.push(Math.max(...currLevelArr));
    }

    return res;
};
```

## 填充每个节点的下一个右侧节点指针
[力扣题目链接](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/)  
```js
var connect = function(root) {
    if(root === null){ root }
    let queue = [root];
    while(queue.length){
        let n = queue.length;
        for (let i=0; i<n; i++) {
            let node = queue.shift();
            if (i < n-1) {
                // 指向下一个右侧节点
                node.next = queue[0];
            }
            // 注意这里的判断
            node && node.left && queue.push(node.left);
            node && node.right && queue.push(node.right);
        }
    }
    return root;
};
```

## 二叉树的最大深度
[力扣题目链接](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
```js
var maxDepth = function(root) {
    if(root === null){
        return 0;
    }
    let queue = [root],res = [];
    while(queue.length){
        let currLevelLength = queue.length;
        let currLevelArr = [];
        for(let i = 0;i < currLevelLength;i++){
            let curr = queue.shift();
            currLevelArr.push(curr.val);
            curr && curr.left && queue.push(curr.left);
            curr && curr.right && queue.push(curr.right);
        }
        res.push(currLevelArr);
    }

    return res.length;
};
```

## 二叉树的最小深度
[力扣题目链接](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)    
当左右子树都没有的时候，就是最小深度了。
```js
var minDepth = function(root) {
    if(root === null){
        return 0;
    }

    let queue = [root],minHeight = 0;
    while(queue.length){
        let currLevelLength = queue.length;
        minHeight++;
        for(let i = 0;i < currLevelLength;i++){
            let curr = queue.shift();
            curr && curr.left && queue.push(curr.left);
            curr && curr.right && queue.push(curr.right);
            if(!curr.left && !curr.right ){
                return minHeight;
            }
        }
    }

    return minHeight;
};
```