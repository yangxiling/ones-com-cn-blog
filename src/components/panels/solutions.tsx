import {ExpertQRCode} from './expert-qrcode';
import {SubMenu} from './sub-menu';
import type {MenuItem} from './sub-menu';
import { ArrowRight } from '@ones-design/icons'
import {URL_CONFIG} from '../../const/url-config';
import styles from './index.module.scss';
import solutionsStyles from './solutions.module.scss';


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
      <div className={solutionsStyles.wrapper}>
        <div className={solutionsStyles.left}>
        <SubMenu
          key='0'
          {...menu[0]}
          itemNameKey="resolve.acfSolution.solutionTitle"
          menuContentClassName={solutionsStyles.content}
          getLink={(item: MenuItem) => `/solutions/${item.resolve?.slug}`}
        />

        <SubMenu
          key='1'
          {...menu[1]}
          itemNameKey="resolve.acfSolution.solutionTitle"
          getLink={(item: MenuItem) => `/solutions/${item.resolve?.slug}`}
          menuContentClassName={solutionsStyles.sceneContent}
        />

        <SubMenu
          key='2'
          {...menu[2]}
          itemNameKey="resolve.acfSolution.solutionTitle"
          getLink={(item: MenuItem) => `/solutions/${item.resolve?.slug}`}
          menuContentClassName={solutionsStyles.content}
          />
        </div>
        <button className={solutionsStyles.button}>
          <a href={URL_CONFIG.baseUrl + '/solutions'}>更多解决方案</a>
          <ArrowRight style={{marginLeft: '10px'}}/>
        </button>
      </div>

      <ExpertQRCode
        title="了解更多解决方案"
        QRcodeType='QRcode'
      />
    </div>

  );
};
