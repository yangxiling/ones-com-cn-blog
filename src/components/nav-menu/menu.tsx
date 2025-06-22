import React from 'react';
import classnames from 'classnames';
import {ChevronDown} from '@ones-design/icons';
import {Popover} from '@ones-design/core';
import menuItems from '../../data/menu.json';
import styles from './menu.module.scss';
import {
  ProductMenuPanel,
  SolutionsPanel,
  CustomerCasePanel,
  SupportsPanel,
} from '../panels';

interface MenuItem {
  fieldGroupName: string;
  name: string;
  link?: string;
  menu?: any;
  info?: any;
}

interface PanelProps {
  menu: any;
  info?: any;
  fieldGroupName: string;
  onPanelClose: () => void;
}

export const MenuPanel: React.FC<{
  children?: JSX.Element;
  className?: string;
}> = ({children, className}) => {
  return (
    <div className={classnames(className)}>
      {children}
    </div>
  );
};

const menuItemMap = new Map([
  // ['menuProduct', (props: PanelProps) => <ProductMenuPanel {...props} />],
  // ['menuSolution', (props: PanelProps) => <SolutionsPanel {...props} />],
  ['menuCustomer', (props: PanelProps) => <CustomerCasePanel {...props} />],
  // ['menuResource', (props: PanelProps) => <SupportsPanel {...props} />],
]);

export const Menu: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = React.memo(() => {
  return (

    <div id="header-menu" className={classnames(styles.menu)}>
      {Object.keys(menuItems)?.map?.((key: string) => {
        const menuItem = menuItems[key as keyof typeof menuItems] as MenuItem;

        const content = (
          <MenuPanel className={styles.menuPanel}>
            {menuItemMap.get(key)?.({
              menu: menuItem.menu,
              info: menuItem.info,
              fieldGroupName: menuItem.fieldGroupName,
              onPanelClose: () => {},
            })}
          </MenuPanel>
        );
        return (
          <Popover
            // trigger="hover"
            getPopupContainer={() => document.getElementById('nav-container')!}
            arrow={false}
            content={content}
          >
            <div
              id={`header_menu_${menuItem.fieldGroupName}`}
              className={classnames(styles.menuItem)}
              key={key}
            >
              {menuItem.name}
              {!menuItem.link && (
                <ChevronDown className={classnames(styles.menuItemIcon)} />
              )}
            </div>
          </Popover>
        );
      })}
    </div>

  );
});