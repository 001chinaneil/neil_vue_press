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
                }
            ],
            '/Interview/': [
                {
                    title: '算法思想',
                    collapsable: false,
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
                }
            ]
        }
    }
}