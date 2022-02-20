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

## Vuex
Vuex用法：https://vuex.vuejs.org/zh/guide/state.html done 20211112
```js
计算属性：this.$store.state.global.hospitalId
项目唯一数据源
通过注入到根实例，来实现根组件下的所有子组件都能通过this.$store.state.xxx的形式获取到数据
总结：属性（state）、计算属性（getters）、方法（同步mutations: commit、异步actions: dispatch）
参数：无、          二参（state,getter）、普通参、包含所有属性&方法的参数集合context
state
    mapState：为了使多个属性简便的生成computed，简便用法，最终返回的是一个对象
    实现与其他普通计算属性混用：对象展开符，简便用法
        a(){},
        ...mapState({})，
getters：可以认为是store（实则state）的计算属性，为了把多个state和getter合在一起使用提供了可能
    state是它的第一个参数，通过此可以获取到所有的store属性
    getters是它的第二个参数，通过此可以获取到所有的getter属性
    通过属性访问
    通过方法访问：也就是getter会返回一个函数，在查询状态下非常有用
    mapGetters辅助函数，也是简便写法
mutations：更改state的唯一方法，提交mutations
    非常类似于事件，有事件名、有回调函数（接受state为第一个参数）
    命名：
        mutations: {
            eventName(state,otherParams){ state.xxx }
        }
    业务调用：
        this.$store.commit('eventName',otherParams);
        // 对象风格的提交
        this.$store.commit({
            type: 'eventName',
            a: 10,
        });
    mutation必须是同步函数，因为异步函数都不可追踪状态
    ...mapMutations([])：简便写法，done 20211115，[里面是数组还是对象]，基本是数组形式，除非是改写调用方法名才用对象的形式
actions：类似于mutations
    不同点：
        1. 提交的是mutation，而不是直接变更状态
        2. 可以执行任意异步操作（因为任何异步操作，在执行commit的一瞬是同步的）
    用法：context是个包含所有state、getters、mutation的属性
        actions: {
            test(context){
                context.commit('eventName');
            }
        }

        业务分发action：
            this.$store.dispatch('test',{a: 10});
            this.$store.dispatch({
                type: 'test',
                a: 10,
            });
    ...mapActions([])：简便写法
    store.dispatch()可以处理其他函数返回的Promise，而且它自己也是返回的Promise，所以可以用then承接

modules：为了模块拆分，避免全局store臃肿
    各自模块有自己的state、getter、mutation、action
    根模块rootState从第三个位置传入
进阶：再来一遍 20211115
    Vuex的动作核心是mutations，因为只有它可以更新数据。
    Vuex插件就是一个函数，接受store作为唯一参数，当store初始化后调用。
    strict严格模式将把不是mutation函数提交的状态更新，进行错误提示。
        创建实例 new Vuex.Store()
        对象配置 new Vuex.Store({})
        属性值   new Vuex.Store({strict: true})
    表单处理
        双向绑定的计算属性的get、set，洛书中有使用的，
        computed: {
            message: {
                get(){
                    return this.$store.state.obj.message;
                },
                set(value){
                    this.$store.commit('updateMessage',value);
                }
            }
        }
    单元测试：是个知识盲区 todo Mocha + chai
Vue全家桶：Vue、Vue-router、VueX、Vue-cli（项目构建工具）、axios（http请求工具）
```