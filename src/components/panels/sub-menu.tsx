import React from 'react';
import classnames from 'classnames';
import get from 'lodash-es/get';
import styles from './sub-menu.module.scss';

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
  onPanelClose: () => void;
  menuContentClassName?: string;
  nameClassName?: string;
}


export const SubMenu: React.FC<SubMenuItemType> = ({
  name,
  className,
  itemNameKey = 'name',
  menu,
  submenuTitleClassName,
  submenuItemClassName,
  onlyImg,
  itemImgKey = 'icon.sourceUrl',
  appendButton,
  appendButtonClassName,
  getLink = (item: MenuItem) => get(item, 'link'),
  submenuItemImgClassName,
  onPanelClose,
  menuContentClassName = '',
  nameClassName = '',
}) => {
  console.log('sub-menu', menu);
  const onClick = (item: MenuItem) => {
    onPanelClose?.();
    const link = getLink(item);
    if (link) {
      if (item.isBlank) {
        window.open(link, '_blank');
      } else {
        window.location.href = link;
      }
    }
  };

  return (
    <div >
      <div className={styles.title}>{name}</div>
      <div className={styles.content}>
        {menu?.map((item: MenuItem, index: number) => {
          const link = getLink(item);
          const isExternalLink = link?.startsWith('http');
          const itemName = get(item, itemNameKey);
          const itemIconUrl = get(item, itemImgKey);
          const itemDesc = get(item, 'desc');

          return (
            <a
              key={index}
              className={classnames('ease-in-submenu', 'oac-no-underline')}
              onClick={() => onClick(item)}
              href={link}
              target={item.isBlank ? '_blank' : '_self'}
              rel={isExternalLink ? 'nofollow' : undefined}
            >
              {onlyImg ? (
                <img
                  className={classnames(
                    `oac-shadow xl:hover:oac-shadow-m oac-object-contain oac-mt-4 xl:oac-mt-0 oac-max-w-none oac-transition-shadow`,
                    submenuItemImgClassName
                  )}
                  height={60}
                  width={180}
                  alt={itemName}
                  src={itemIconUrl}
                />
              ) : !item.icon ? (
                <div
                  className={styles.item}
                >
                  {itemName}
                </div>
              ) : (
                <div
                  className={classnames(
                    'oac-items-center xl:oac-items-start oac-align-middle oac-px-0 oac-py-4 xl:oac-px-3 xl:oac-py-2 oac-rounded xl:hover:oac-bg-blue-5 oac-cursor-pointer oac-duration-300 oac-flex',
                    submenuItemClassName
                  )}
                >
                  <div className={classnames('oac-h-[28px] oac-w-[28px] oac-mr-2', submenuItemImgClassName)}>
                    <img className='oac-align-top oac-object-cover !oac-w-full' src={itemIconUrl} alt={itemName} />
                  </div>
                  <div>
                    <div className={classnames('oac-text-16 oac-font-normal ease-in-submenu-title', nameClassName)}>
                      {itemName}
                    </div>
                    {itemDesc && <div className="oac-hidden xl:oac-block oac-mt-1 oac-text-gray-80">{itemDesc}</div>}
                  </div>
                </div>
              )}
            </a>
          );
        })}

      </div>
    </div>);
};