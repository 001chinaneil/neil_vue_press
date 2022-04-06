# 二叉树系列集--进阶算法开始 todo
20220122 海淀图书馆（北区）F3 第二遍 第7节 二叉树周末总结学完了

* [LeetCode教程](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/x63shc/)

## 一、理论基础
### 种类枚举：
* 种类：满二叉树和完全二叉树。
* **满二叉树**：如果一棵二叉树只有度为0和度为2的节点，并且度为0的节点在同一层上，则这棵二叉树为满二叉树。有(2^K)-1个节点。
* **完全二叉树**：除了最底层节点没有填满外，其余节点都填完了，而且最底层也是集中在最左侧的位置。节点范围1 ~ (2^K)-1。
* 优先级队列就是一个堆，堆就是一棵完全二叉树，保证父子节点的顺序关系。
* **二叉搜索树**：是有序树，左 < 根 < 右
* **平衡二叉搜索树**AVL（Adelson-Velsky and Landis）：它是一棵空树或它的**左右两个子树的高度差不超过1**，并且左右2个子树都是平衡二叉树。

### 存储方式
* 链式存储（用指针），顺序存储（用数组）

### 二叉树的定义
```js
// JS版本
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
```

## 二、树的遍历--介绍
* 1. 前序遍历：根左右；中序遍历：左根右；后序遍历：左右根；(`前中后序依【根】定，左右孩子不变更`) 这个顺序是打印输出的顺序
* 2. 对于二叉搜索树，通过【中序遍历】可以得到一个递增的有序数列。
* 3. 当删除节点时，将按照【后序遍历】的方式进行，即先删除左子树，再删除右子树，最后再删除中节点。
* 4. 递归算法的方法论：  
    4.1 确定递归算法的参数和返回值(`确定参数和返值`)  
    4.2 确定终止条件，防止栈溢出(`终止条件要说明，防止溢出来破坏`)  
    4.3 确定单层递归逻辑(`核心逻辑是单层`)
* 5. 具体代码实现：递归解法，这个解法可以应对前序遍历、中序遍历、后序遍历，只不过是遍历算法里面的先后顺序换一下  

### 遍历方式
* 深度优先遍历：先往深走，遇到叶子节点再往回走
```js
前序遍历（递归法，迭代法）
中序遍历（递归法，迭代法）
后序遍历（递归法，迭代法）
```

* 广度优先遍历：一层一层的去遍历
```js
层次遍历（迭代法）  
```
总结：
1. 用递归的方式深度遍历比较方便，而栈是递归的一种实现结构，所以深度遍历都可以用栈而非递归的方式去实现。
2. 广度优先一般用队列的结构来实现。



### 递归版：递归三部曲
```js
var preorderTraversal = function(root){
	let result = [];
    function order(root){
        if(root == null) return;
        // 前序遍历preOrder
    	result.push(root.val);
        order(root.left);
      	order(root.right);
      
        // 中序遍历inOrder
        // order(root.left);
      	// result.push(root.val);
      	// order(root.right);
      
        // 后序遍历postOrder
        // order(root.left);
        // order(root.right);
      	// result.push(root.val);
    }
    // 利用了闭包
    order(root);
  	return result;
}
```

### 迭代版
**迭代法：前序遍历**
20220122 done
* 1. 实现一：利用栈：先进后出，所以是先把右节点压栈，再把左节点压栈。   
```js
// 前序遍历：根左右
// 利用栈：先进后出，所以是先把右节点压栈，再把左节点压栈。
// 口诀：pop出栈，先右后左的压栈
var preorderTraversal = function(root){
    let res = [];// 1. 定义返回值
    let stack = [];// 定义栈
    if(root) stack.push(root);
    while(stack.length){
        let temp = stack.pop();// 2. 出栈取值
        res.push(temp.val);
        // 3. 先右后左的压栈，这样出来的时候才是左、右
        if(temp.right) stack.push(temp.right);
      	if(temp.left) stack.push(temp.left);
    }
    return res;
}
```

**迭代法：中序遍历**
* [官方题解：](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/)  
* [「手画图解」用栈模拟中序遍历，怎么做以及为什么 | 递归与迭代：](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/shou-hua-tu-jie-yong-zhan-mo-ni-zhong-xu-bian-li-z/)  

实现一：利用栈TODO，口诀：2次左偏瘫(while循环，push(root) .left)，1次右一点；**入栈能左就左，出栈查右** 
```js
// 口诀：2次左偏瘫(while循环，push(root) .left)，1次右一点
var inorderTraversal = function(root) {
    // 利用栈：先进后出的特性
    let result = [];
    let stack = [];
    // 1. 先把左节点全部压栈，其实是把 各个中心节点和左节点入了栈
    while(root){
        stack.push(root);
        root = root.left;
    }
    // 2. 循环出栈
    while(stack.length){
        let node = stack.pop();// 出栈
        result.push(node.val);// 取值，其实是把 左节点和中心节点取了值
        root = node.right;
        // 3. 中心、左入栈，左、中心出栈取值，右(中心)、子左入栈，子左、右(中心)出栈
        while(root){
            stack.push(root);// 4. 右节点入栈啦 重点[右节点也是一定意义上的中心节点]
            root = root.left;
        }
    }
    return result;
};
```

**迭代法：后序遍历** 
```js
// 20221022
// 入参：root
// 返回值：res数组
// 后序遍历：左右中-翻转 => 中右左-出栈 => 中左右-入栈
const postOrder = function (root){
    let res = [];
    let stack = [];
    if(root){
        stack.push(root);
    }

    while(stack.length){
        let curr = stack.pop();
        res.push(curr.val);
        if(curr.left){
            stack.push(curr.left);
        }
        if(curr.right){
            stack.push(curr.right);
        }
    }

    return res.reverse();
}
```

