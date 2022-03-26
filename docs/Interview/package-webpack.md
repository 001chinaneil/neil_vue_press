# Webpack
20220220 海淀图书馆（北区）F3 东侧靠窗 二刷

## 核心理念
* 1. 编译打包

## 核心手段
* 1. loader(转换)、plugin(除转换外更强悍的能力)、入口entry(依赖的开始)、输出output
* 2. Webpack5中会启用多进程构建，速度会更快；不再支持Node模块，专注Web。(2020-10-10已发布) [官链](https://webpack.docschina.org/blog/2020-10-10-webpack-5-release)

## loader
* 1. 本质上是一个function，入口参数source
* 2. 实践：TODO
* 参链：[webpack实战之手写一个简易的loader和plugin](https://juejin.cn/post/6992738808517099528)

## plugin
* 1. 本质上是一个Class，监听执行流程中的钩子函数，更好的控制输出，比如打包优化、资源管理、注入环境变量等；
* 2. webpack是通过Tapable进行事件流管理；

## 运行原理
* 口诀：6步（**读配置、生成compiler；读entries、遍历入口；loader编译、解析Ast；重复编译、重复解，依赖关系做优化；最终打包入IIFE[自执行函数]**）
* 1. 读取 webpack.config.js 配置文件，生成 compiler 实例，并把 compiler 实例注入 plugin 中的 apply 方法中。
* 2. 读取配置的 Entries，递归遍历所有的入口文件。
* 3. 对入口文件进行编译，开始 compilation 过程，使用 loader 对文件内容编译，再将编译好的文件内容解析成 AST 静态语法树。
* 4. 递归依赖的模块，重复第 3 步，生成 AST 语法树，在 AST 语法树中可以分析到模块之间的依赖关系，对应做出优化。
* 5. 将所有模块中的 require 语法替换成__webpack_require__来模拟模块化操作。
* 6. 最后把所有的模块打包进一个自执行函数（IIFE）中

## 实践&调优
* 口诀：**从loader、plugin入手、以时间和空间为纬度，结合业务诉求进行优化。** (思考：webpack、请求层、下载层、渲染层)
* 1. optimization.splitChunks：拆分代码 => 并行思维
* 2. Happypack：可以将loader处理成并行，更好的利用系统资源 => 并行思维
* 3. DllPlugin：可以将特定类库提前打包然后引入 => 分类思维
* 4. include、alias、thread-loader(转存到 worker pool 中)、cache-loader  
     核心优化思路：**减小检索依赖、打包的范围 => 时间纬度**  
     参链：[webpack使用优化](https://yhlben.com/blog/devops-webpack.html) 推荐
* 5. 路由懒加载 [官链](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html) 把组件按组分块
* 6. mode的noParse属性，可以设置不必要的解析，比如lodash => 时间纬度
* 7. 导出打包的统计文件，使用工具进行分析 webpack --profile --json > stat.json
* 8. 开发环境的关闭注释：options.output.pathinfo => 空间纬度
* 9. 生产环境用**tree shaking**，只打包用到的模块，删除没用的模块 => 空间纬度

* 参链：[webpack解惑：多入口文件打包策略：吕大豹](https://www.cnblogs.com/lvdabao/p/5944420.html)  
原则：
1. 选择合适的打包粒度，生成的单文件大小不要超过500KB
2. 充分利用浏览器的并发请求，同时保证并发数不超过6
3. 尽可能让浏览器命中304，频繁改动的业务代码不要与公共代码打包
4. 避免加载太多用不到的代码，层级较深的页面进行异步加载

选择的打包策略如下：
1. 第三方库如vue、jquery、bootstrap打包为一个文件
2. 公共组件如弹窗、菜单等打包为一个文件
3. 工具类、项目通用基类打包为一个文件
4. 各个功能模块打包出自己的入口文件
5. 各功能模块作用一个SPA，子页面进行异步加载：根据前端路由动态加载子页面vue-router很容易实现

* 参链：[在淘宝优化了一个大型项目，分享一些干货（Webpack，SplitChunk代码实例，图文结合）](https://juejin.cn/post/6844904183917871117) 二刷todo

## 面试相关
### css-loader和style-loader的区别
* 1. css-loader加载.css文件
* 2. style-loader把css-loader内部文件注入的HTML中

## 复盘总结
* 1. 研发人员更像是一个**设计师**，设计系统的架构、框架的架构，**让问题可以优雅的被解决**，让业务有了秩序。[查看WebPack运行原理有感]
* 2. 做一个有梦想的人，让家人、公司、资源围绕着自己转和集中。
* 3. 像文件夹一样，**向下拆解子文件夹**，一直到当前的困惑或问题；像文件夹一样，**向上寻找父文件夹**，一直到当前问题的大类为止；

