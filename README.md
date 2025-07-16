# React Header & Footer for WordPress

这是一个为 WordPress 站点设计的 React Header 和 Footer 组件项目。

## 功能特性

- 🎨 现代化的 React 组件设计
- 📱 响应式布局
- 🚀 基于 Vite 的快速构建
- 🔧 TypeScript 支持
- 🎯 专为 WordPress 集成优化

## 快速开始

### 开发环境

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 `http://localhost:5173` 查看效果

### 构建生产版本

```bash
npm run build
```

构建完成后，`dist` 目录将包含以下文件：
- `header.js` - Header 组件
- `footer.js` - Footer 组件
- `assets/` - 素材

## WordPress 集成

### 自动部署

（todo）使用提供的部署脚本：

```bash
./deploy-wordpress.sh /path/to/your/wordpress/theme
```

### 手动集成

1. 将打包文件 `react-build` 目录中的所有文件复制到你的 WordPress 主题目录下的 `react-build` 文件夹中

2. 在你的主题的 `header.php` 中添加：

```php
<!-- Header 挂载点 -->
<div id="header-root"></div>

<!-- 引入样式和脚本 -->
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/react-build/assets/header.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/react-build/assets/footer.css">
<script src="<?php echo get_template_directory_uri(); ?>/react-build/header.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/react-build/footer.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    if (window.Header && window.Header.mount) {
        window.Header.mount('header-root');
    }
    if (window.Footer && window.Footer.mount) {
        window.Footer.mount('footer-root');
    }
});
</script>
```

3. 在你的主题的 `footer.php` 中添加：

```php
<!-- Footer 挂载点 -->
<div id="footer-root"></div>
```

详细集成指南请参考 [WORDPRESS_INTEGRATION.md](./WORDPRESS_INTEGRATION.md)

## 项目结构

```
src/
├── components/
│   ├── footer/          # Footer 组件
│   ├── nav-menu/        # 导航菜单组件
│   └── nav-menu-panel/  # 导航面板组件
├── entry/
│   ├── header.tsx       # Header 入口文件
│   └── footer.tsx       # Footer 入口文件
├── styles/              # 全局样式
└── images/              # 图片资源
```

## 自定义配置

### 修改组件内容

- Header 导航菜单：编辑 `src/components/nav-menu/nav-menu.tsx`
- Footer 内容：编辑 `src/components/footer/footer.tsx`

### 修改样式

- 全局样式：编辑 `src/styles/global.scss`
- 组件样式：编辑对应的 `.module.scss` 文件

## 技术栈

- React 18
- TypeScript
- Vite
- SCSS
- @ones-design/core

## 开发命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
npm run lint     # 代码检查
```

## 注意事项

1. 确保 WordPress 主题目录中有 `react-build` 文件夹
2. 如果使用缓存插件，记得清除缓存
3. 建议在生产环境中启用文件压缩和缓存
4. 确保 WordPress 站点的 PHP 版本兼容（推荐 PHP 7.4+）

## 故障排除

如果遇到问题，请检查：

1. 浏览器控制台是否有 JavaScript 错误
2. 文件路径是否正确
3. WordPress 缓存是否已清除
4. 挂载点 ID 是否正确（`header-root` 和 `footer-root`）

## 许可证

MIT License
