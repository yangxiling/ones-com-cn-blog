import { AppMarket } from '@ones-design/icons';
import { SubMenu } from './sub-menu';
import type {MenuItem} from './sub-menu';
import {ExpertQRCode} from './expert-qrcode';
// import ExpertForProduct from '../../images/expert-for-product.png';

interface MenuSection {
  name: string;
  menu: MenuItem[];
}

interface ProductMenu {
  base: MenuSection;
  app: MenuSection;
  otherProduct?: MenuSection & { isShow?: boolean };
}

// import {SubMenu} from '../index';


export const ProductMenuPanel = ({
  menu,
  onPanelClose,
}: {
  menu: ProductMenu;
  onPanelClose: () => void;
}) => {
  const otherProduct = menu.otherProduct;
  return (
    <>
      <div className="oac-flex oac-justify-end oac-mr-8 oac-space-x-[70px] oac-space-y-4 xl:oac-space-y-0">
        <div className="xl:oac-flex-shrink-0 xl:oac-w-[300px] oac-space-y-4">
          <SubMenu
            {...menu.base}
            onPanelClose={onPanelClose}
            submenuTitleClassName="xl:-oac-ml-3"
            submenuItemClassName="xl:oac-bg-blue-5 oac-w-[210px] xl:oac-w-[300px] xl:!oac-p-4 xl:oac-mt-4 xl:hover:oac-shadow-s !oac-items-center"
            submenuItemImgClassName=" !oac-h-[32px] !oac-w-[32px] xl:!oac-h-[56px] xl:!oac-w-[56px]"
            nameClassName="xl:!oac-font-bold"
          />
          {otherProduct?.isShow && (
            <SubMenu
              {...otherProduct}
              submenuTitleClassName="xl:-oac-ml-3"
              submenuItemClassName="xl:oac-bg-blue-5 oac-w-[210px] xl:oac-w-[300px] xl:!oac-p-4 xl:oac-mt-4 xl:hover:oac-shadow-s !oac-items-center"
              submenuItemImgClassName=" !oac-h-[32px] !oac-w-[32px] xl:!oac-h-[56px] xl:!oac-w-[56px]"
              nameClassName="xl:!oac-font-bold"
              onPanelClose={onPanelClose}
            />
          )}
        </div>

        <div>
          <SubMenu
            onPanelClose={onPanelClose}
            col={2}
            {...menu.app}
            submenuItemClassName="oac-w-[240px] xl:oac-mt-4"
            menuContentClassName="oac-gap-x-4"
            submenuItemImgClassName="!oac-h-[32px] !oac-w-[32px]"
            nameClassName="oac-mt-[4px] xl:!oac-font-bold"
          />
          <a
            onClick={onPanelClose}
            href="/app-center"
            className="ease-in-submenu ease-in-button oac-px-4 !oac-py-3 xl:oac-w-full xl:!oac-py-2 oac-items-center oac-w-[300px] oac-mt-2 xl:oac-mt-4 oac-rounded oac-flex oac-text-blue-60 hover:oac-bg-blue-5"
          >
            <AppMarket className="oac-mr-1" />
            前往应用中心探索更多应用
          </a>
        </div>
      </div>
      <ExpertQRCode
        title="了解更多产品细节"
      />
    </>
  );
};
