import React from 'react';
import styles from './nav-menu.module.scss';
import {Menu, Button} from '@ones-design/core';
import {OnesLogo} from '@ones-design/icons';
// import NavMenuPanel from '../nav-menu-panel';

const menuItems = [
  {
    key: 'product',
    label: '产品',
    children: [
      { key: 'product1', label: '产品一' },
      { key: 'product2', label: '产品二' },
    ],
  },
  {
    key: 'solution',
    label: '解决方案',
    children: [
      { key: 'solution1', label: '解决方案一' },
      { key: 'solution2', label: '解决方案二' },
    ],
  },
  {
    key: 'case',
    label: '客户案例',
    children: [
      { key: 'case1', label: '案例一' },
      { key: 'case2', label: '案例二' },
    ],
  },
  {
    key: 'support',
    label: '服务与支持',
    children: [
      { key: 'support1', label: '支持一' },
      { key: 'support2', label: '支持二' },
    ],
  },
  { key: 'pricing', label: '产品定价' },
  { key: 'xinchuang', label: <div style={{ color: '#1890ff' }}>信创</div> },
];

export const NavMenu = () => {
  return (
    <header className={styles.navbar}>
      <div>
        <a className="logo" href="https://ones.cn" target="_blank">
          {/* <img src="/ones-logo.svg" alt="ONES" /> */}
          ones
        </a>

        <Menu mode="horizontal" className={styles.menu} items={menuItems} />
      </div>
      <div className={styles.right}>
        <Button type="primary">400-666-1399</Button>
        <Button type="text">登录</Button>
        <Button type="primary">免费试用</Button>
      </div>
    </header>
  );
};


