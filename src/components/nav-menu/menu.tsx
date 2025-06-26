import React from 'react';
import classnames from 'classnames';
import {ChevronDown} from '@ones-design/icons';
import {Popover} from '@ones-design/core';
import menuData from '../../data/nav-const';
import styles from './menu.module.scss';
import productStyles from '../panels/product.module.scss';
import {
  ProductMenuPanel,
  SolutionsPanel,
  ResourcesPanel,
} from '../panels';

interface MenuItem {
  fieldGroupName: string;
  name: string;
  link?: string;
  menus?: Record<string, unknown>;
}

export const Menu: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = React.memo(() => {
  return (
    <div id="header-menu" className={classnames(styles.menu)}>
      {Object.keys(menuData)?.map?.((key: string) => {
        const menuItem = menuData[key as keyof typeof menuData] as MenuItem;

        const renderContent = () => {
          if (!menuItem.menus) return null;
          
          switch (key) {
            case 'menuProduct':
              return <ProductMenuPanel menus={menuItem.menus as any} />;
            case 'menuSolution':
              return <SolutionsPanel menus={menuItem.menus as any} />;
            case 'menuResource':
              return <ResourcesPanel menus={menuItem.menus as any}  />;
            default:
              return null;
          }
        };

        const content = (
          <div className={styles.menuPanel}>
            {renderContent()}
          </div>
        );
        
        return (!menuItem.link ? (
          <Popover
            // trigger="hover"
            getPopupContainer={() => document.getElementById('nav-container')!}
            arrow={false}
            content={content}
            placement="bottom"
          >
            <div
              id={`header_menu_${menuItem.fieldGroupName}`}
              className={classnames(styles.menuItem)}
              key={key}
            >
              {menuItem.name}
              <ChevronDown className={classnames(styles.menuItemIcon)} />
            </div>
          </Popover>
        ) : (
          <a className={styles.link} href={menuItem.link} >
            {menuItem.name}
          </a>
        ))
      })}
    </div>
  );
});