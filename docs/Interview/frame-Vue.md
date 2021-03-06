# Vue

## 一、响应式原理
* 口诀：订阅(Dep.addSub)=》发布(Dep.notify)；defineProperty数据代理，Dep对象收集依赖、Watcher对象更新视图；
1. 从 new Vue 开始，首先通过 get、set 监听 Data 中的数据变化，同时创建 Dep 用来搜集使用该 Data 的 Watcher。
2. 编译模板，创建 Watcher，并将 Dep.target 标识为当前 Watcher。
3. **编译模板时**，如果使用到了 Data 中的数据，就会触发 Data 的 get 方法，然后**调用 Dep.addSub 将 Watcher 搜集起来**。
4. **数据更新时**，会触发 Data 的 set 方法，然后**调用 Dep.notify 通知所有使用到该 Data 的 Watcher 去更新 DOM**。  
tips: **Dep 对象用于依赖收集**，它实现了一个发布订阅模式，完成了数据 Data 和渲染视图 Watcher 的订阅/发布。

参链：  
[深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)

## 二、异步更新或者nextTick原理
* 1. Data 对象：Vue模板的 data 方法中返回的对象。
* 2. Dep 对象：每一个 Data 属性都会创建一个 Dep，用来搜集所有使用到这个 Data 的 Watcher 对象。
* 3. Watcher 对象：主要用于渲染 DOM。

### 更新过程
* 何时可以获取更新后的Dom：Vue的nextTick()回调中。
* Vue在利用Watcher更新视图时，并不是直接更新，而是把Watcher对象放到队列里，具体更新视图的方法**flushSchedulerQueue**，放入nextTick里面进行调用。
* this.$nextTick()其实就是源码中的nextTick()，只是Vue.prototype.$nextTick = function(){ return nextTick(fn,this) }，**本质是对JavaScript执行原理EventLoop的一种应用**。
* 由于 nextTick 只是单纯通过 Promise 、SetTimeout 等方法模拟的**异步任务**，
所以也可以手动执行一个异步任务，来实现和 this.$nextTick 相同的效果。
* 为什么要异步进行回调？是为了提高性能吗？防止卡顿？是  

