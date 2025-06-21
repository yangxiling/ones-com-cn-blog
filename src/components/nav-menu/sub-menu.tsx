import React from 'react';
import classnames from 'classnames';
import {PluginExportListFilled} from "@ones-design/icons";

interface SubMenuItemType {
  name: string;
  className?: string;
  itemNameKey?: string;
  col?: number;
  menu?: any;
  submenuTitleClassName?: string;
  submenuItemClassName?: string;
  onlyImg?: boolean;
  itemImgKey?: string;
  appendButton?: JSX.Element;
  appendButtonClassName?: string;
  getLink?: () => string;
  submenuItemImgClassName?: string;
  onPanelClose: () => void;
  menuContentClassName?: string;
  nameClassName?: string;
}


export const SubMenu: React.FC<SubMenuItemType> = ({
  name,
  className,
  itemNameKey = 'name',
  col = 1,
  menu,
  submenuTitleClassName,
  submenuItemClassName,
  onlyImg,
  itemImgKey = 'icon.sourceUrl',
  appendButton,
  appendButtonClassName,
  getLink = (item: any) => get(item, 'link'),
  submenuItemImgClassName,
  onPanelClose,
  menuContentClassName = '',
  nameClassName = '',
}) => {

  const onClick = (item: any) => {
    onPanelClose?.();
    // return item.isBlank ? window.open(getLink(item)) : Router.push(getLink(item));
  };

  return (<div className={className}>
    <div className={classnames('ease-in-title', submenuTitleClassName)}>{name}</div>
    <div
      className={classnames(
        'oac-grid oac-grid-cols-1',
        onlyImg && 'oac-gap-4',
        ['xl:oac-grid-cols-1', 'xl:oac-grid-cols-2'][col - 1],
        menuContentClassName
      )}
    >
      {menu?.map((item: any, index: number) => {
        const link = getLink(item);
        const isExternalLink = link?.startsWith('http');
        // return (
        //   <SimpleLink
        //     // style={{ transitionDelay: `${400 + 50 * index}ms` }}
        //     className={classnames('ease-in-submenu')}
        //     key={index}
        //     onClick={() => onClick(item)}
        //     href={link}
        //     target={item.isBlank ? '_blank' : '_self'}
        //     noDefaultColor
        //     // 必须设置，否则在blog页面会被加上blog前缀
        //     isExternalLink
        //     noFollow={isExternalLink}
        //   >
        //     {onlyImg ? (
        //       <CustomImage
        //         className={classnames(
        //           `oac-shadow xl:hover:oac-shadow-m oac-object-contain oac-mt-4 xl:oac-mt-0 oac-max-w-none oac-transition-shadow`,
        //           submenuItemImgClassName
        //         )}
        //         height={60}
        //         width={180}
        //         alt=""
        //         src={get(item, itemImgKey)}
        //       />
        //     ) : !item.icon ? (
        //       <div
        //         className={classnames(
        //           'ease-in-submenu-title oac-h-[54px] oac-leading oac-px-0 oac-py-4 xl:oac-p-3 oac-align-middle oac-rounded oac-whitespace-nowrap xl:hover:oac-bg-blue-5 oac-cursor-pointer oac-duration-300',
        //           submenuItemClassName
        //         )}
        //       >
        //         {get(item, itemNameKey)}
        //       </div>
        //     ) : (
        //       <GraphicCard
        //         type={GraphicCardType.IMG_IN_LEFT}
        //         size={GraphicCardSize.SM}
        //         imgContainerClassName={classnames(
        //           'oac-h-[28px] oac-w-[28px]',
        //           submenuItemImgClassName
        //         )}
        //         imgClassName={classnames('oac-align-top oac-object-cover !oac-w-full')}
        //         sourceUrl={item?.icon?.sourceUrl}
        //         title={get(item, itemNameKey)}
        //         desc={item.desc}
        //         className={classnames(
        //           'oac-items-center xl:oac-items-start oac-align-middle oac-px-0 oac-py-4 xl:oac-px-3 xl:oac-py-2 oac-rounded xl:hover:oac-bg-blue-5 oac-cursor-pointer oac-duration-300',
        //           submenuItemClassName
        //         )}
        //         descClassName="oac-hidden xl:oac-block oac-mt-1 oac-text-gray-80"
        //         titleClassName={classnames(
        //           'oac-text-16 oac-font-normal ease-in-submenu-title',
        //           nameClassName
        //         )}
        //       />
        //     )}
        //   </SimpleLink>
        // );
      })}
      <div
        // style={{ transitionDelay: `${400 + 50 * menu.length}ms` }}
        className={classnames('ease-in-submenu', appendButtonClassName)}
      >
        {appendButton}
      </div>
    </div>
    {/* </div> */}
  </div>);
};