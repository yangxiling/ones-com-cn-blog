import React, {useMemo, useCallback, memo} from 'react';
import {URL_CONFIG} from '../../const/url-config';
import get from 'lodash-es/get';
import {TestCaseLogo, PlanLogo, PerformanceLogo, AutomationLogo, DeskLogo, AccountLogo, TaskLogo, TimeLogo, CopilotLogo,ProjectLogo, WikiLogo} from '@ones-design/icons';
import styles from './index.module.scss';
import { ImageMapper } from './image-mapper';

// 图标映射 - 使用 useMemo 缓存
const iconMap: Record<string, React.ComponentType> = {
  'ProjectLogo': ProjectLogo,
  'WikiLogo': WikiLogo,
  'TestCaseLogo': TestCaseLogo,
  'PlanLogo': PlanLogo,
  'PerformanceLogo': PerformanceLogo,
  'AutomationLogo': AutomationLogo,
  'DeskLogo': DeskLogo,
  'AccountLogo': AccountLogo,
  'TaskLogo': TaskLogo,
  'TimeLogo': TimeLogo,
  'CopilotLogo': CopilotLogo,
};

export interface CustomerInfo {
  id: string;
  slug: string;
  acfCustomerCase: {
    customerCaseCustomer: {
      id: string;
      acfCustomer: {
        customerLogo: {
          sourceUrl: string;
        }
      }
    }
  }
}

export interface MenuItem {
  name?: string;
  link?: string;
  desc?: string;
  logo?: string;
  icon?: {
    sourceUrl: string;
  };
  isBlank?: boolean;
  resolve?: {
    slug: string;
    acfSolution: {
      solutionTitle: string;
    };
  };
  customerInfo?: CustomerInfo;
}

interface SubMenuItemType {
  name: string;
  className?: string;
  itemNameKey?: string;
  col?: number;
  menu?: MenuItem[];
  submenuTitleClassName?: string;
  submenuItemClassName?: string;
  onlyImg?: boolean;
  itemImgKey?: string;
  appendButton?: JSX.Element;
  appendButtonClassName?: string;
  getLink?: (item: MenuItem) => string;
  submenuItemImgClassName?: string;
  menuContentClassName?: string;
  nameClassName?: string;
}

// 构建完整链接 - 使用 useMemo 缓存
const buildFullLink = (link: string, isExternalLink: boolean) => {
  if (!isExternalLink) {
    return `${URL_CONFIG.baseUrl}${link}`;
  }
  return link;
};

// 渲染图片内容组件
const ImageContent = memo(({itemName, submenuItemImgClassName, originalUrl, itemImgKey}: {
  itemName: string;
  submenuItemImgClassName: string;
  originalUrl?: string;
  itemImgKey: string;
}) => (
  <ImageMapper
    originalUrl={originalUrl}
    itemImgKey={itemImgKey}
    className={submenuItemImgClassName}
    alt={itemName}
    height={60}
    width={180}
  />
));

// 渲染文本内容组件
// const IconWithText = memo(({itemName, itemDesc, submenuItemClassName, submenuItemImgClassName, itemLogo}: {
//   itemName: string;
//   itemDesc: string;
//   submenuItemClassName?: string;
//   submenuItemImgClassName?: string;
//   itemLogo?: string;

// }) => {

//   return (

//   );
// });

// 单个菜单项组件
const MenuItemComponent = memo(({
  item,
  index,
  itemImgKey,
  submenuItemClassName,
  submenuItemImgClassName,
  onlyImg,
  getLink,
}: {
  item: MenuItem;
  index: number;
  itemImgKey: string;
  submenuItemClassName?: string;
  submenuItemImgClassName?: string;
  onlyImg?: boolean;
  getLink: (item: MenuItem) => string | undefined;
  }) => {

  const {name = '', desc = '', logo} = item;

  // 使用 useMemo 缓存计算结果
  const linkData = useMemo(() => {
    const link = getLink(item);
    const isExternalLink = link?.startsWith('http') || false;
    const fullLink = buildFullLink(link || '', isExternalLink);
    return {link, isExternalLink, fullLink};
  }, [item, getLink]);

  // const itemData = useMemo(() => {
  //   const itemName = get(item, itemNameKey);
  //   const itemDesc = get(item, 'desc') || '';
  //   const itemLogo = get(item, 'logo') || '';
    
  //   // 处理图片路径
  //   let itemIconUrl = '';
  //   const originalUrl = get(item, itemImgKey);
  //   if (originalUrl) {
  //     // 如果是客户案例，使用本地图片
  //     if (itemImgKey.includes('customerLogo')) {
  //       const fileName = originalUrl.split('/').pop(); // 获取文件名
  //       itemIconUrl = `/assets/${fileName}`;
  //     } else {
  //       itemIconUrl = originalUrl;
  //     }
  //   }
    
  //   return {itemName, itemIconUrl, itemDesc, itemLogo};
  // }, [item, itemNameKey, itemImgKey]);

  // 使用 useCallback 缓存点击处理函数
  const handleClick = useCallback(() => {
    const link = getLink(item);
    if (link) {
      if (item.isBlank) {
        window.open(link, '_blank');
      } else {
        window.location.href = link;
      }
    }
  }, [item, getLink]);

  const itemContent = useMemo(() => {

    if (logo) {
      return (<div className={`${styles.item} ${submenuItemClassName} `}>
        <div className={`${styles.icon} ${submenuItemImgClassName}`}>
          {logo && iconMap[logo] && React.createElement(iconMap[logo])}
        </div>
        <div>
          <div className={styles.name}>{name}</div>
          {<div className={styles.desc}>{desc}</div>}
        </div>
      </div>
      );
    }

    return (<div className={`${styles.pureText} ${styles.name}`}>{name}</div>);

  }, [submenuItemImgClassName, submenuItemClassName, logo, name, desc]);


  if (onlyImg) {
    return (
      <div className={styles.imgWrapper}>
        <ImageContent
          itemName={name}
          submenuItemImgClassName={styles.img}
          originalUrl={get(item, itemImgKey)}
          itemImgKey={itemImgKey} />
      </div>
    );
  }

  return (
    <a
      className={`${styles.link}`}
      key={index}
      onClick={handleClick}
      href={linkData.fullLink}
      target={item.isBlank ? '_blank' : '_self'}
      rel={linkData.isExternalLink ? 'nofollow' : undefined}
    >
      {itemContent}
    </a>
  );
});

export const SubMenu: React.FC<SubMenuItemType> = memo(({
  name,
  menu,
  itemImgKey = 'icon.sourceUrl',
  submenuItemClassName,
  submenuItemImgClassName,
  onlyImg,
  appendButton,
  getLink = (item: MenuItem) => get(item, 'link'),
  menuContentClassName = '',
}) => {
  // 使用 useMemo 缓存菜单项列表
  const menuItems = useMemo(() => {
    if (!menu) return null;

    return menu.map((item: MenuItem, index: number) => (
      <MenuItemComponent
        key={`${item.name}-${index}`}
        item={item}
        index={index}
        itemImgKey={itemImgKey}
        submenuItemClassName={submenuItemClassName}
        submenuItemImgClassName={submenuItemImgClassName}
        onlyImg={onlyImg}
        getLink={getLink}
      />
    ));
  }, [menu, itemImgKey, submenuItemClassName, submenuItemImgClassName, onlyImg, getLink]);

  return (
    <div>
      <div className={styles.title}>{name}</div>
      <div className={menuContentClassName}>
        {menuItems}
        {appendButton && <div>{appendButton}</div>}
      </div>
    </div>
  );
});