import {ExpertQRCode} from './expert-qrcode';
import {SubMenu} from './sub-menu';
import type {MenuItem} from './sub-menu';
import styles from './index.module.scss';
import solutionsStyles from './solutions.module.scss';

// import ExpertForProduct from '../../images/expert-for-product.png'; // Using a placeholder for now

interface SolutionMenu {
  name: string;
  menu: MenuItem[];
}

export const SolutionsPanel = ({
  menu,

}: {
  menu: SolutionMenu[];

}) => {
  return (
    <div className={styles.panel}>
      <div className={solutionsStyles.left}>
        <SubMenu
          key='0'
          {...menu[0]}
          itemNameKey="resolve.acfSolution.solutionTitle"
          menuContentClassName={solutionsStyles.content}
          submenuItemClassName={solutionsStyles.item}
          getLink={(item: MenuItem) => `/solutions/${item.resolve?.slug}`}
        />

        <SubMenu
          key='1'
          {...menu[1]}
          itemNameKey="resolve.acfSolution.solutionTitle"
          getLink={(item: MenuItem) => `/solutions/${item.resolve?.slug}`}
          menuContentClassName={solutionsStyles.sceneContent}
          submenuItemClassName={solutionsStyles.sceneItem}
        />

        <SubMenu
          key='2'
          {...menu[2]}
          itemNameKey="resolve.acfSolution.solutionTitle"
          getLink={(item: MenuItem) => `/solutions/${item.resolve?.slug}`}
          menuContentClassName={solutionsStyles.content}
          submenuItemClassName={solutionsStyles.item}
        />

      </div>
      <ExpertQRCode
        title="了解更多解决方案"
      />
    </div>

  );
};
