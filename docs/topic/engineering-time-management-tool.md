# 工程中时间处理工具：Day.js

## Day.js和Moment.js的区别
1. Day.js它导入成本很小，只有2KB，而Moment.js导入成本是60KB。
2. 对于现代化框架单页应用来说，Day.js更先进，因为Monment.js是JQuery时代的产物，官方维持现状，不再新增功能，同样也推荐Day.js。
3. 实验表明，Day.js的执行速度是Moment.js的大约一半。
4. Day.js的特点：
    - Day.js有非常相似的Moment.js的API，迁移成本很小。
    - 不可变数据
    - 支持链式操作
    - 国际化
    - 仅2kb的微型库
    - 全浏览器兼容

todo: 
5. 为什么Day.js导入成本更小呢？
6. 为什么Day.js的执行速度更快呢？

## Day.js里面关于转换时区的应用
```js
//引入：React应用
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

// 使用
dayjs().tz(timeZoneProperty).format('YYYY-MM-DD')
```
* 心得：代码和事物一样，考察的是对事情的抽离、抽象的逻辑，只有想的清晰，才能说的清晰，做的坚决。[20231208 新华科技大厦]