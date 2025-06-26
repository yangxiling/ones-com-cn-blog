import {SubMenu} from './sub-menu';
import type {MenuItem} from './sub-menu';
import styles from './index.module.scss';

interface SupportsMenu {
  name: string;
  menus: MenuItem[];
}

export const ResourcesPanel = ({
  menus
}: {
  menus: SupportsMenu[];
}) => {

  return (
    <div className={styles.panel}>
      <div className={styles.resources}>
          <SubMenu
          key='0'
          menuContentClassName={styles.resourcesLearn}
            {...menus[0]}
          />
        <SubMenu
          key='1'
          menuContentClassName={styles.resourcesConnect}
          {...menus[1]}
        />
      </div>
    </div>
  )
};
