import { ExpertQRCode } from './expert-qrcode';
import { Button } from '@ones-design/core';
import {SubMenu} from './sub-menu';
import type {MenuItem, CustomerInfo} from './sub-menu';
import styles from './index.module.scss';
import customerCaseStyles from './customer-case.module.scss';
import { URL_CONFIG } from '../../const/url-config';


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
  return (
    <div className={styles.panel}>
      <div className={styles.left}>
        <div className={styles.group}>
          {menu.map((item, index: number) => (
            <SubMenu
              className={styles.subMenu}
              menuContentClassName={customerCaseStyles.content}
              submenuItemClassName={customerCaseStyles.item}
              submenuItemImgClassName={customerCaseStyles.img}
              onlyImg
              key={index}
              {...item}
              itemImgKey="customerInfo.acfCustomerCase.customerCaseCustomer.acfCustomer.customerLogo.sourceUrl"
              getLink={(item: MenuItem) => `${URL_CONFIG.baseUrl}/customers/${item.customerInfo?.slug}`}
              onPanelClose={onPanelClose}
            />
          ))}
        </div>
        <Button type="link" href = {`${URL_CONFIG.baseUrl}/customers`}>
            查看更多客户案例 →
        </Button>
      </div>
      <ExpertQRCode title="了解更多客户案例细节" />
    </div>
  );
};
