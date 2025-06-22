import React from 'react';
import ExpertQrcode from '../../images/expert-qrcode.png';
import styles from './index.module.scss';

export const ExpertQRCode: React.FC<{
  title: string;
  desc?: string;
}> = ({title, desc='请扫码联系我们的方案专家'}) => {
  return (
    <div className={styles.right}>
      <img src={ExpertQrcode} alt="qrcode" className={styles.qrcode}/>
      <p className={styles.qrtitle}>{title}</p>
      <p className={styles.qrdesc}> {desc}</p>
    </div>
  );
}; 