**前中后序统一迭代法** 不好理解，TODO 二选一即可

**层序遍历：** 逐层遍历树结构
* 1. 广度优先搜索，多应用于树和图数据结构，进行遍历和搜索的算法 === 也就是用层序遍历顺序的。
* 2. 通常用队列的数据结构来帮助做广度优先搜索。
* 3. [官方题解](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-by-leetcode-solution/)  
[题解](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-bfs-by-zxh-51dl/) 看懂了，搞一个队列，里面元素[val,level]，左右入队，一个个出队，入队列时进行标记：[[val,level]]。

```js
const levelOrder = function(root) {
    // 利用队列的特点：先进先出进行实现 shift
    if(!root) return [];
    let queue = [[root,0]];// 初始化，root，第0层，最好的记忆模板
    let result = [];// 最后逐层遍历顺序化的结果
    while(queue.length){
        let [n,level] = queue.shift();// 取出第一个数组，技巧写法
        if(!result[level]){
            result[level] = [n.val];// 你要没有，咱就给你新增
        }else {
            result[level].push(n.val);// 你要是有，咱就给你push
        }

        // 给队列新增元素
        if(n.left) queue.push([n.left,level+1]);
        if(n.right) queue.push([n.right,level+1]);
    }

    return result;
};
```

```js
// 第二种解法
// 20220123
// 广度优先，层序遍历
// 入参：root
// 返回值：二维数组，里面每个数组元素是每层的节点
// 核心逻辑：层与层的区别，记录当前层次的节点个数，去进行遍历；队列数据结构
const levelOrder = function (root){
    // 临界情况
    if(root === null){
        return [];
    }
    let res = [],queue = [];
    queue.push(root);

    // 循环队列
    while(queue.length){
        let currLevelLength = queue.length;
        // 当前层级节点的容器
        let currLevelArr = [];
        // 当前层数有多少个节点，就循环遍历几次
        for(let i = 0;i < currLevelLength;i++){
            let curr = queue.shift();
            currLevelArr.push(curr.val);
            // 把当前节点的左右子树放入队列里面去
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
        res.push(currLevelArr);
    }

    return res;
}
```

## 三、运用递归解决问题
递归是解决树相关问题的最常用、最有效的方法之一
* [官方链接](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xefb4e/) 真是好例子，可以二刷总结，20220122二刷完成
* 1. `关注每个单节点的问题`，通过函数调用来解决其他节点的问题。        
* 2. 两种方式：《自上向下》、《自下向上》
* 3. 《自上向下》：如果可以从自身出发得到答案，并可以把有价值的参数传给子节点
* 4. 《自下向上》：如果已知子节点的答案，可以得到自身的答案，eg: 快排、斐波那契数列递归版

### 实际问题1：求二叉树的最大深度
* 递归和迭代算是一种算法思想，栈和队列算是一种特殊的数据结构。

方法1：深度优先搜索：递归
```js
var maxDep = function(root){
	if(root == null) return;
    let left = maxDep(root.left) + 1;
  	let right = maxDep(root.right) + 1;
    return Math.max(left,right);
}
```

方法2：广度优先搜索：迭代  
[参链](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/dai-ma-sui-xiang-lu-qiu-shu-de-zui-da-sh-f988/)
* 总结：层序遍历中的while中的内容是遍历的变化部分，根据不同的目的，进行不同的变化。比如层级打印、最大深度。

### 实际问题2：验证对称二叉树
* [参链](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoxzgv/)
* 思考：递归思想太牛逼了！！

方法1：递归算法：时间复杂度O(n)，空间复杂度O(1)
```js
var isSymmetric = function(root){
	if(root == null) return true;
  	function isMirror(r1,r2){
        // 针对三种case 进行判断返回
    	if(r1 == null && r2 == null) return true;
        if(r1 == null || r2 == null) return false;
        
      	return (r1.val == r2.val) &&
				isMirror(r1.left,r2.right) &&
          		isMirror(r1.right,r2.left);
    }
  
  	return isMirror(root.left,root.right);
}
```

方法2：迭代算法：设计一个队列，两两入队，两两出队，进行比较，[入队逻辑是关键]
* 总结：队列的数据结构太牛逼了！！ 
```js
// arr.push(a1,a2,a3) => arr = [a1,a2,a3] push可以多元素
var isSymmetric = function(root) {
    if(root == null) return true;
    // 迭代思想：设计一个队列，两两入队，两两出队，两两比较
    let queue = [root.left,root.right];
    while(queue.length>0){
        let r1 = queue.shift();
        let r2 = queue.shift();
        // 比较逻辑
        if(r1 == null && r2 == null){
            continue;
        }
        if(r1 == null || r2 == null){
            return false;
        }
        if(r1.val != r2.val){
            return false;
        }
        // 两两入队 如此写法提升代码易读性
        queue.push(r1.left,r2.right);
        queue.push(r1.right,r2.left);
    }

    // 如果上边逻辑全通过，说明是对称的
    return true;
};
```

### 实际问题3：路径总和
* 总结：`return关键字，只会退出当前函数`，不会全部推出再上一层的函数。

**递归**
```js
var hasPathSum = function(root, targetSum) {
    if(root == null) return false;
    if(root.left == null && root.right == null && root.val == targetSum){
        return true;
    }
    // 利用或者的特性，遇到true就不向后执行了
    return hasPathSum(root.left,targetSum-root.val) || 
           hasPathSum(root.right,targetSum-root.val) || 
           false;
};
```

**迭代** TODO

## 四、经典实战
### 翻转二叉树
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
### 对称二叉树
20220406 新华科技大厦
* 利用递归思想、队列数据结构进行迭代判断、栈数据结构进行迭代判断
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


