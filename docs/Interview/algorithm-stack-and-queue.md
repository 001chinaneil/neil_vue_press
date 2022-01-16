# 栈与队列系列
20220103 第一遍  
1. 队列（queue）是先进先出，买票进站；栈（stack）是先进后出，死胡同；
2. 1-3小节放水了，可以再补一遍。todo
3. 栈结构的特殊性，非常适合做**对称匹配类**的题目：有效的括号、删除字符串相邻重复项
4. 7-8题放水了，可以补一遍。todo

## 一、有效的括号：利用栈结构
* 1. 核心：利用stack先进后出的特性
* 2. 局限性：必须是只有如下符号的情况下  
```js
function isValid(str = ''){
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let stack = [];// 利用栈先进后出的特性
    for(let i = 0; i < str.length; i++){
        if(map[str[i]]){
            stack.push(str[i]);// (、[、{入栈
        }else if(str[i] !== map[stack.pop()]){// 要配对哦
            return false;
        }
    }

    return stack.length == 0;
}
```  
解决局限性：把非如下符号的过滤掉  
```js
function isValid(str = ''){
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let box = '(){}[]';// 过滤其他字符的标准
    let stack = [];// 利用栈先进后出的特性
    for(let i = 0; i < str.length; i++){
        // 过滤其他字符
        if(box.indexOf(str[i]) > -1){
            if(map[str[i]]){
                stack.push(str[i]);// 入栈
            }else if(str[i] !== map[stack.pop()]){// 要配对哦
                return false;
            }
        }
    }

    return stack.length == 0;
}
```