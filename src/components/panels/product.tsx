import {SubMenu} from './sub-menu';
import type {MenuItem} from './sub-menu';
import styles from './index.module.scss';
import productStyles from './product.module.scss';

interface MenuSection {
  name: string;
  menus: MenuItem[];
}

export const ProductMenuPanel = ({
  menus,
}: {
  menus: MenuSection[];
  }) => {
  console.log(productStyles.productFeaturesItem,'productFeaturesItem');
  return (
    <div className={styles.panel}>
      <div className={productStyles.product}>
        <SubMenu
          key='0'
          menuContentClassName={productStyles.productFeatures}
          submenuItemClassName={productStyles.productFeaturesItem}
          {...menus[0]}
        />

        <SubMenu
          key='1'
          menuContentClassName={productStyles.productMiddle}
          submenuItemClassName={productStyles.item}
          {...menus[1]}
        />
        <SubMenu
          key='2'
          menuContentClassName={productStyles.productAddons}
          submenuItemClassName={productStyles.item}
          {...menus[2]}
        />
      </div>
    </div>

  );
};
