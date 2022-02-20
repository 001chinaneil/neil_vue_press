# React
[参链1：前端面试必考题：React Hooks 原理剖析](https://juejin.cn/post/6844904205371588615)  
[参链2：React Fiber原理解析](https://juejin.cn/post/6844904202267787277)

## 1. React Fiber原理解析
参链2
1. 从stack reconciliation重构成fiber reconciliation。
2. 原因：V15.X会出现掉帧现象，因为JS运算、页面布局、页面绘制都会阻塞主线程。
3. 解决：分片任务，fiber自己实现了组件调用栈，以链表的形式遍历组件树，利用了浏览器**requestIdleCallback**的API
4. 总结：通过Fiber架构，**让自己的Reconciliation过程变得可被中断，适时地让出CPU执行权，可以让浏览器及时地响应用户的交互**

## 2. Hooks原理剖析
参链1
1. 从类组件转向函数组件
2. useState和useReducer都是关于值的状态和更新，本质上没有区别。useState是useReducer的简化版
3. 保存状态：Hooks和类组件
    ```js
    1. 两者的状态值都是挂载在组件实例对象FiberNode的memoizedState属性中
    2. 保存的数据结构完全不同：类组件就是直接保存到memoizedState中，而Hooks是用链表的数据结构保存的，
    实际保存是的链表的头指针。
    ```
4. hooks如何更新状态：异步更新，创建一条修改记录，在对应Hook的queue属性挂载的**链表上新增一个节点**。
5. useEffect：
    ```js
    1. 保存方式是以链表的形式挂载在FiberNode.updateQueue中
    2. 执行阶段function commitHookEffectList(){}，
        2.1 遍历链表
        2.2 如果遇到Effect.tag被标记上NoHookEffect的节点则跳过。
        2.3 如果Effect.destroy为函数类型，则需要执行该清除副作用的函数
        2.4 执行Effect.create，并将执行结果保存到Effect.destroy
        （如果开发者没有配置return，那得到的自然是undefined了，也就是说，开发者认为对于当前 useEffect 代码段，不存在需要清除的副作用）；
        注意由于闭包的缘故，Effect.destroy实际上可以访问到本次Effect.create函数作用域内的变量。
    3. 是先清除上一轮的副作用，然后再执行本轮的 effect 的。
    ```

