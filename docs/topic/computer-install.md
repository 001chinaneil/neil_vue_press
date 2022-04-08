# 装机攻略
20220407 新华科技大厦
* 每次新电脑配置过程都大同小异，会有一定的时间浪费，特意整理一份装机攻略
## 工作账号
1. 浏览器：Chrome，登录Google账号，自动同步收藏标签
2. 编辑器：VsCode，一些常用插件
    1. Git History Diff、
    2. ESLint、
    3. Chiness(Simplified) Language Pack for VSCode、
    4. Prettier-Code formatter
3. 在线文档：Wiki
4. 代码仓库：Github
5. 项目管理：Jira
6. 公司邮箱

## 开发环境
1. Brew：[官链](https://brew.sh/index_zh-cn) [优质安装贴](https://zhuanlan.zhihu.com/p/111014448)
```js
1. 软件安装的目标：/opt/homebrew/Cellar
2. 查看某软件的安装目标：brew info xxx(软件名：nvm)
```
2. NVM：优先装它，有了它也就有了Node和Npm，`brew install nvm`
```js
// 把下面代码加入到.zshrc文件里面
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```
3. Node：`nvm install v16.14.0`
4. NRM：`npm install nrm -g`
5. Npm && Yarn
6. Git：`brew install git`

## 命令行iTerm
1. 官方README文档：https://github.com/ohmyzsh/ohmyzsh（非常好）
2. 下载失败：Error: git clone of oh-my-zsh repo failed
    手动下载压缩包，手动复制到根目录：https://juejin.cn/post/6844904178075058189
3. 自动补全插件下载失败：官方介绍：https://github.blog/2021-09-01-improving-git-protocol-security-github/ 找到解决方案
    git仓库代码有2种下载方式：
        git clone 通过https或ssh Get！
4. 语法高亮插件
5. 命令语言：mv移动 cp拷贝
6. ~/.zshrc oh-my-zsh配置文件

## 文件分类
1. 01work_code、
2. 02zgb_code、
3. 03zgb_doc

## 办公软件
1. 欧陆词典、
2. 滴答清单、
3. 有道云笔记