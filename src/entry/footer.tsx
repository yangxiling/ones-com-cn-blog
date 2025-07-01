import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Footer } from '../components/footer/footer';
import '../styles/global.scss';

const mountFooter = (elementId: string) => {
  const container = document.getElementById(elementId);
  if (!container) return;

  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Footer />
    </StrictMode>
  );
};

// 扩展 Window 接口
declare global {
  interface Window {
    Footer: {
      mount: (elementId: string) => void;
    };
  }
}

window.Footer = { mount: mountFooter };

// 开发环境直接挂载
if (import.meta.env.DEV) {
  document.addEventListener('DOMContentLoaded', () => {
    mountFooter('footer-root');
  });
}
