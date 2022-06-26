# 前端工程化管理工具篇

## 1. JS 包管理工具和原理分析：npm 安装机制和企业级部署私服原理

### npm 内部机制和核心原理：

1. 安装机制：Ruby 的 Gem 和 Python 的 pip 都是全局安装，但是 npm 会优先安装依赖到当前项目目录中，这样达到各个项目依赖的分离。
2. install 执行之后，首先检查并获取 npm 配置，这里的优先级是：项目级的.npmrc 文件=》用户级的.npmrc 文件=》全局级的.npmrc 文件=》npm 内置的.npmrc 文件 npm config ls -l
3. 最佳实践：同一个项目团队，应该保持 npm 版本的一致性。
4. 构建依赖树的过程：

### npm 缓存机制：

1. 官方链接：https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. 对一个依赖包的同一版本进行本地化的缓存，是当代依赖包管理工具的一个常见设计。
3. npm config get cache : 得到缓存的路径
4. npm cache clean --force
5. 缓存文件都在\_cacache 文件夹下：下面的 content-v2 是 npm 包资源；下面的 index-v5 是一些描述性的文件，其实是 content-v2 包资源的索引
6. 缓存如何被储存和利用：
   npm install 时，先下载包到缓存中，再利用[pacote](https://www.npmjs.com/package/pacote)（依赖[npm-registry-fetch](https://github.com/npm/npm-registry-fetch#npm-registry-fetch)，可以配置 cache，给固定的路径下载，根据[IETF RFC 7234](https://datatracker.ietf.org/doc/rfc7234/)生产缓存数据）把包解压到 node_module 中
7. 这里提到的缓存机制是从 npm v5 开始的。
8. 【能不能在理论内容上多走一步，也决定了技术能力能不能更上一层楼】

### npm 不完全指南：

1. [npm cli 官方文档](https://docs.npmjs.com/cli-documentation/)
2. 自定义[npm init](https://docs.npmjs.com/cli/v7/commands/npm-init):
   - 快速构建一个满足自我需求的自定义项目，调用 shell 脚本输出一个 package.json 文件，module.export 就是 package.json 的内容
   - [npm config](https://docs.npmjs.com/cli/v7/commands/npm-config)
3. 利用 npm link，高效率本地调试包的可用性
   - 在开发包目录下执行 npm link，使开发包链接到全局；
   - 在本地项目目录下执行 npm link xxx（自定义包名）
   - 从工作原理上总结：为目标模块创建软链接，将其链接到 node 模块全局安装路径：/usr/local/lib/node_modules/；为目标模块的可执行 bin 文件创建软链接，将其链接到 node 命令安装路径/usr/local/bin/。
4. npx 的作用：
   - 由 npm v5.2 引进，解决了 npm 的快速开发、快速调试，以及项目内使用全局模块的痛点。
   - npx 执行模块时会优先安装依赖，但是在安装执行依赖后会删除依赖，这样可以避免全局安装模块带来的问题。
   - [官方介绍链接](https://www.npmjs.com/package/npx)
5. npm 多源镜像以及企业级部署私服原理
   - npm 中的源（registry），其实就是一个查询服务。
   - 3 种工具搭建 npm 私服：nexus、verdaccio、cnpm。
   - eg：nexus 工作在 client 和外部 npm 之间，并通过 group repository 合并 npm 仓库以及私有仓库，这样就起到了代理转发的作用。
   - npm 配置作用优先级：
     命令行的 npm 配置 > evn 的 npm 配置 > 项目级的.npmrc 文件 > 用户级的.npmrc 文件 > 全局级的.npmrc 文件 > npm 内置的.npmrc 文件'
   - npm 镜像和安装问题：[推荐文章](https://mp.weixin.qq.com/s/2ntKGIkR3Uiy9cQfITg2NQ)
6. 依赖版本规范：[官方链接](https://semver.org/lang/zh-CN/)，x.y.z，x 是主版本号，做了不向下兼容的更新；y 是次版本号，做了向下兼容的新增功能；z 是修订号，做了向下兼容的修改更新；

### 问题：

1. a 引用 b 版本号 2.0，c 引用 b 版本号 3.0，这样 install 后，会下载 b 包 2.0 和 3.0 吗？

## 2. Yarn 的安装理念及如何破解依赖管理困境

1. Yarn 是为了解决 npm 的某些不足（npm 对于依赖的完整性和一致性保障，以及 npm 安装速度过慢等问题）

### 优势：

- 确定性：通过 yarn.lock 等机制，保证了确定性。
- 采用模块扁平安装模式：将依赖包的不同版本，按照一定策略，归结为单个版本，以避免创建多个副本造成冗余(npm 目前也有相同优化)
- 网络性能更好：Yarn 采用请求排队理念，并发连接池，同时引进安装失败时的重试机制。
- 采用缓存机制，实现了离线模式（npm 目前也有类似实现）

### 不同：

- yarn.lock 文件中子版本号不是固定的，还需要结合 package.json 来决定；
- yarn cache dir：查看缓存目录

### Yarn 安装机制和背后思想：

- 检测包（checking）：检查是否存在 npm 相关文件：package-lock.json，如果有，会提示可能导致冲突。
- 解析包（Resolving Packages）
- 获取包（Fetching Packages）
- 链接包（Linking Packages）
- 构建包（Building Packages）

### 破解依赖管理困境：

- “嵌套地狱”：安装时间长；
- window 系统可能出现删除失败的情况；
- 浪费较大的空间资源；
- npm 包的安装顺序对依赖树的影响很大，可能影响 node_modules 下的文件数量；
- yarn 的安装依赖时，**会自动执行 dedupe（npm dedupe）命令，实现扁平化的安装模式**，这是关键。

## 3. CI 环境上的 npm 优化及更多工程化问题解析

1. CI 环境上的 npm 优化
2. 合理使用 npm ci 和 npm install：npm ci 是专门为 CI 环境准备的安装命令，与 npm install 的不同之处：
   - 1. npm ci 要求项目中必须存在 package-lock.json 或 npm-shrinkwrap.json;
   - 2. npm ci 完全根据 package-lock.json 安装依赖，这可以保证整个开发团队都使用版本完全一致的依赖；同时不需要计算求解依赖满足问题、构造依赖树，所以安装过程也更快；
   - 3. npm ci 在安装时，会先删除现有的 node_modules，然后再全新安装；
   - 4. npm ci 只能一次安装整个项目所有依赖包，无法安装单个依赖包；
   - 5. 如果 package-lock.json 和 package.json 冲突，那么 npm ci 会直接报错，并非更新 lockfile；
   - 6. npm ci 永远不会改变 package.json 和 package-lock.json；
   - 7. [官方链接](https://docs.npmjs.com/cli/ci.html)
3. 使用 package-lock.json 优化依赖安装时间

### 更多工程化相关问题解析：

#### 为什么要 lockfiles，要不要提交 lockfile 到仓库？

1. pack-lock.json 文件的作用是锁定依赖安装结构，目的是保证在任意机器上执行 npm install 都会得到完全相同的 node_modules 安装结果
2. （追求极致，深挖原因，用合理的做法解决问题）
3. 推荐做法：把 package-lock.json 一起提交到代码库，不需要 ignore。但是执行 npm publish 命令，发布一个库的时候，应该忽略它而不是直接发布出去。

#### 为什么有 xxxDependencies？

1. dependencies 项目依赖：会成为线上生产环境中的代码组成部分。
2. devDependencies 开发依赖，不会被自动下载：依赖是否被打包，完全取决于项目里是否被引入了该模块。
3. peerDependencies 表示同版本依赖：
   - 1. 插件不能单独运行；
   - 2. 插件正确运行的前提是核心依赖库必须先下载安装；
   - 3. 不希望核心依赖库被重复下载；
   - 4. 插件 API 的设计必须要符合核心依赖库的插件编写规范；
   - 5. 在项目中，同一插件体系下，核心依赖库版本最好相同；
4. bundledDependencies 和 npm pack 打包命令有关：在 bundledDependencies 中指定的依赖包，必须先在 dependencies 和 devDependencies 声明过，否则在 npm pack 阶段会进行报错。
5. optionalDependencies 表示可选依赖，不建议使用。

#### 再谈版本规范--依赖库锁版本行为解析

1. create-react-app 会进行核心依赖版本检查

#### 扩展

1. [pnpm](https://zhuanlan.zhihu.com/p/352437367)：TODO

## 4. 横向对比主流构建工具，了解构建工具的设计考量

1. Browserify + Gulp=>Parcel，Webpack=>Rollup=>Vite

### 6 大重点考量环节：

1. Code Splitting：代码分割。能够导出公共模块，避免重复打包，以及在页面加载运行时，实现最合理的按需加载策略。构建工具的标配
2. Hashing：对打包资源进行版本信息映射。==》最大化地利用缓存机制。构建工具进行打包的前提就是对各个模块依赖关系进行分析，并根据依赖关系，支持开发者自行定义哈希策略（比如，Webpack 提供 hash、chunkhash、contenthash 策略）
   - 1. hash 反映了项目的构建版本，不足：即使模块内容没有变化，重新构建后会产生新的 hash 值，使得缓存命中率较低。
   - 2. chunkhash 会根据入口文件（Entry）进行依赖解析。
   - 3. contenthash 则会根据文件具体内容，生成 hash 值。
   - 4. [区别解释链接](https://medium.com/@sahilkkrazy/hash-vs-chunkhash-vs-contenthash-e94d38a32208)
3. Importing Modules：即依赖机制。兼容 ESM、CommonJS、从 node_module 引入公共包的支持。
4. Non-JavaScript Resources：是指对其他非 JavaScript 类型资源导入的支持能力。
5. Output Module Formats：导出模式要灵活，可以配置 ESM、CommonJS 等规范的内容
6. Transformations：编译、转义过程。对 JavaScript 代码的压缩，无用代码的删除。构建工具只做构建分内的事情，其他扩展能力通过插件化机制来完成。

## 5. Vite实现：从源码分析出发，构建bundleless开发工程
20220626 下午 铭科苑F6 热    
静下心来读Vite源码，发现也并不难读懂。
[官链](https://cn.vitejs.dev/guide/)
1. Vite关键点：
    - Vite基于ESM，实现了快速启动和即时模块热更新的能力。
    - Vite在服务端实现了按需编译。
    - Vite在开发环境下并没有打包和构建的过程。
2. runServer的实现：TODO
