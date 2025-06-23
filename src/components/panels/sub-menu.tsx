import React, {useMemo, useCallback, memo} from 'react';
import {URL_CONFIG} from '../../const/url-config';
import get from 'lodash-es/get';
import {TestCaseLogo, PlanLogo, PerformanceLogo, AutomationLogo, DeskLogo, AccountLogo, TaskLogo, TimeLogo, CopilotLogo} from '@ones-design/icons';
import styles from './index.module.scss';

// 导入图标组件
import {ProjectLogo, WikiLogo} from '@ones-design/icons';

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
const ImageContent = memo(({itemIconUrl, itemName, submenuItemImgClassName}: {
  itemIconUrl: string;
  itemName: string;
  submenuItemImgClassName: string;
}) => (
  <img
    className={submenuItemImgClassName}
    height={60}
    width={180}
    alt={itemName}
    src={itemIconUrl}
  />
));

// 渲染文本内容组件
const IconWithText = memo(({itemName, itemDesc, submenuItemClassName, submenuItemImgClassName, itemIconUrl, itemLogo}: {
  itemName: string;
  itemDesc: string;
  submenuItemClassName?: string;
  submenuItemImgClassName?: string;
  itemIconUrl: string;
  itemLogo?: string;

}) => {
  const renderIcon = () => {
    if (itemLogo && iconMap[itemLogo]) {
      const IconComponent = iconMap[itemLogo];
      return <IconComponent />;
    }
    return <img src={itemIconUrl} alt="icon" />;
  };

  return (
    <div className={submenuItemClassName}>
      <div className={submenuItemImgClassName}>
        {renderIcon()}
      </div>
      <div>
        <div className={styles.name}>{itemName}</div>
        {itemDesc && <div className={styles.desc}>{itemDesc}</div>}
      </div>
    </div>
  );
});

// 单个菜单项组件
const MenuItemComponent = memo(({
  item,
  index,
  itemNameKey,
  itemImgKey,
  submenuItemClassName,
  submenuItemImgClassName,
  onlyImg,
  getLink,
}: {
  item: MenuItem;
  index: number;
  itemNameKey: string;
  itemImgKey: string;
  submenuItemClassName?: string;
  submenuItemImgClassName?: string;
  onlyImg?: boolean;
  getLink: (item: MenuItem) => string | undefined;
}) => {
  // 使用 useMemo 缓存计算结果
  const linkData = useMemo(() => {
    const link = getLink(item);
    const isExternalLink = link?.startsWith('http') || false;
    const fullLink = buildFullLink(link || '', isExternalLink);
    return {link, isExternalLink, fullLink};
  }, [item, getLink]);

  const itemData = useMemo(() => {
    const itemName = get(item, itemNameKey);
    const itemIconUrl = get(item, itemImgKey)?.replace('/blog/uploads/2022/12', '') || '';
    const itemDesc = get(item, 'desc') || '';
    const itemLogo = get(item, 'logo') || '';
    return {itemName, itemIconUrl, itemDesc, itemLogo};
  }, [item, itemNameKey, itemImgKey]);

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
    if (onlyImg) {
      return (<ImageContent
        itemIconUrl={itemData.itemIconUrl}
        itemName={itemData.itemName}
        submenuItemImgClassName={submenuItemImgClassName || ''} />
      );
    }

    if ((item.icon && item.icon.sourceUrl) || item.logo) {
      return (<IconWithText
        itemName={itemData.itemName}
        itemDesc={itemData.itemDesc}
        submenuItemClassName={submenuItemClassName || ''}
        submenuItemImgClassName={submenuItemImgClassName || ''}
        itemIconUrl={itemData.itemIconUrl}
        itemLogo={itemData.itemLogo}
      />
      );
    }

    return (<div className={styles.item}>{itemData.itemName}</div>);

  }, [onlyImg, itemData, submenuItemImgClassName, submenuItemClassName, item.icon, item.logo]);

  return (
    <a
      className={`${submenuItemClassName} ${styles.link}`}
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
  itemNameKey = 'name',
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
        itemNameKey={itemNameKey}
        itemImgKey={itemImgKey}
        submenuItemClassName={submenuItemClassName}
        submenuItemImgClassName={submenuItemImgClassName}
        onlyImg={onlyImg}
        getLink={getLink}
      />
    ));
  }, [menu, itemNameKey, itemImgKey, submenuItemClassName, submenuItemImgClassName, onlyImg, getLink]);

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