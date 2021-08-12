# 字符操作系列

## 一、最长无重复子串的长度：滑动窗口思想  
* 1. 声明变量longLength(存储最大长度)、tempStr(临时子串)  
* 2. 使用for循环遍历  
* 3. 当前字符存在tempStr中，slice截取(索引要+1)+当前字符；如果不存在，tempStr+当前字符，旧长度>新长度 ？ 旧长度 ： 新长度，反正就是保持最长的  
```js
function findLongStr(str = ''){
    if(Object.prototype.toString.call(str) !== '[object String]'){
        return new Error('输入参数非字符，请检查~');
    }

    let longLength = 0;
    let tempStr = '';
    for(let i = 0; i < str.length; i++){
        let currStr = str[i];// 当前字符串
        let isHave = tempStr.indexOf(currStr);
        if(isHave > -1){
            // 慢指针向前走，[截取时开始索引一定要加1，因为是剔除已存在的当前元素]
            tempStr = tempStr.slice(isHave+1) + currStr;
        }else {
            tempStr += currStr;
            longLength = tempStr.length > longLength ? tempStr.length : longLength;
            
        }
        console.log(currStr,longLength,tempStr);
    }

    return longLength;
}
```  

## 二、有效的括号：利用栈结构
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


