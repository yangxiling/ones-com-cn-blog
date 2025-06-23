import {AppMarket} from '@ones-design/icons';
import {SubMenu} from './sub-menu';
import type {MenuItem} from './sub-menu';
import {Button} from '@ones-design/core';
import {ExpertQRCode} from './expert-qrcode';
import styles from './index.module.scss';
import productStyles from './product.module.scss';
interface MenuSection {
  name: string;
  menu: MenuItem[];
}

interface ProductMenu {
  base: MenuSection;
  app: MenuSection;
  otherProduct?: MenuSection & {isShow?: boolean};
}


export const ProductMenuPanel = ({
  menu,
  onPanelClose,
}: {
  menu: ProductMenu;
  onPanelClose: () => void;
}) => {
  const otherProduct = menu.otherProduct;
  return (

    <div className={styles.panel}>
      <div className={productStyles.left}>
        <div className={productStyles.base}>
          <SubMenu
            {...menu.base}
            
            onPanelClose={onPanelClose}
          />
          {otherProduct?.isShow && (
            <SubMenu
              {...otherProduct}
            />
          )}
        </div>

        <div className={productStyles.apps}>
          <SubMenu
            menuContentClassName={productStyles.apps}
            submenuItemClassName={productStyles.app}
            {...menu.app}
          />
          <Button
            className={productStyles.appButton}
            type="link"
            href="/app-center"
          >
            <AppMarket className={productStyles.appIcon} />
            前往应用中心探索更多应用
          </Button>
        </div>
      </div>
      <ExpertQRCode
        title="了解更多产品细节"
      />
    </div>

  );
};
