# react 海报组件示例代码

一个兼容性良好的海报组件

## feature

- 展示
  - pc web 网页端
  - h5 端 
    - ios
    - android
- 下载

## 海报包含

- 文字 、自定义字体文字
- 图片
- 二维码

## 实现

使用 html2canvas + dom-to-image 组合来实现一个兼容性良好的海报展示下载功能组件

## 技术栈

- Rspack
- React 19
- tailwind css
- html2canvas
- dom-to-image
- shadui/cn


## 引入 tailwindcss 

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

然后去 App.css 添加

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
然后去 tailwind.config.js 添加 `content: [ "./src/**/*.{ts,tsx,js,jsx}"],` 。


## 引入 shadui/cn

```bash
pnpm dlx shadcn@latest init
```