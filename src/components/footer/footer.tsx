import {socialLinks, footerData} from './const-ja';
import styles from './footer.module.scss';
import onesLogo from '../../assets/logo_dark.svg';
import {URL_CONFIG} from '../../const/url-config';



interface Column {
  title: string;
  child?: {
    title: string;
    link: string;
    target?: string;
    isExternal?: boolean;
  }[];
}

export const Footer = () => {
  const columns: Column[] = footerData;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainFooter}>
          <div className={styles.column}>
            <img src={onesLogo} alt="ONES Logo" style={{width: '134px', height: '24px'}} />
          </div>

          <div className={styles.productColumns}>
          {columns.map((column, index) => (
            <div key={index} className={styles.column}>
              <h5>{column.title}</h5>
              <ul>
                {column.child?.map((item, childIndex) => (
                  <li key={childIndex}>
                    <a href={item.isExternal ? item.link : `${URL_CONFIG.baseUrl}${item.link}`} rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className={styles.copyrightSection}>
        <div className={styles.copyrightText}>
          <div className={styles.socialLinks}>
            {socialLinks.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.slot} alt={item.type} />
              </a>
            ))}
          </div>
          <p className={styles.disclaimer}>© 2025 ONES.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
