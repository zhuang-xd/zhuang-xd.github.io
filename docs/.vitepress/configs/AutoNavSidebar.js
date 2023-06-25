import AutoConfigureNavSidebarPlugin from '@w3ctech-editorial-department/vitepress-auto-configure-nav-sidebar'

const { sidebar } = AutoConfigureNavSidebarPlugin({
    showSidebarIcon: false,
    collapsed:false,
    // collapsed:true,
    // isCollapse: false,
    ignoreFolders: [
        "assets",
        "about"
    ],
    ignoreFiles: [
        "index.md",
        "归档.md",
    ]
})

// 不使用
// const { nav } = AutoConfigureNavSidebarPlugin({
//     collapsed: false,
//     isCollapse: true,
//     singleLayerNav: true,
//     dirPrefix: "📂",
//     showNavIcon: true,
//     ignoreFolders: [
//         "list",
//         "inbox"
//     ],
// })

export { sidebar };