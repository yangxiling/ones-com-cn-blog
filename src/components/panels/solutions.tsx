import { ExpertQRCode } from './expert-qrcode';
import { SubMenu } from './sub-menu';
import type { MenuItem } from './sub-menu';
// import ExpertForProduct from '../../images/expert-for-product.png'; // Using a placeholder for now

interface SolutionMenu {
  name: string;
  menu: MenuItem[];
}

export const SolutionsPanel = ({
  menu,
  onPanelClose,
}: {
  menu: SolutionMenu[];
  onPanelClose: () => void;
}) => {
  return (
    // <div className={}>
    //   <div className={}>
    //     {menu.map((item, index: number) => (
    //       <SubMenu
    //         key={index}
    //         {...item}
    //         col={item.name === '场景' ? 2 : 1}
    //         itemNameKey="resolve.acfSolution.solutionTitle"
    //         getLink={(item: MenuItem) => `/solutions/${item.resolve?.slug}`}
    //         onPanelClose={onPanelClose}
    //         menuContentClassName={item.name === '场景' ? 'xl:!oac-grid-cols-2' : ''}
    //       />
    //     ))}
    //   </div>
    //   <ExpertQRCode
    //     title="了解更多解决方案"
    //   />
    // </div>
    <div>jiejuefangan</div>
  );
};
