module.exports = {
    title: '持续变强',
    description: '学习笔记 & 工作总结 & 面试准备',
    base: '/neil_vue_press/',
    themeConfig: {
        nav: [
            {
                text: '专题学习',
                link: '/topic/'
            },
            // {
            //     text: '工作总结',
            //     link: '/foo/'
            // },
            {
                text: 'Interview',
                // text: '面试准备',
                link: '/Interview/'
            },
        ],
        sidebar: {
            '/topic/': [
                // 侧边栏分组
                {
                    title: '应用框架(Framework)',// 分组标题
                    collapsable: true,
                    children: [// 分组下的页面
                        'Vue',
                        'Vue3',
                        'React',
                        'React-Router',
                        'Redux',
                        'React-Hooks',
                        'React-Apollo',
                        'TypeScript',
                    ]
                },
                {
                    title: '工具集合(Tools)',
                    collapsable: true,
                    children: [
                        "Git",
                    ],
                },
                {
                    title: '工程架构系列',
                    collapsable: true,
                    children: [
                        "engineering",
                    ],
                },
                {
                    title: '微前端系列集',
                    collapsable: true,
                    children: [
                        "micro-front-end",
                    ],
                },
                {
                    title: '低代码系列集',
                    collapsable: true,
                    children: [
                        "low-code",
                    ],
                },
                {
                    title: '多端跨端系列',
                    collapsable: true,
                    children: [
                        "across-client-side",
                        "Hybrid-App"
                    ],
                },
                {
                    title: '服务器渲染集',
                    collapsable: true,
                    children: [
                        "server-rendering",
                        'Next',
                        'Nuxt'
                    ],
                },
                {
                    title: '动效可视化集',
                    collapsable: true,
                    children: [
                        "visualization",
                    ],
                },
            ],
            '/Interview/': [
                {
                    title: '基础知识（CSS&JS）',
                    collapsable: true,
                    children: [
                        'basics-list',// 基础知识-罗列
                        'basics-chain',// 原型链
                        'basics-inherit',// 继承
                        'basics-api',// 常用API
                        'basics-request',// 请求
                        'basics-css',// 布局
                        'basics-eventloop',// 事件循环
                    ]
                },
                {
                    title: '框架原理（Vue&React）',
                    collapsable: true,
                    children: [
                        'frame-Vue',
                        'frame-React',
                    ]
                },
                {
                    title: '编译打包',
                    collapsable: true,
                    children: [
                        'package-webpack',
                        'package-vite',
                    ]
                },
                {
                    title: '浏览网络',
                    collapsable: true,
                    children: [
                        'network-summary',
                        'network-cache',
                        'network-storage',
                        'network-operation',
                        'network-optimizing',// 优化
                        'network-basics',// 基础
                        'network-safety',// 安全
                        'network-others',// 其他
                    ]
                },
                {
                    title: '算法思想',
                    collapsable: true,
                    children: [
                        'algorithm-summary',// 算法思想总结
                        'algorithm-sort',// 排序算法系列
                        'algorithm-print',// 各种输出系列
                        'algorithm-write-theory',// 实现原理系列
                        'algorithm-de-weight',// 去重专题系列
                        // -----------------------------------
                        'algorithm-array',// 数组操作系列
                        'algorithm-linked-list',// 链表专题系列
                        'algorithm-hash',// 哈希操作系列
                        'algorithm-string',// 字符操作系列
                        'algorithm-pointer',// 双指针系列集
                        'algorithm-stack-and-queue',// 栈与队列系列
                        'algorithm-binary-tree',// 二叉树系列集 todo
                        'algorithm-binary-tree-levelorder',// 二叉树系列集 todo
                        'algorithm-recall',// 回溯算法系列 todo
                        'algorithm-greed',// 贪心算法系列 todo
                        'algorithm-dynamic-programming',// 动态规划系列 todo
                        'algorithm-dull-stack',// 单调栈 todo
                        'algorithm-others',// 其他未分类集
                    ],
                },
                {
                    title: '项目介绍（软实力）',
                    collapsable: true,
                    children: [
                        'project-zyb',// 按面试节点划分
                        'project-baidu',
                    ]
                },
            ]
        }
    }
}