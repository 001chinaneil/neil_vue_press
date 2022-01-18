# 二叉树系列集--进阶算法开始 todo
* [LeetCode教程](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/x63shc/)

## 一、树的遍历--介绍
* 1. 前序遍历：根左右；中序遍历：左根右；后序遍历：左右根；(`前中后序依【根】定，左右孩子不变更`) 这个顺序是打印输出的顺序
* 2. 对于二叉搜索树，通过【中序遍历】可以得到一个递增的有序数列。
* 3. 当删除节点时，将按照【后序遍历】的方式进行，即先删除左子树，再删除右子树，最后再删除节点。
* 4. 递归算法的方法论：  
    4.1 确定递归算法的参数和返回值(`确定参数和返值`)  
    4.2 确定终止条件，防止栈溢出(`终止条件要说明，防止溢出来破坏`)  
    4.3 确定单层递归逻辑(`核心逻辑是单层`)
* 5. 具体代码实现：递归解法，这个解法可以应对前序遍历、中序遍历、后序遍历，只不过是遍历算法里面的先后顺序换一下  

**递归版：递归三部曲**
```js
var preorderTraversal = function(root){
	let result = [];
    function order(root){
        if(root == null) return;
        // 先序遍历preOrder
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
    order(root);
  	return result;
}
```

**其他算法的实现：前序遍历**
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

**其他算法的实现：中序遍历**
* [参链1：](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/)  [参链2：](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/shou-hua-tu-jie-yong-zhan-mo-ni-zhong-xu-bian-li-z/)  

实现一：利用栈TODO，口诀：2次左偏瘫(while循环，push(root) .left)，1次右一点  
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

实现二：Morris算法TODO  

**其他算法的实现：后序遍历** TODO

**层序遍历：**逐层遍历树结构
* 1. 广度优先搜索，多应用于树和图数据结构，进行遍历和搜索的算法 === 也就是用层序遍历顺序的。
* 2. 通常用队列的数据结构来帮助做广度优先搜索。
* 3. [官方题解](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-by-leetcode-solution/)  
[题解](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-bfs-by-zxh-51dl/) 看懂了，搞一个队列，里面元素[val,level]，左右入队，一个个出队。

```js
var levelOrder = function(root) {
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

## 二、运用递归解决问题：递归是解决树相关问题的最常用、最有效的方法之一
* [官方链接](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xefb4e/) 真是好例子，可以二刷总结
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

方法3：实际问题3：路径总和
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

