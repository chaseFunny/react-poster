# 页面基本骨架搭建

1. src/components 下新建一个 nav 组件，组件左右结构，左边一个合适字体的标题常量：“海报生成 demo”，这个标题要在 src/constants 下新建 index.ts 存储。右边是链接列表，列表是定义的一个数组，里面有一个地址 blog：https://www.luckysnail.cn。最后在 App.tsx 使用 nav 组件 
2. 新增一个全局 footer 组件，组件左右结构，左边是开源地址 ：https://github.com/chaseFunny/react-poster，右边是一个列表展示，第一个是 备案号：展示 备案浙ICP备2021039023号-3跳转到 https://beian.miit.gov.cn/#/Integrated/index ，第二个是：联系我：点击 复制文本“RELEASE 500” 到剪切板。
3. 新增一个公共内容布局组件，最大宽度 1200px ，居中，里面合适的 padding，有最小高度，
4. 寻找海报需要的素材
5. 海报页面开发：
6. 先安装需要的依赖：pnpm i dom-to-image html2canvas qrcode.react 
7. 开发一个包含图片，文字，二维码，特殊字体，样式的海报（我的提示词：现在 开发一个包含图片，文字，二维码，特殊字体，样式的海报，相关素材我放在了 assets 下，两个图片 一个 icon.jpg 一个 luckySnail.png 还有一个特殊字体，我已经在 tailwind 配置好了， JingNanBoBoHei。最后海报不要简介美观）
8. 开发一个下载功能按钮，点击图标进行下载，下载图标由图标和下载文字组成，下载函数已经封装好了是 downloadDOMElementAsImage
