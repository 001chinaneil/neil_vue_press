(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{368:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自动化提交-shell-脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动化提交-shell-脚本"}},[t._v("#")]),t._v(" 自动化提交 Shell 脚本")]),t._v(" "),s("h2",{attrs:{id:"更新记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新记录"}},[t._v("#")]),t._v(" 更新记录：")]),t._v(" "),s("ol",[s("li",[t._v("20230129")])]),t._v(" "),s("h2",{attrs:{id:"需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[t._v("#")]),t._v(" 需求分析：")]),t._v(" "),s("ol",[s("li",[t._v("每天定时自动提交 work docs 到 Github 上")]),t._v(" "),s("li",[t._v("每天下午 6 点")]),t._v(" "),s("li",[t._v("自动跑脚本的 python")]),t._v(" "),s("li",[t._v("git add . => git commit -m "),s("code",[t._v("${年月日}：work docs")]),t._v(" => git push")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("拆解：\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 如何在命令行工具里面一次执行多个 git 命令\n      "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BB")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AA")]),t._v(" 命令执行完并成功之后才会执行 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BB")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("命令")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("成功有效"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("参链：https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("csdn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("u010037020"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("details"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("103911723")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 通过命令行去执行一个文件，这个文件里面是定义好的 git "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("命令集合")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("成功有效"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("参链：https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("csdn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Jie0817"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("details"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("121650229")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 自动执行一个 git 命令\n        一个 shell 脚本\n        如何执行 sh 脚本？sh xxx 或者 bash xxx\n        加权限 chmod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("参链：https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("blog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("csdn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("qq_20817327"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("details"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("119376001")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 启动一个脚本，监听当前时间，到达下午 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" 点，才往下执行\n        shell 里面进行逻辑判断：到达下午 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" 点，否则返回\n        下面的参链甚至实现了： "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 每天只提交一次 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 每隔 1s 进行监听 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 只工作日执行，周末不执行\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("参链：http")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zoukankan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dongxiaoguang"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2956399.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("成功有效"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"监听脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听脚本"}},[t._v("#")]),t._v(" 监听脚本")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// listen.sh")]),t._v("\n#Section "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("配置部分"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n#Task Time "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("example")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("203000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Time "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("190000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Time "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstartTime"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180000")]),t._v("\n#the programs you want to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("要执行的程序"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprogram"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("push\n\n#Section "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("promgram")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("程序执行部分"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nperDate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+%Y%m%d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nisNewDay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nisFirstTime"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\necho "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Task schedule Time: ('")]),t._v("$startTime"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') program: ('")]),t._v("$program"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') Waiting...'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    curTime"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+%H%M%S"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    curDate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+%Y%m%d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    #Check week "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("day")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("周末不执行"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    week"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("date +%w")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" $week "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eq "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" $week "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eq "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("then\n        isNewDay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        sleep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n        #check and run "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("工作日执行"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$isNewDay"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eq "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("then\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$curTime"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gt "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$startTime"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("then\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$isFirstTime"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eq "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("then\n                    echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The program ('")]),t._v("$program"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') Running...'")]),t._v("\n                    # $program\n                    chmod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n                    sh "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh\n                    echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The program ('")]),t._v("$program"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') Stopped...'")]),t._v("\n                fi\n                isNewDay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$isFirstTime"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("eq "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("then\n                    echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New Day: ('")]),t._v("$curDate"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') Task schedule Time: ('")]),t._v("$startTime"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') Waiting...'")]),t._v("\n                    isFirstTime"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n                fi\n\n            fi\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            #"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("day")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("开始新的一天"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$curDate"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gt "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$perDate"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("then\n                echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New Day: ('")]),t._v("$curDate"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') Task schedule Time: ('")]),t._v("$startTime"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("') Waiting...'")]),t._v("\n                isNewDay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                perDate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("$curDate\n            fi\n        fi\n        # 猜测是每个1s进行循环遍历一次\n        sleep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n    fi\ndone\n\n")])])]),s("h2",{attrs:{id:"执行提交操作脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行提交操作脚本"}},[t._v("#")]),t._v(" 执行提交操作脚本")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// push.sh")]),t._v("\n# 确保脚本抛出遇到的错误\nset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e\n\n# 获取当前时间\nnow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+%Y-%m-%d %H:%M:%S"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\necho "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"正在上传源代码..."')]),t._v("\n\n# git init\ngit add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ngit commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$now: work docs"')]),t._v("\ngit push\n\necho "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"上传完成"')]),t._v("\n# 具体git命令根据自身需求更改\n\ncd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);