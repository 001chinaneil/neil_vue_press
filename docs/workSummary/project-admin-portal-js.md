# admin-portal-js

## 1. react 组件里取消事件冒泡：e.stopPropagation()可以阻止 react 事件的冒泡

- [参链 1](https://segmentfault.com/q/1010000008966738) [参链 2](https://zhuanlan.zhihu.com/p/26742034)

  整理总结:

  1. 事件冒泡分为合成事件冒泡（在 jsx 中之间绑定的事件）和原生事件冒泡（js 原生代码绑定的事件，类似 document.body.addEventListener(click,xxx)）
  2. 阻止合成事件间的冒泡：用 e.stopPropagation()
  3. 阻止合成事件和最外层 document 上的事件间的冒泡：用 e.nativeEvent.stopImmediatePropagation()
  4. 阻止合成事件和除最外层 document 上的事件间的冒泡：用 e.target 去做判断

## 2. Select 组件的 Option，远程搜索后，数据更新了，但是组件没更新。

- 解决: antd 组件默认开启了 filterOption 为 true，设置 false 就可以了

## 3. react antdesign datePaick 预填日期出现警告的处理

- Deprecation warning in Moment.js - Not in a recognized ISO format
- [参链](https://stackoverflow.com/questions/39969570/deprecation-warning-in-moment-js-not-in-a-recognized-iso-format/51238958)
- 解决：`moment(new Date(initData.joinDate))`

```js
<Form.Item
  label="Move-in Date"
  initialValue={moment(new Date(initData.joinDate)) ?? ""}
  name="joinDate"
>
  <DatePicker style={{ width: "100%" }} />
</Form.Item>
```

## 4. ts报错：“Element”上不存在属性offsetWidth
1. 场景：[20230720] CRM Tour v2 获取某元素的实际宽度
2. 原因：ts默认用的是Element，声明为HTMLElement就可以了。
3. 写法：
```js
// 写法一：
let top = <HTMLImageElement>document.querySelector('.Top');
let _offsetTop = top.offsetTop;

// 写法二：
let top = document.querySelector('.Top') as HTMLElement;
let _offsetTop = top.offsetTop;
```

## 5. ts里面使用 document.getElementById(xxx) 报可能为null异常
1. [参链](https://blog.csdn.net/qubes/article/details/129819849)
```js
// 写法一：!. 很自信它会存在
document.getElementById(xxx)!.scrollWidth

// 写法二：
const app = document.getElementById(xxx)
if(app){
  const width = app.scrollWidth
}
```

## 6. antd from Form.Item组件里面只能包含受控组件
1. antd from Form.Item组件里面只能包含受控组件，不能包含其他内容，不然就获取不到对应内容了。
```js
<Form.Item name="isRetrospective" valuePropName="checked">
    <Checkbox>This is a retrospective recording.</Checkbox>
    {/* <span className="tour-tips">
      A retrospective recording will not send any notifications to the customer or the tour host.
    </span> */}
</Form.Item>
```

## 7. antd Table onChange事件ts写法
- [参链](https://github.com/ant-design/ant-design/issues/36653)
```js
const onTaskListChange: TableProps<TodoTaskDataType>['onChange'] = (_, __, sorter, extra) => {
  // { field, order }: { field: string | number | undefined; order: string | number | undefined },
  // { action }: { action: string }
  console.info(sorter, (sorter as SorterResult<TodoTaskDataType>).field, extra)

}
```

## 8. 当前时区格式化
- [参链](https://blog.csdn.net/weixin_39501680/article/details/129881067)
```js
timeZone = new Date().getTimezoneOffset() / 60  // 当前时区的格式化

'UTC+' + (0 - new Date().getTimezoneOffset() / 60)
// 得到0时区与当前地区的时区差值：const timeZone = new Date().getTimezoneOffset() / 60
// 得到当前时区名称：Intl.DateTimeFormat().resolvedOptions().timeZone
```
