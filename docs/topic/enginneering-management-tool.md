# 前端工程化管理工具篇
## 1. JS包管理工具和原理分析：npm安装机制和企业级部署私服原理
### npm内部机制和核心原理：
1. 安装机制：Ruby的Gem和Python的pip都是全局安装，但是npm会优先安装依赖到当前项目目录中，这样达到各个项目依赖的分离。
2. install执行之后，首先检查并获取npm配置，这里的优先级是：项目级的.npmrc文件=》用户级的.npmrc文件=》全局级的.npmrc文件=》npm内置的.npmrc文件 npm config ls -l
3. 最佳实践：同一个项目团队，应该保持npm版本的一致性。
4. 构建依赖树的过程：
### npm缓存机制：
1. 官方链接：https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. 对一个依赖包的同一版本进行本地化的缓存，是当代依赖包管理工具的一个常见设计。
3. npm config get cache : 得到缓存的路径
4. npm cache clean --force
5. 缓存文件都在_cacache文件夹下：下面的content-v2是npm包资源；下面的index-v5是一些描述性的文件，其实是content-v2包资源的索引
6. 缓存如何被储存和利用：
    npm install时，先下载包到缓存中，再利用[pacote](https://www.npmjs.com/package/pacote)（依赖[npm-registry-fetch](https://github.com/npm/npm-registry-fetch#npm-registry-fetch)，可以配置cache，给固定的路径下载，根据[IETF RFC 7234](https://datatracker.ietf.org/doc/rfc7234/)生产缓存数据）把包解压到node_module中
7. 这里提到的缓存机制是从npm v5开始的。
8. 【能不能在理论内容上多走一步，也决定了技术能力能不能更上一层楼】
### npm不完全指南：
1. [npm cli官方文档](https://docs.npmjs.com/cli-documentation/)
2. 自定义[npm init](https://docs.npmjs.com/cli/v7/commands/npm-init):
    - 快速构建一个满足自我需求的自定义项目，调用shell脚本输出一个package.json文件，module.export就是package.json的内容
    - [npm config](https://docs.npmjs.com/cli/v7/commands/npm-config)
3. 利用npm link，高效率本地调试包的可用性
    - 在开发包目录下执行npm link，使开发包链接到全局；
    - 在本地项目目录下执行npm link xxx（自定义包名）
    - 从工作原理上总结：为目标模块创建软链接，将其链接到node模块全局安装路径：/usr/local/lib/node_modules/；为目标模块的可执行bin文件创建软链接，将其链接到node命令安装路径/usr/local/bin/。
4. npx的作用：
    - 由npm v5.2引进，解决了npm的快速开发、快速调试，以及项目内使用全局模块的痛点。
    - npx执行模块时会优先安装依赖，但是在安装执行依赖后会删除依赖，这样可以避免全局安装模块带来的问题。
    - [官方介绍链接](https://www.npmjs.com/package/npx)
5. npm多源镜像以及企业级部署私服原理
    - npm中的源（registry），其实就是一个查询服务。
    - 3种工具搭建npm私服：nexus、verdaccio、cnpm。
    - eg：nexus 工作在 client 和外部 npm 之间，并通过 group repository 合并 npm 仓库以及私有仓库，这样就起到了代理转发的作用。
    - npm配置作用优先级：
        命令行的npm配置 > evn的npm配置 > 项目级的.npmrc文件  > 用户级的.npmrc文件 > 全局级的.npmrc文件 > npm内置的.npmrc文件'
    - npm镜像和安装问题：[推荐文章](https://mp.weixin.qq.com/s/2ntKGIkR3Uiy9cQfITg2NQ)
6. 依赖版本规范：[官方链接](https://semver.org/lang/zh-CN/)，x.y.z，x是主版本号，做了不向下兼容的更新；y是次版本号，做了向下兼容的新增功能；z是修订号，做了向下兼容的修改更新；
### 问题：
1. a引用b版本号2.0，c引用b版本号3.0，这样install后，会下载b包2.0和3.0吗？
## 02 todo
## 03 todo
## 04 todo