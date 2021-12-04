# Git todo

* 从锤子笔记迁移而来。20211024晚

1.优势：版本控制，协同合作。
2.渊源：由创建Linux的Linus，使用C语言编写了git版本控制系统。
3.SVN等集中式版本控制系统需要联网，必须有“中央服务器”；Git不需要联网，在局域网内可以互推送版本，大多数也会有“中央服务器”。
4.安装Git: 
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
5.创建版本库：
新建目录：$ mkdir learngit
查看当前目录：pwd
通过git init命令把这个目录变成Git可以管理的仓库
用ls -ah可以看到.git文件，它是用来记录git仓库的。
版本控制系统，只能跟踪文本文件的改动，比如TXT文件，网页，所有的程序代码等等；图片、视频二进制文件只能知道大小的变化，微软的Word文件也是二进制格式，不要用windows自带记事本编辑程序文件。
readme.txt 放到仓库目录下
```js
git add .
git commit -m ""
```

小结
初始化一个Git仓库，使用git init命令。
添加文件到Git仓库，分两步：
第一步，使用命令**git add 文件名称**，注意，可反复多次使用，添加多个文件；
第二步，使用命令**git commit -m ""**完成。

6.时光机穿梭：
小结
要随时掌握工作区的状态，使用git status命令。
如果git status告诉你有文件被修改过，用git diff 【在add之前使用】。
git diff 是工作区和 中间区比较，git diff --cached是中间区和仓库比较。
Untracked files 未跟踪文件

6.1版本回退
git log 查看历史记录
git log --pretty=oneline  用简洁的方式查看历史记录
用HEAD表示当前版本 上个版本就是HEAD^ 上上个版本就是HEAD^^  依次类推
【git reflog用来记录你的每一次命令：】所以可以穿越过来，穿越到现在。
回到以前的某个版本后，想再回来 $ git reset --hard 3628164
Git 回退版本非常快的原因【因为Git在内部有个指向当前版本的HEAD指针】
英文状态下，按q退出git log。

6.2工作区和暂存区
【理清系统顺序，明确核心概念，最后记死命令】
工作区（Working Directory）—— 版本库（Repository）【暂存区stage,master分支，指针HEAD】
版本库在工作区的一个隐藏目录里 .git
add是把所有修改放到了暂存区，commit才把暂存区里的所有文件提交到当前分支。
6.3管理修改
6.4撤销修改
直接丢弃工作区的修改时，用命令git checkout -- file 【--后面有空格,前提是该文件已经被跟踪，如果是新增文件就不行了】
(想丢弃全部修改文件怎么办？) git checkout -- .
添加到了暂存区时，想丢弃修改 命令git reset HEAD file
【三种状态之间的切换】 working stage repository
6.5删除文件
rm file.name
$ git checkout -- test.txt
其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。
【如果新增文件一次都没有commit到版本库，那么git checkout -- file 是不起作用的】
【纵向的是git log版本历史的回退，横向的是三种状态的回退】

