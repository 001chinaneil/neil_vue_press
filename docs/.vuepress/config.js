module.exports = {
    title: 'Hello Vuepress',
    description: '学习笔记 & 工作总结',
    base: '/neil_vue_press/',
    themeConfig: {
        nav: [
            {
                text: '专题学习',
                link: '/topic/'
            },
            {
                text: '工作总结',
                link: '/foo/'
            },
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
                    collapsable: false,
                    children: [// 分组下的页面
                        'Vue',
                        'React',
                    ]
                },
                {
                    title: '工具集合(Tools)',
                    collapsable: false,
                    children: [
                        "Git",
                    ],
                }
            ],
            '/Interview/': [
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
                        'algorithm-sort',
                        'algorithm-print',
                        'algorithm-write-theory',
                        'algorithm-string',
                        'algorithm-de-weight',
                        'algorithm-pointer',
                        'algorithm-dynamic-programming',
                        'algorithm-linked-list',
                        'algorithm-binary-tree',
                        'algorithm-others',
                        'algorithm-summary',
                    ],
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
                    title: '项目介绍（软实力）',
                    collapsable: true,
                    children: [
                        'project-zyb',// 按面试节点划分
                    ]
                },
                {
                    title: '框架原理（Vue&React）',
                    collapsable: true,
                    children: [
                        'frame-Vue',
                        'frame-React',
                    ]
                }
            ]
        }
    }
}