* 口诀：Watcher入队列，异步任务nextTick
```js
1. 修改 Vue 中的 Data 时，就会触发所有和这个 Data 相关的 Watcher 进行更新。
2. 首先，会将所有的 Watcher 加入队列 Queue（原因是：避免重复计算和不必要的DOM操作）。
3. 然后，调用 nextTick 方法，执行异步任务。
4. 在异步任务的回调中，对 Queue 中的 Watcher 进行排序，然后执行对应的 DOM 更新。
```
参链：
[一次弄懂 Vue2 和 Vue3 的 nextTick 实现原理](https://juejin.cn/post/7021688091513454622)

## 三、diff算法
* 源码位置：node_modules/vue/src/core/vdom/patch.js
1. 概念：虚拟DOM是为了解决浏览器性能问题而出现的，比如JS计算比DOM渲染要快、重排重绘、移动端参数不同
2. 流程：(模拟Dom、对比新旧、差异渲染)  
    2.1 用JavaScript模拟Dom树，并渲染Dom树；  
    2.2 比较新旧Dom对象，得到差异对象；  
    2.3 把差异对象引用到渲染Dom树；
3. diff算法策略：深度优先，同层比较  
4. diff算法比较细节：  
    总得来说两个节点的比较策略就是：先看看双方是否都有孩子，如果都有则比较孩子；如果新节点有，旧节点没有孩子则是一种处理；旧节点有，新节点没有孩子是另一种处理，都没有则又是一种处理。  
5. Key就是为了更高效的更新新旧差异虚拟Dom

参链：  
[[Vue的diff算法详解和key作用(较详细)]](https://blog.csdn.net/qq_39414417/article/details/104763824)

## 四、双向绑定 
* 视图更新数据，数据更新视图。 
单项绑定过程(自己总结的)：  
1. 变量变了，由set发通知给watcher；  
2. watcher告知虚拟DOM树，叫它该比较了，我这有值变了；  
3. 于是生成新的dom树进行一个比较，然后逐级分类比较，比较出哪个元素发生变化就把这个元素更新到页面，这就是单项数据绑定原理。
4. v-model原理其实就是给input事件绑定oninput事件，就会立刻调用底层对象对应的setter方法，改变data里的属性的值，从而实现双向数据绑定。

参链：  
[用自己的话总结vue双向绑定数据原理](https://juejin.cn/post/6844904015516401678)

## 五、Rouer机制
1. 核心：更新视图，但不重新请求页面；浏览器：hash\history，Node：abstract
2. hashHistory

```js
$router.push() //调用方法
 
HashHistory.push() //根据hash模式调用,设置hash并添加到浏览器历史记录（添加到栈顶）（window.location.hash= XXX）
History.transitionTo() //监测更新，更新则调用History.updateRoute()
History.updateRoute() //更新路由
 
{app._route= route} //替换当前app路由
vm.render() //更新视图
```
3. **利用location.hash属性读取**，每次变化，都会在浏览器历史栈里面新增记录，却并不会给后端发请求。

4. 利用Vue.mixin()方法来实现混入，影响注册的所有组件，**beforeCreate钩子**之后通过 **Vue.utils.defineReactive()** 定义响应式的_router属性

参链：  
[弄懂vue-router的实现原理](https://blog.csdn.net/qq_27674439/article/details/99821474)  
[【源码拾遗】从vue-router看前端路由的两种实现](https://zhuanlan.zhihu.com/p/27588422)

## 六、Vuex原理
1. 利用Vue的插件机制，Vue.use()进行install，applyMixin()
2. Vuex的state状态是响应式，是借助vue的data是响应式，将state存入vue实例组件的data中；Vuex的getters则是借助vue的计算属性computed实现数据实时监听。  

总结：浏览器路由底层的支撑，此有了应用侧繁花似锦的呈现。
参链：[Vuex从使用到原理解析](https://zhuanlan.zhihu.com/p/78981485)  

## 七、Vue2和Vue3的差异
1. 速度更快：
    ```js
    1.1、重写了虚拟Dom实现
    1.2、编译模板的优化
    1.3、更高效的组件初始化
    1.4、undate性能提高1.3~2倍
    1.5、SSR速度提高了2~3倍
    ```
2. 体积减小
    ```js
    通过webpack的tree-shaking功能，可以将无用模块“剪辑”，仅打包需要的
    ```
3. 更易维护
    ```js
    compositon Api
    
    ```
4. 更好的Typescript支持
5. 编译器重写
6. 更接近原生
    ```js
    可以自定义渲染 API，createRanderer
    ```
7. 更易使用 
    ```js
    响应式 Api 暴露出来，observable
    轻松识别组件重新渲染原因
    ```

参链：
[面试官：Vue3有了解过吗？能说说跟Vue2的区别吗？](https://blog.csdn.net/weixin_44475093/article/details/112386778)

## 八、new Vue()发生了什么
20220219 海淀图书馆（北区）F3  
参链：[new Vue到底发生了什么（2.0）](https://juejin.cn/post/6844903874612953096)
1. Vue实例
2. 初始化和挂载：初始化生命周期、事件、 props、 methods、 data、 computed 与 watch 等，最重要的是通过 Object.defineProperty 设置 setter 与 getter 函数，用来实现「响应式」以及「依赖收集」。
3. 编译：compile编译可以分成 parse、optimize 与 generate 三个阶段，最终需要得到 render function。
4. 响应式
5. Virtual DOM：render function 会被转化成 VNode 节点。
6. 更新视图

## 参链
1. [12道vue高频原理面试题,你能答出几道?](https://zhuanlan.zhihu.com/p/101330697)