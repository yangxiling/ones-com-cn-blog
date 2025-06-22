import { ExpertQRCode } from './expert-qrcode';
import { Button } from '@ones-design/core';
import {SubMenu} from './sub-menu';
import type {MenuItem, CustomerInfo} from './sub-menu';
import styles from './index.module.scss';
import customerCaseStyles from './customer-case.module.scss';


interface CustomerMenu {
  name: string;
  menu: {
   customerInfo: CustomerInfo;
  }[];
}

export const CustomerCasePanel = ({
  menu,
  onPanelClose,
}: {
  menu: CustomerMenu[];
  onPanelClose: () => void;
  }) => {
  console.log('客户案例',menu);
  return (
    <div className={styles.panel}>
      <div className={styles.left}>
        <div className={styles.group}>
          {menu.map((item, index: number) => (
            <SubMenu
              className={styles.subMenu}
              menuContentClassName={customerCaseStyles.content}
              onlyImg
              key={index}
              {...item}
              col={1}
              itemImgKey="customerInfo.acfCustomerCase.customerCaseCustomer.acfCustomer.customerLogo.sourceUrl"
              getLink={(item: MenuItem) => `/customers/${item.customerInfo?.slug}`}
              onPanelClose={onPanelClose}
            />
          ))}
        </div>
        <Button type="link" href = '/customers'>
            查看更多客户案例 →
        </Button>
      </div>
      <ExpertQRCode title="了解更多客户案例细节" />
    </div>
  );
};
