import React, {useState} from 'react';
import classnames from 'classnames';
import {ChevronDown} from '@ones-design/icons';
import {Popover} from '@ones-design/core';
import type {PopoverProps} from '@ones-design/core';
import menuItems from '../../data/menu.json';
import styles from './menu.module.scss';
// import {ProductMenuPanel, SolutionPanel, CustomerCasePanel, SupportPanel} from '../panels';
import {ProductMenuPanel} from '../panels';


interface MenuItem {
  fieldGroupName: string;
  name: string;
  link?: string;
  menu?: Record<string, unknown>;
  info?: Record<string, unknown>;
}

interface PanelProps {
  menu: Record<string, unknown>;
  info?: Record<string, unknown>;
  fieldGroupName: string;
  onPanelClose: () => void;
}

export const MenuPanel: React.FC<{
  children?: JSX.Element;
  className?: string;
}> = ({children, className}) => {
  console.log('MenuPanel children:', children);
  return (
    <div className={classnames(className)}>
      <div className="oac-flex oac-justify-center oac-bg-white">{children}</div>
    </div>
  );
};

const menuItemMap = new Map(
  [
    ['menuProduct', (props: PanelProps) => {
      return <ProductMenuPanel {...props} />;
    }],
    // ['menuSolution', (props: any) => <SolutionPanel {...props} />],
    // ['menuCustomer', (props: any) => <CustomerCasePanel {...props} />],s
    // ['menuResource', (props: any) => <SupportPanel {...props} />],
  ]
);
export const Menu: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  // isExpanded: boolean;
  // onMobileClose: () => void;
  // onPanelExpand: (flag: boolean) => void;
  // showRegisterBtn?: boolean;
  // menuPanelClassName?: string;
}> = React.memo(() => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  let leaveTimer: ReturnType<typeof setTimeout>;

  const handleMouseEnter = (key: string) => {
    clearTimeout(leaveTimer);
    setHoveredKey(key);
  };

  const handleMouseLeave = () => {
    leaveTimer = setTimeout(() => {
      setHoveredKey(null);
    }, 200);
  };

  const hoveredMenuItem = hoveredKey ? (menuItems[hoveredKey as keyof typeof menuItems] as MenuItem) : null;

  return (
    <div onMouseLeave={handleMouseLeave}>
      <div id="header-menu" className={classnames('ease-in-menu', styles.menu)} style={{}}>
        {Object.keys(menuItems)?.map?.((key: string) => {
          const menuItem = menuItems[key as keyof typeof menuItems] as MenuItem;
          const isHovered = hoveredKey === key;

          const content = <MenuPanel className={styles.menuPanel}>{menuItemMap.get(key)?.({
            menu: menuItem.menu as Record<string, unknown>,
            info: menuItem.info,
            fieldGroupName: menuItem.fieldGroupName,
            onPanelClose: () => {},
          })}</MenuPanel>;
          return (

            <Popover getPopupContainer={() => document.getElementById('nav-container')!} arrow={false} content={content} >
              <div
                id={`header_menu_${menuItem.fieldGroupName}`}
                onMouseEnter={() => handleMouseEnter(key)}
                className={classnames(
                  styles.menuItem,
                  'oac-block',
                )}
                key={key}
              >
                {menuItem.name}
                {!menuItem.link && (
                  <ChevronDown className={classnames(styles.menuItemIcon, {[styles.rotated]: isHovered})} />
                )}
              </div>
            </Popover>
          );
        })}
      </div>
      {/* {hoveredKey && hoveredMenuItem && !hoveredMenuItem.link && ( */}

      {/* <MenuPanel className={styles.menuPanel}>
            {menuItemMap.get(hoveredKey)?.({
              menu: hoveredMenuItem.menu as Record<string, unknown>,
              info: hoveredMenuItem.info,
              fieldGroupName: hoveredMenuItem.fieldGroupName,
              onPanelClose: () => {},
            })}
          </MenuPanel> */}

      {/* )} */}
    </div>
  );
});