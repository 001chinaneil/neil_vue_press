# 自动化提交 Shell 脚本

## 更新记录：

1. 20230129

## 需求分析：

1. 每天定时自动提交 work docs 到 Github 上
2. 每天下午 6 点
3. 自动跑脚本的 python
4. git add . => git commit -m `${年月日}：work docs` => git push

```js
拆解：
    1. 如何在命令行工具里面一次执行多个 git 命令
      AA && BB AA 命令执行完并成功之后才会执行 BB 命令 (成功有效)
      参链：https://blog.csdn.net/u010037020/article/details/103911723
    2. 通过命令行去执行一个文件，这个文件里面是定义好的 git 命令集合 (成功有效)
        参链：https://blog.csdn.net/Jie0817/article/details/121650229

    3. 自动执行一个 git 命令
        一个 shell 脚本
        如何执行 sh 脚本？sh xxx 或者 bash xxx
        加权限 chmod +x xxx.sh
        参链：https://blog.csdn.net/qq_20817327/article/details/119376001

    4. 启动一个脚本，监听当前时间，到达下午 6 点，才往下执行
        shell 里面进行逻辑判断：到达下午 6 点，否则返回
        下面的参链甚至实现了： 1. 每天只提交一次 2. 每隔 1s 进行监听 3. 只工作日执行，周末不执行
        参链：http://t.zoukankan.com/dongxiaoguang-p-2956399.html (成功有效)
```

## 监听脚本

```js
// listen.sh
#Section configuration(配置部分)
#Task Time ,example:203000(Time 20:30:00);190000(Time 19:00:00);
startTime=180000
#the programs you want to execute(要执行的程序)
program=push

#Section promgram (程序执行部分)
perDate=$(date "+%Y%m%d")
isNewDay=1
isFirstTime=1

echo 'Task schedule Time: ('$startTime') program: ('$program') Waiting...'

while true ; do
    curTime=$(date "+%H%M%S")
    curDate=$(date "+%Y%m%d")

    #Check week day(周末不执行)
    week=`date +%w`
    if [ $week -eq 6 ] || [ $week -eq 0 ];then
        isNewDay=0
        sleep 1
        continue

    else
        #check and run script(工作日执行)
        if [ "$isNewDay" -eq "1" ];then
            if [ "$curTime" -gt "$startTime" ];then
                if [ "$isFirstTime" -eq "0" ];then
                    echo 'The program ('$program') Running...'
                    # $program
                    chmod +x ./push.sh
                    sh ./push.sh
                    echo 'The program ('$program') Stopped...'
                fi
                isNewDay=0
            else
                if [ "$isFirstTime" -eq "1" ];then
                    echo 'New Day: ('$curDate') Task schedule Time: ('$startTime') Waiting...'
                    isFirstTime=0
                fi

            fi
        else
            #new day start(开始新的一天)
            if [ "$curDate" -gt "$perDate" ];then
                echo 'New Day: ('$curDate') Task schedule Time: ('$startTime') Waiting...'
                isNewDay=1
                perDate=$curDate
            fi
        fi
        # 猜测是每个1s进行循环遍历一次
        sleep 60
    fi
done

```

## 执行提交操作脚本

```js
// push.sh
# 确保脚本抛出遇到的错误
set -e

# 获取当前时间
now=$(date "+%Y-%m-%d %H:%M:%S")

echo "正在上传源代码..."

# git init
git add .
git commit -m "$now: work docs"
git push

echo "上传完成"
# 具体git命令根据自身需求更改

cd -
```
