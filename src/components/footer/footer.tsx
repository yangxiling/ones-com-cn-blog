import React from 'react';
import footerData from '../../data/footer.json';
import styles from './footer.module.scss';
import OnesLogo from '../../images/ones-logo.svg';
import {URL_CONFIG} from '../../const/url-config';



interface Column {
  title: string;
  child?: {
    title: string;
    link: string;
    target?: string;
  }[];
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
            <div key={index} className={styles.column}>
              <h5>{column.title}</h5>
              <ul>
                {column.child?.map((item, childIndex) => (
                  <li key={childIndex}>
                    <a href={`${URL_CONFIG.baseUrl}${item.link}`} rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <div className={styles.copyrightText}>
          <p>Copyright ©2024 ONES.CN 深圳复临科技有限公司 粤ICP备15032127号</p>
          <p className={styles.disclaimer}>© 2025 ONES.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
