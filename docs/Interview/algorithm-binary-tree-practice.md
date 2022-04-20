# 二叉树系列集--实战实践集合
## 翻转二叉树
把每个节点的左右子树互换一下，整个树就都翻转了。
todo 还有其他版本的写法
```js
// 递归版
var invertTree = function(root) {
    //1. 首先使用递归版本的前序遍历实现二叉树翻转
    //交换节点函数
    const inverNode = function(left,right){
        // let temp = left;
        // left = right;
        // right = temp;
        [left,right] = [right,left];
        //需要重新给root赋值一下
        root.left = left;
        root.right = right;
    }
    //确定递归函数的参数和返回值inverTree=function(root)
    //确定终止条件
    if(root === null){
        return root;
    }
    //确定节点处理逻辑 交换
    inverNode(root.left,root.right);

    invertTree(root.left);
    invertTree(root.right);
    return root;
};
```
## 对称二叉树
20220406 新华科技大厦
* 利用**递归思想**、**队列数据结构**进行迭代判断、**栈数据结构**进行迭代判断
* [题目链接：](https://leetcode-cn.com/problems/symmetric-tree/)
```js
var isSymmetric = function(root) {
    // 递归解法：对比左节点和右节点，是否相同
    // function isSqueue (left,right){
    //     // 先判断空节点的情况
    //     if(left!==null&&right===null || left===null&&right!==null){
    //         return false;
    //     }else if(left===null&&right===null){
    //         return true;
    //     }else if(left.val !== right.val){
    //         return false;
    //     }

    //     let leftResult = isSqueue(left.left,right.right);
    //     let rightResult = isSqueue(left.right,right.left);

    //     return leftResult && rightResult;
    // }

    // if(root === null){
    //     return true;
    // }

    // return isSqueue(root.left,root.right);

    // 队列解法：依次入队，依次出队
    // if(root === null){
    //     return true;
    // }
    // let squeue = [];
    // // 初始化入队
    // squeue.push(root.left,root.right);
    // while(squeue.length){
    //     // 依次出队
    //     let left = squeue.shift();
    //     let right = squeue.shift();
    //     // 各种空节点情况判断
    //     if(left === null && right === null){ continue }
    //     if(left === null || right === null || left.val !== right.val){ return false }
    //     // 依次入队
    //     squeue.push(left.left,right.right,left.right,right.left);
    // }
    // // 默认兜底值
    // return true;

    // 利用栈结构实现迭代判断
    if(root === null){
        return true;
    }
    let stack = [];
    // 入队初始化
    stack.push(root.left,root.right);
    while(stack.length){
        // 依次出队
        let rightNode = stack.pop();
        let leftNode = stack.pop();
        if(rightNode===null&&leftNode===null){
            // 如果都为空节点，则跳过此次循环判断
            continue;
        }
        if(rightNode === null || leftNode === null || rightNode.val !== leftNode.val){
            return false;
        }
        // 依次入队
        stack.push(leftNode.left,rightNode.right,leftNode.right,rightNode.left);
    }
    // 默认兜底值
    return true;
};
```

## 二叉树的最大深度
20220407 新华科技大厦
* **递归遍历**：深度优先
* **层序遍历**：广度优先
```js
// 递归遍历
var maxDepth = function(root) {
    // 递归遍历 三部曲
    // 确定参数和返回值
    // 确定终止条件
    // 确定递归的单层逻辑
    const findDepth = function(node){
        if(node === null){ return 0 }

        let leftDepth = findDepth(node.left);
        let rightDepth = findDepth(node.right);
        let depth = 1 + Math.max(leftDepth,rightDepth);

        return depth;
    }

    return findDepth(root);
};

// N叉树的最大深度
var maxDepth = function(root) {
    // 递归遍历 三部曲
    // 确定参数和返回值
    // 确定终止条件
    // 确定单层逻辑
    const findDepth = function(node){
        if(node === null){ return 0 }

        let depth = 0;
        for(let item of node.children){
            depth = Math.max(depth,findDepth(item));
        }

        return depth + 1;
    }

    return findDepth(root);
};
```
```js
// 层序遍历
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

// N叉树的最大深度
var maxDepth = function(root) {
    // 层序遍历
    // 用2层的while循环 第一层循环每一次+1
    if(root === null){ return 0 }
    let squeue = [root];
    let length = 0;
    while(squeue.length){
        length++;
        let size = squeue.length;
        while(size--){// 把队列里面的都遍历完才算一轮
            let nextNode = squeue.shift();
            // 把非空子节点都放到队列中
            for(let item of nextNode.children){
                item && squeue.push(item);
            }
        }
    }

    return length;
};
```

## 二叉树的最小深度
```js
// 递归遍历
var minDepth = function(root) {
    // 递归遍历 三部曲
    // 1. 确定参数和返回值
    // 2. 确定终止条件
    // 3. 确定单层逻辑
    
    if(!root) return 0;
    if(!root.left && !root.right){ return 1 } // 如果左右子节点都为空，则返回1
    // 如果左节点为空，则递归右节点
    if(!root.left){ return minDepth(root.right) + 1 }
    // 如果右节点为空，则递归左节点
    if(!root.right){ return minDepth(root.left) + 1 }

    return Math.min(minDepth(root.left),minDepth(root.right)) + 1;
};
```
```js
// 层序遍历
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


## 完全二叉树的节点树
* [LeetCode题目](https://leetcode-cn.com/problems/count-complete-tree-nodes/)
```js
var countNodes = function(root) {
    // 递归解法 三部曲
    // 1. 确定入参和返回值
    // 2. 确定终止条件
    // 3. 确定单层逻辑
    const countNums = function(node){
        if(node === null){ return 0 }
        let leftNums = countNums(node.left);
        let rightNums = countNums(node.right);
        return leftNums + rightNums + 1;// 把中间节点加上
    }

    return countNums(root);
};

var countNodes = function(root) {
    // 层序遍历
    // 用2个while循环，用变量记录节点数量
    if(root === null){ return 0 }
    let squeue = [root];
    let nodeNums = 0;
    while(squeue.length){
        let size = squeue.length;
        while(size--){
            nodeNums++;
            let currNode = squeue.shift();
            currNode.left && squeue.push(currNode.left);
            currNode.right && squeue.push(currNode.right);
        }
    }

    return nodeNums;
};

var countNodes = function(root) {
    // 完全二叉树 一定是满二叉树，满二叉树的节点树是2^n-1
    // todo 还不是特别理解
    if(root === null){return 0}
    let left = root.left;
    let right = root.right;
    let leftHeight = 0,rightHeight = 0;
    while(left){
        left = left.left;
        leftHeight++;
    }
    while(right){
        right = right.right;
        rightHeight++;
    }
    if(leftHeight === rightHeight){
        return Math.pow(2,leftHeight+1) - 1;
    }

    return countNodes(root.left) + countNodes(root.right) + 1;
};
```
## 平衡二叉树
* [题目链接：110.平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)
* 定义：树的节点差值的绝对值不超过1
* 节点的深度：是根节点到该节点的最大条数；节点的高度：是当前节点到树最长节点的最大条数；
* leetcode的节点数是高度值，wiki的边数是高度值，以leetcode为准。
* 迭代解法有些复杂，了解即可。
```js
var isBalanced = function(root) {
    // 递归解法 三部曲
    // 1. 确定入参和返回值
    function getHeigth(node){
        // 2. 确定终止条件
        if(node === null) return 0;
        // 3. 确定单层逻辑
        let leftHeigth = getHeigth(node.left);
        if(leftHeigth === -1){ return -1 }
        let rightHeigth = getHeigth(node.right);
        if(rightHeigth === -1){ return -1 }
        if(Math.abs( leftHeigth - rightHeigth ) > 1){
            return -1;
        }else {
            return 1 + Math.max(leftHeigth,rightHeigth);
        }
    }

    return !(getHeigth(root) === -1);
};
```
## 二叉树的所有路径
* [题目链接](https://leetcode-cn.com/problems/binary-tree-paths/)
* 递归思想 + 回溯思想
```js
// 20220415 新华科技大厦
var binaryTreePaths = function(root) {
    // 递归解法：三部曲
    // 1. 确定参数和返回值
    // 2. 确定终止条件
    // 3. 确定单层逻辑
    // ->这种的标志
    let res = [];
    function findPath(node,curPath){
        // 终止条件
        if(node.left==null && node.right==null){
            // !!curPath ? curPath += ('->'+node.val) : curPath += (node.val);
            curPath += node.val;
            res.push(curPath);
            // 此路径到最后的节点了，可以终止返回了
            return;
        }
        // !!curPath ? curPath += ('->'+node.val) : curPath += (node.val);
        curPath += node.val+'->';
        // 开始递归
        node.left && findPath(node.left,curPath);
        node.right && findPath(node.right,curPath);
    }

    // 初始化
    findPath(root,'');
    // 最终的返回值
    return res;
};
// todo 迭代解法
```

## 比较两棵树是否相同
```js
var isSameTree = function(p, q) {
    // 递归解法，三部曲
    // 1. 确定入参
    function checkNode(tree1,tree2){
        // 2. 确定终止条件
        if(tree1 === null && tree2 === null){
            return true;
        }else if(tree1 === null || tree2 === null){
            return false;
        }else if(tree1.val !== tree2.val){
            return false;
        }

        // 3. 确定单层条件
        // 进到这里都是两个节点相等的情况了
        let leftCase = checkNode(tree1.left,tree2.left);
        let rightCase = checkNode(tree1.right,tree2.right);
    
        return leftCase && rightCase;
    }

    return checkNode(p,q);
};
```

## 左叶子之和
* 20220420 新华科技大厦 1621 午 32℃
* 左叶子的概念：当前节点为左节点，而且该节点的左右子节点都为空
* [LeetCode题链：](https://leetcode-cn.com/problems/sum-of-left-leaves/)
```js
var sumOfLeftLeaves = function(root) {
    // 递归解法：三部曲
    // 1. 确定入参和返回值
    // 2. 确定终止条件
    // 3. 确定单层逻辑
    let leftSum = 0;
    function findLeftNode(node){
        if(node === null) return;
        // 左叶子节点的概念：当前节点不为null，而该节点的左右子节点是null
        if(node.left && node.left.left === null && node.left.right === null){ 
            console.log(node.left.val);
            leftSum += node.left.val;
        }

        if(node.right){
            findLeftNode(node.right);
        }

        if(node.left){
            findLeftNode(node.left);
        }
    }

    findLeftNode(root);
    return leftSum;
};
```
```js
// 迭代解法：利用queue队列数据结构和while遍历函数
var sumOfLeftLeaves = function(root) {
    // 迭代解法：用队列queue数据结果，依次入队列，while函数
    let queue = [],sum = 0;
    queue.push(root);
    while(queue.length){
        let curr = queue.shift();// 出队
        if(curr.left && !curr.left.left && !curr.left.right){
            sum += curr.left.val;
        }
        curr.left && queue.push(curr.left);// 入队
        curr.right && queue.push(curr.right);// 入队
    }
    return sum;
};
```