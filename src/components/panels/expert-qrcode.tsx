import React from 'react';
import QRcode from '../../assets/images/expert-qrcode.png';
import productQRcode from '../../assets/images/expert-for-product.png';
import caseQRcode from '../../assets/images/expert-for-case.png';
import styles from './index.module.scss';

const expertQRcodeMap = {
  product: productQRcode,
  case: caseQRcode,
  QRcode: QRcode,
};


export const ExpertQRCode: React.FC<{
  title: string;
  desc?: string;
  QRcodeType: 'product' | 'case' | 'QRcode';
}> = ({title, desc='请扫码联系我们的方案专家', QRcodeType}) => {
  return (
    <div className={styles.right}>
      <img src={expertQRcodeMap[QRcodeType]} alt="qrcode" className={styles.qrcode}/>
      <p className={styles.qrtitle}>{title}</p>
      <p className={styles.qrdesc}> {desc}</p>
    </div>
  );
}; 