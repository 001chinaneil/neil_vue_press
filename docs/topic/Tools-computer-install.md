# 装机攻略

20220407 新华科技大厦

- 每次新电脑配置过程都大同小异，会有一定的时间浪费，特意整理一份装机攻略

## 工作账号

1. 浏览器：Chrome，登录 Google 账号，自动同步收藏标签
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

2. NVM：优先装它，有了它也就有了 Node 和 Npm，`brew install nvm`

```js
// 把下面代码加入到.zshrc文件里面
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

3. Node：`nvm install v16.14.0`
4. NRM：`npm install nrm -g`
5. Npm && Yarn
6. Git：`brew install git`

## 命令行 iTerm

1. 官方 README 文档：https://github.com/ohmyzsh/ohmyzsh（非常好）
2. oh-my-zsh 的下载：手动下载压缩包，手动复制到根目录：[参链](https://juejin.cn/post/6844904178075058189)，设置主题：agnoster
3. 自动补全插件（zsh-autosuggestions）[官方介绍](https://github.blog/2021-09-01-improving-git-protocol-security-github/)
4. 语法高亮插件（zsh-syntax-highlighting）：
5. 跳转文件插件 (autojump)：可以在任意目录之间跳转
6. 命令语言：

- mv 移动 cp 拷贝
- open ~/.zshrc：用文本打开.zshrc 文件
- open . ：用 Finder 打开当前目录文件夹

7. ~/.zshrc oh-my-zsh 配置文件
8. 每个插件下面都有 README.md 里面有详细说明，比如 Git 插件 cat $ZSH/plugins/git/README.md
9. 快捷键：查看剪贴板历史 command+shift+h

10. 感悟总结：

- 工程的尽头是艺术设计。
- <极客精神，通过工作自己能收获或积累什么，或者对业务的思考成体系> 20221008 装机攻略更新
  参链：[iTerm2+oh-my-zsh+配色](https://juejin.cn/post/7064496372648509471) [（item2 + oh-my-zsh + solarized 配色方案）](https://www.cnblogs.com/weixuqin/p/7029177.html)

```js
// zshrc配置文件
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(zsh-autosuggestions git dotenv zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh

autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"
  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")
    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc

prompt_context() {

}

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
# export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
```

## 文件分类

1. 01work_code、
2. 02zgb_code、
3. 03zgb_docs

## 办公软件

1. 欧陆词典、
2. 滴答清单、
3. 有道云笔记
