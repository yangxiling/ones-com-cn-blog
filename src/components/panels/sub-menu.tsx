import React from 'react';
import classnames from 'classnames';
import get from 'lodash-es/get';
import styles from './index.module.scss';
  
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
      <div className={menuContentClassName}>
        {menu?.map((item: MenuItem, index: number) => {
          const link = getLink(item);
          const isExternalLink = link?.startsWith('http');
          const itemName = get(item, itemNameKey);
          const itemIconUrl = get(item, itemImgKey);
          const itemDesc = get(item, 'desc');

          return (
            <a
              className={submenuItemClassName}
              key={index}
              onClick={() => onClick(item)}
              href={link}
              target={item.isBlank ? '_blank' : '_self'}
              rel={isExternalLink ? 'nofollow' : undefined}
            >
              {onlyImg ? (
                <img
                  className={
                    submenuItemImgClassName
                  }
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
                  className={ submenuItemClassName }
                >
                  <div className={ submenuItemImgClassName}>
                    <img className='' src={itemIconUrl} alt={itemName} />
                  </div>
                  <div>
                    <div className=''>
                      {itemName}
                    </div>
                    {itemDesc && <div className="">{itemDesc}</div>}
                  </div>
                </div>
              )}
            </a>
          );
        })}
        <div className=''>
          {appendButton}
        </div>
      </div>
    </div>);
};