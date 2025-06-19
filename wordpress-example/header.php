<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>
    
    <!-- React 组件样式 -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/react-build/assets/header.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/react-build/assets/footer.css">
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <!-- Header 挂载点 -->
    <div id="header-root"></div>
    
    <!-- 引入 React 组件脚本 -->
    <script src="<?php echo get_template_directory_uri(); ?>/react-build/header.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/react-build/footer.js"></script>
    
    <script>
        // 等待 DOM 加载完成后挂载组件
        document.addEventListener('DOMContentLoaded', function() {
            if (window.Header && window.Header.mount) {
                window.Header.mount('header-root');
            }
            if (window.Footer && window.Footer.mount) {
                window.Footer.mount('footer-root');
            }
        });
    </script>
</body>
</html> 