import {StrictMode } from 'react';
import { NavMenu } from '../components/nav-menu/nav';
import { createRoot } from 'react-dom/client';

const mountNav = (elementId: string) => {
  console.log('0headercontainer', elementId);

  const container = document.getElementById(elementId);

  if (!container) return;
console.log('2-headercontainer',container);
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
