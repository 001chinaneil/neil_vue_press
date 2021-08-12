# Vue

## computed VS watch
| 计算属性computed        | 属性检测watch  |
| --------------------- |:-------------:|
| 首次运行      | 首次不允许 |
| 调用时需要在模板中渲染，修改计算需要修改所依赖的元数据      | 只需要修改元数据      |
| 默认深度依赖 | 默认浅度检测     |
| 适合做筛选，不可异步 | 适合做异步和开销较大的操作     |

参考链接：https://www.html.cn/qa/vue-js/20891.html

官方链接：https://cn.vuejs.org/v2/api/#computed