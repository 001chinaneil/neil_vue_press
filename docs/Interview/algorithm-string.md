# 字符操作系列 todo

## 一、最长无重复子串的长度：滑动窗口思想  
* 1. 声明变量longLength(存储最大长度)、tempStr(临时子串)  
* 2. 使用普通for循环遍历  
* 3. 当前字符存在tempStr中，slice截取(索引要+1)+当前字符；如果不存在，tempStr+当前字符，**新长度和旧长度取最长Math.max()**
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
            longLength = Math.max(longLength,tempStr.length);
        }
    }

    return longLength;
}
```  




