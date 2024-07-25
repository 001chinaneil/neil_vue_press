# 项目中函数类处理工具：Lodash.js

## lodash-es和lodash的比较 
1. lodash-es比lodash可以让webpack可以优化代码，只打包进使用的函数，而不是和lodash一样导入全部函数。
2. lodash-es使用了es6 module模板语法，lodash为了兼容性使用了es5语法
```js
// {a,b } from lodash-es 和
//  a from lodash/a 
//  b from lodash/b 
//  效果是一样的
```