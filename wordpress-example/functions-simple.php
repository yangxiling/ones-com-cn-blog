<?php
/**
 * 简化版本的 React 组件加载脚本
 * 适用于 com-cn-nav 项目
 */

// 加载React构建的资源
add_action('wp_enqueue_scripts', function() {
  // 加载 CSS 文件
  wp_enqueue_style(
    'react-header-css', 
    get_theme_file_uri('react-build/assets/header.css'),
    [],
    '1.0.0'
  );
  
  wp_enqueue_style(
    'react-global-css', 
    get_theme_file_uri('react-build/assets/global.css'),
    [],
    '1.0.0'
  );
  
  // 加载 JavaScript 文件
  wp_enqueue_script(
    'react-header-js',
    get_theme_file_uri('react-build/header.js'),
    [],
    '1.0.0',
    false
  );
  
  wp_enqueue_script(
    'react-footer-js',
    get_theme_file_uri('react-build/footer.js'),
    [],
    '1.0.0',
    false
  );
});

// 添加挂载脚本
add_action('wp_footer', function() {
  ?>
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
  <?php
}); 