git reset --hard commitid    git log、gitreflog
rm file.name    git checkout -- file    git reset HEAD file  
7远程仓库
杀手级功能--远程仓库，其实在一台电脑上是可以克隆多个版本库的。
本地仓库和github远程仓库是通过SSH加密传输的
创建SSH key:  $ ssh-keygen -t rsa -C "youremail@example.com"
可以自己在自己的服务器上搭建git服务器，很简单，公司内部开发必备。
Vim file.name 是打开某个文件
【测试：ssh git@github.com】
【①Github远程仓库添加公钥后，只是识别这台电脑了，② git remote add origin git@github.com:001chinaneil/02githubStudy.git  (这是仓库建立了链接)
在远程新建一个仓库，并在本地执行上述代码，然后$ git push -u origin master
这才完成了全部连接操作。默认第一个分支是master分支。在github新建一个仓库后，会有提示后续操作】
如果本地仓库已经有提交的记录，而远程仓库也有文件，在建立连接之后，需要使用
git pull --rebase origin master 【把远程仓库文件和本地仓库文件进行合并】
（待梳理）仓库下各分支与远程各分支的一一对应关系的建立
（待梳理）不在网页远程库，而是在本地命令行新建个仓库的方法，新建分支
[新方式]：【本地新建好仓库后，远程新建仓库，什么文件也不建，会有引导的，这样
git remote add origin git@github.com:001chinaneil/07nuxt_demo.git
git push -u origin master
就OK了。】
7.1添加远程库
7.2从远程库克隆
git clone git@github.com:001chinaneil/02gitskills.git
从远程克隆仓库会把文件目录都克隆出来的，并自动在本地初始化仓库。
8.分支管理
Git的分支就像是平行的宇宙，互相不影响的。创建，切换，删除都很快。
8.1创建与合并分支
HEAD指向分支（master），分支（master）指向提交。
创建并切换分支：git checkout -b 分支.name  [== git branch 分支.name + git checkout 分支.name]
git merge 分支.name 用于合并指定分支到当前分支。
删除分支：git branch -d 分支.name
8.2解决冲突
以下命令可以查看分支合并情况
$ git log --graph --pretty=oneline --abbrev-commit
8.3分支管理策略
master充当发布分支，不在上面干活儿，在其他分支开发。
8.4Bug分支：
Git提供了“储藏”功能，git stash把当前工作区储存起来；
git stash list 查看储存的列表；
恢复工作区：
方法一：git stash apply 恢复后，stash内容并不删除，还需git stash drop来删除
方法二：git stash pop 恢复并删除了stash内容
（恢复并删除不是最近的一个stash，是 git stash pop stash@{2}吗？
多次stash后，用git stash apply stash@{0} 来恢复指定的stash。
【使用stash功能首页该文件要在被跟踪的前提下，即至少一次的add后；在add后，commit前就可以使用stash功能；git stash list列表里按stash时间线倒排序，0是最近的一次stash。】
实验：在1分支stash，那么在2分支stash pop会把暂存的释放出来吗？会，会把1分支的状态全部带到2分支里面去，也就是说stash功能不分分支的。
8.5Feature分支
开发新功能最好新建一个分支，然后合并到主分支上，删除一个没有被合并的分支，需要使用强制删除 git branch -D 分支.name
8.6多人协作
查看远程库信息，使用git remote -v；
本地新建的分支如果不推送到远程，对其他人就是不可见的；
从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；
在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；（如果远程没有这个分支呢？这个命令会创建吗？）
建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；
从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。
实验：在1分支本地可以推送代码到2分支远程吗？
1）在远程仓库新建分支？
可以在远程库里面可视化手动新建分支，或者在本地git checkout -b 新分支.name ，并git push origin 新分支.name，这样远程仓库就多了一个新分支
2）一旦本地分支和远程某分支建立连接关系，本地分支的修改是不能push到其他远程分支去的。同理，pull也不会。本地当前在哪个分支就会把远程哪个对应的分支pull下来，其他的分支不会pull下来。
（待梳理）本地 git pull 会把其他人新建的分支pull下来是怎么回事儿？
9.标签管理
Tag就是一个有意义的名字，它和某个commit绑定在一起。
9.1创建标签
1）切换到需要打标签的分支上：$ git tag v1.0
2）创建带有说明的标签：$ git tag -a v0.1 -m "version 0.1 released" 3628164  -a代表版本号，-m代表说明文字
标签默认是打在最近一次commit上的，如果想打在以前的某个commit上：$ git tag v0.9 6224937
3）查看所有标签：$ git tag
git tag是按字母顺序排列，而不是按时间顺序排列。
4）用**git show 标签名称**查看标签信息。
(没理解)**git tag -s 标签名称 -m "blablabla..."**可以用PGP签名标签。
9.2操作标签
1）推送标签到远程：git push origin v0.1  一次性推送所有标签：git push origin --tags
2）删除本地标签：git tag -d v0.1
3）删除远程标签：先删除本地标签，在删除远程标签：git push origin :refs/tags/v0.1
10使用GitHub
参与开源项目：
1）到开源项目主页，fork
2）从自己的仓库下克隆项目
3）自己本地修改，提交，然后向开源项目发起一个pull request。一旦通过，自己的修改就被开源项目使用了。
fork后是在远程新建了一个仓库，自己clone也是在本地新建一个仓库。
（疑问）在自己开发期间，别人的提交代码通过了，自己怎么获取最新的代码。
11使用码云
查看远程库信息：git remote -v 
删除已关联的名为origin的远程库：git remote rm origin
本地连接远程库：git remote add origin git@gitee.com:liaoxuefeng/learngit.git
(问题)使用码云过程中，在本地编写的汉字，上传后，看到的是乱码。
实现：一个本地库同时同步两个远程仓库 [一对多的关系]
方案：git默认给远程起的名称是origin，如果同步两个就要用不同的远程名称来区分。
第一步：先删除对远程库的连接 git remote rm origin
第二步：用不同的远程库名字来指定不同的远程仓库
git remote add github git@github.com:001chinaneil/02githubStudy
git remote add gitee git@gitee.com:zhangguobiao/learngitee
第三步：使用 git push github master   ;    git push gitee master
(疑问)一对多的关系不用分支匹配连接吗？gitee起码没用到
总结：新建仓库，新建分支 仓库底下是分支
12自定义Git
让Git显示颜色：git config --global color.ur true
[代码就是某些目录下的一些文件，用PHP路由连接起来，再放到服务器上，注册个域名，把IP和命名绑定号，然后大家就可以全网观看了]
12.1忽略特殊文件
1）新建.gitignore文件
2）某文件被忽略，想放到git中:  **git add -f file.name**
3）查找gitignore的问题：git check-gitignore -v file.name
4）touch .gitignore 在命令行里新建.gitignore文件
5）git status是检验文件是否被忽略的标准。
12.2配置别名
git config --global alias.st status (用st代表status)
当前仓库配置文件放在了 .git/config中
打开文件：cat .git/config
（待梳理）当前用户（全局配置文件） 在主目录的 .gitconfig文件下（并没有打开全局配置项）
12.3搭建Git服务器

(复习)git stash使用：http://www.cnblogs.com/tocy/p/git-stash-reference.html
节点总结：
1.检查修改：
已修改，未暂存：git diff
已暂存，未提交：git diff --cached
已提交，未推送：git diff master origin/master
2.撤销修改
已修改，未暂存：git checkout .  或者  git reset --hard
已暂存，未提交：
（git reset   +  git checkout .）  或者  （git reset --hard）
已提交，未推送：git reset --hard origin/master
已推送：git reset --hard HEAD^  +  git push -f(强制push到远程)
3.查看当前目录下，所有显示和隐藏的文件 ls -a
   删除文件：rm -rf filename
4.新建仓库和新建分支
直接在github上新建仓库，拉取下来本地就有了新仓库；在GitHub新建分支，本地拉取一下，分支就也下来了。
5.本地和远程不同的项目合并：
   假如我们的源是origin，分支是master，那么我们 需要这样写git pull origin master --allow-unrelated-histories
6.stash应用：
    添加改动到stash:  git stash save -a "messeag"  (包括了新添加的文件)
    删除stash:  git stash drop <stash@{id}> ;    git  stash clear  (stash list全部被删除了)
7.建立与本地分支相对应的远程分支：git push --set-upstream origin article_addVideo