import {SubMenu} from './sub-menu';
import type {MenuItem} from './sub-menu';
import styles from './index.module.scss';

interface SolutionMenu {
  name: string;
  menus: MenuItem[];
}

export const SolutionsPanel = ({
  menus,
}: {
  menus: SolutionMenu[];
}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.solutions}>
        {menus.map((item, index) => (
          <SubMenu
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};