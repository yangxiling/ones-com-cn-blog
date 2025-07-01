import React from 'react';
import footerData from '../../data/footer.json';
import styles from './footer.module.scss';
import OnesLogo from '../../assets/images/ones-logo.svg';
import {Phone} from '@ones-design/icons';
import {URL_CONFIG } from '../../const/url-config';
import WechatIcon from '../../assets/images/wechat.svg';
import ZhihuIcon from '../../assets/images/zhihu.svg';
import BilibiliIcon from '../../assets/images/bilibili.svg';

interface Link {
  name: string;
  url: string;
  isExternal?: boolean;
}

interface Column {
  title: string;
  links?: Link[];
  viewMore?: Link;
  isQRCode?: boolean;
  qrCodeImage?: string;
}

export const Footer = () => {
  const columns: Column[] = footerData;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainFooter}>
          <div className={styles.column}>
            <img src={OnesLogo} alt="ONES Logo" style={{marginBottom: '20px', height: '24px'}} />
          </div>
          {columns.map((column, index) => (
            <div key={index} className={`${styles.column} ${column.isQRCode ? styles.qrcodeColumn : ''}`}>
              <h5>{column.title}</h5>
              {column.isQRCode ? (
                <img src='/ones-app-qrcode.png' alt="QR Code" style={{width: '100px', height: '100px'}} />
              ) : (
                <>
                  <ul>
                    {column.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={`${URL_CONFIG.baseUrl}${link.url}`} rel="noopener noreferrer">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {column.viewMore && (
                    <div className={styles.viewMore}>
                      <a href={`${URL_CONFIG.baseUrl}${column.viewMore.url}`}>{column.viewMore.name} &rarr;</a>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        {/* 底部链接 */}
        <div className={styles.subFooter}>
          <div className={styles.linksContact}>
            <img src='/footer-catalog.png' alt="email" />
            <a href={`${URL_CONFIG.baseUrl}/terms`} className={styles.contactItem}>服务条款</a>
            <a href={`${URL_CONFIG.baseUrl}/privacy`} className={styles.contactItem}>隐私政策</a>
            <a href="tel:400-666-1399" className={styles.contactItem}>
              <Phone style={{marginRight: '5px'}} />
              400-666-1399
            </a>
            
            <a href="mailto:support@ones.cn" className={styles.contactItem}> <img style={{marginRight: '5px'}} src='/footer-mail.png' alt="email" />support@ones.cn</a>
          </div>
          <div className={styles.socialIcons}>
            <img src='/footer-wechat.png' alt="微信" />
      
            <a href="https://www.zhihu.com/org/ones-57-5" target="_blank" rel="noopener noreferrer">
              <img src='/footer-zhihu.png' alt="知乎" />
            </a>
            <a href="https://space.bilibili.com/1399336503" target="_blank" rel="noopener noreferrer">
              <img src='/footer-bilibili.png' alt="Bilibili" />
            </a>
          </div>
        </div>
        {/* 备案 */}
      </div>
      <div className={styles.copyrightSection}>
        <div className={styles.copyrightText}>
          <p>Copyright ©2024 ONES.CN 深圳复临科技有限公司 粤ICP备15032127号</p>
          <p className={styles.disclaimer}>* 本网站所有数据来源于客户访谈、使用情况调研等相关结果, 最终解释权归 ONES 所有</p>
        </div>
      </div>
    </footer>
  );
};
