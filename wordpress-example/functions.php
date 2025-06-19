<?php
/**
 * WordPress 主题 functions.php 中的 React 组件加载脚本
 * 适用于 com-cn-nav 项目
 */

// 加载React构建的资源
add_action('wp_enqueue_scripts', function() {
  // 检查构建文件是否存在
  $header_js_path = get_theme_file_path('react-build/header.js');
  $footer_js_path = get_theme_file_path('react-build/footer.js');
  $header_css_path = get_theme_file_path('react-build/assets/header.css');
  $global_css_path = get_theme_file_path('react-build/assets/global.css');
  
  // 1. 加载 CSS 文件
  if (file_exists($header_css_path)) {
    wp_enqueue_style(
      'react-header-css', 
      get_theme_file_uri('react-build/assets/header.css'),
      [],
      filemtime($header_css_path) // 使用文件修改时间作为版本号
    );
  }
  
  if (file_exists($global_css_path)) {
    wp_enqueue_style(
      'react-global-css', 
      get_theme_file_uri('react-build/assets/global.css'),
      [],
      filemtime($global_css_path)
    );
  }
  
  // 2. 加载 JavaScript 文件
  if (file_exists($header_js_path)) {
    wp_enqueue_script(
      'react-header-js',
      get_theme_file_uri('react-build/header.js'),
      [], // 不依赖 wp-element，因为项目包含自己的 React
      filemtime($header_js_path),
      false // 在 head 中加载，确保在 DOM 加载前可用
    );
  }
  
  if (file_exists($footer_js_path)) {
    wp_enqueue_script(
      'react-footer-js',
      get_theme_file_uri('react-build/footer.js'),
      [],
      filemtime($footer_js_path),
      false
    );
  }
  
  // 3. 添加内联脚本用于挂载组件
  add_action('wp_footer', function() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
      // 检查组件是否可用并挂载
      if (window.Header && window.Header.mount) {
        const headerContainer = document.getElementById('header-root');
        if (headerContainer) {
          window.Header.mount('header-root');
        }
      }
      
      if (window.Footer && window.Footer.mount) {
        const footerContainer = document.getElementById('footer-root');
        if (footerContainer) {
          window.Footer.mount('footer-root');
        }
      }
    });
    </script>
    <?php
  }, 20); // 优先级 20，确保在其他脚本之后执行
});

// 添加挂载点到页面
add_action('wp_body_open', function() {
  echo '<div id="header-root"></div>';
});

add_action('wp_footer', function() {
  echo '<div id="footer-root"></div>';
}, 10); // 优先级 10，确保在挂载脚本之前添加

// 可选：添加调试信息（仅在开发环境）
if (defined('WP_DEBUG') && WP_DEBUG) {
  add_action('wp_footer', function() {
    ?>
    <script>
    console.log('React 组件加载状态:', {
      header: typeof window.Header !== 'undefined',
      footer: typeof window.Footer !== 'undefined',
      headerContainer: !!document.getElementById('header-root'),
      footerContainer: !!document.getElementById('footer-root')
    });
    </script>
    <?php
  }, 30);
} 