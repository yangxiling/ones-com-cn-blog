import {StrictMode } from 'react';
import { NavMenu } from '../components/nav-menu/nav';
import { createRoot } from 'react-dom/client';
import '../styles/global.scss';

const mountNav = (elementId: string) => {

  const container = document.getElementById(elementId);

  if (!container) return;

  const root = createRoot(container);
  root.render(
    <StrictMode>
      <NavMenu />
    </StrictMode>
  );
};

// 扩展 Window 接口
declare global {
  interface Window {
    Header: {
      mount: (elementId: string) => void;
    };
  }
}

window.Header = { mount: mountNav };

// 开发环境直接挂载
if (import.meta.env.DEV) {
  document.addEventListener('DOMContentLoaded', () => {
    mountNav('header-root');
  });
}
