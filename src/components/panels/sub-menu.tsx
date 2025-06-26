import React, {useMemo, memo} from 'react';
import {URL_CONFIG} from '../../const/url-config';
import get from 'lodash-es/get';
import {TestCaseLogo, AccountLogo, TaskLogo} from '@ones-design/icons';
import SoftwareDevLogo from '../../assets/software_management_svg.svg';
import WorkManagementLogo from '../../assets/work_management_svg.svg';
import GanttLogo from '../../assets/gantt_svg.svg';
import ReportingLogo from '../../assets/reporting_svg.svg';
import ResourceLogo from '../../assets/resource_planning_svg.svg';
import AutomationLogo from '../../assets/automation_svg.svg';
import CodeIntegrationLogo from '../../assets/code_integration_svg.svg';
import PipelineIntegrationLogo from '../../assets/pipeline_integration.svg';

import styles from './index.module.scss';

// 导入图标组件
import {ProjectLogo, WikiLogo} from '@ones-design/icons';

// 图标映射 - 使用 useMemo 缓存
const logoMap: Record<string, React.ComponentType<{className?: string}>> = {
  'ProjectLogo': ProjectLogo,
  'WikiLogo': WikiLogo,
  'TestCaseLogo': TestCaseLogo,
  'AccountLogo': AccountLogo,
  'TaskLogo': TaskLogo,
  'SoftwareDevLogo': ({className}) => <img src={SoftwareDevLogo} className={className} alt="SoftwareDevLogo" />,
  'WorkManagementLogo': ({className}) => <img src={WorkManagementLogo} className={className} alt="WorkManagementLogo" />,
  'GanttLogo': ({className}) => <img src={GanttLogo} className={className} alt="GanttLogo" />,
  'ReportingLogo': ({className}) => <img src={ReportingLogo} className={className} alt="ReportingLogo" />,
  'ResourceLogo': ({className}) => <img src={ResourceLogo} className={className} alt="ResourceLogo" />,
  'AutomationLogo': ({className}) => <img src={AutomationLogo} className={className} alt="AutomationLogo" />,
  'CodeIntegrationLogo': ({className}) => <img src={CodeIntegrationLogo} className={className} alt="CodeIntegrationLogo" />,
  'PipelineIntegrationLogo': ({className}) => <img src={PipelineIntegrationLogo} className={className} alt="PipelineIntegrationLogo" />,
};


export interface MenuItem {
  id?: string;
  name?: string;
  title?: string;
  link?: string;
  desc?: string;
  logo?: string;
  isBlank?: boolean;

}

interface SubMenuItemType {
  name: string;
  className?: string;
  menu?: MenuItem[];
  submenuItemClassName?: string;
  menuContentClassName?: string;
  style?: React.CSSProperties;
}

// 构建完整链接 - 使用 useMemo 缓存
const buildFullLink = (link: string, isExternalLink: boolean) => {
  if (!isExternalLink) {
    return `${URL_CONFIG.baseUrl}${link}`;
  }
  return link;
};

// 单个菜单项组件
const MenuItemComponent = memo(({
  item,
  index,
  submenuItemClassName,
}: {
  item: MenuItem;
  index: number;
  submenuItemClassName?: string;
}) => {
  // 使用 useMemo 缓存计算结果
  const linkData = useMemo(() => {
    const isExternalLink = item?.link?.startsWith('http') || false;
    const fullLink = buildFullLink(item?.link || '', isExternalLink);
    return {isExternalLink, fullLink};
  }, [item]);

  const itemData = useMemo(() => {
    const itemName = get(item, 'title') || get(item, 'name') || '';
    const itemDesc = get(item, 'desc') || '';
    const itemLogo = get(item, 'logo') || '';
    const itemStyle = get(item, 'style') || {};
    return {itemName, itemDesc, itemLogo, itemStyle};
  }, [item]);

  const LogoComponent = item.logo ? logoMap[item.logo] : null;

  return (
    <a
      className={`${submenuItemClassName} ${styles.link}`}
      key={index}
      href={linkData.fullLink}
    >
      {LogoComponent && <LogoComponent className={styles.logo}/>}
      <div>
        <div className={styles.name}>{itemData.itemName}</div>
        {itemData.itemDesc && <div className={styles.desc}>{itemData.itemDesc}</div>}
      </div>
    </a>
  );
});

export const SubMenu: React.FC<SubMenuItemType> = memo(({
  name,
  menu,
  submenuItemClassName,
  menuContentClassName,
}) => {
  // 使用 useMemo 缓存菜单项列表
  const menuItems = useMemo(() => {
    if (!menu) return null;

    return menu.map((item: MenuItem, index: number) => {

     return (
        <MenuItemComponent
          key={item.id || index}
          item={item}
          index={index}
          submenuItemClassName={`${submenuItemClassName} ${styles.item}`}
        />
      )
    }
);
  }, [menu, submenuItemClassName]);

  return (
    <div>
      <div className={styles.title}>{name ?? ''}</div>
      <div className={menuContentClassName ?? styles.content}>
        {menuItems}
      </div>
    </div>
  );
});