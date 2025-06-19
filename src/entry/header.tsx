import {StrictMode } from 'react';
import { NavMenu } from '../components/nav-menu/nav-menu';
import { createRoot } from 'react-dom/client';
import '../styles/global.scss';

/* eslint-disable-next-line */
// export interface HeaderProps {
//   className?: string;
//   headerData: any;
//   menuClassName?: string;
//   menuStyle?: React.CSSProperties;
//   menuPanelClassName?: string;
//   showRegisterBtn?: boolean;
// }

// const HEADER_FIXED_TOP = 0;

// const HEADER_SHADOW_STYLE_EXCLUDE_ROUTE_LIST = [
//   // 博客中的内容页
//   '/categories/[categorySlug]/[pageIndex]',
//   '/templates/[id]',
//   '/changelog',
// ];

// export function Header() {
//   return (
//     <div className="wordpress-custom-nav">
//       <NavMenu />
//     </div>
//   );
// }

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

export { mountNav as Header };