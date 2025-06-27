import React from 'react';
import styles from './nav.module.scss';
import onesLogo from '../../images/ones-logo.svg';
import {Menu} from './menu';
import {URL_CONFIG} from '../../const/url-config';

export const NavMenu = React.memo(() => {
  return (
    <nav id="nav-container" className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <a className={styles.logo} href={`${URL_CONFIG.baseUrl}`}>
            <img src={onesLogo} alt="ONES" />
          </a>

          <Menu />
        </div>
        <div className={styles.right}>
          <a className={styles.text} href={`${URL_CONFIG.baseUrl}/contact_us`}>
            <span>お問い合わせ</span>
          </a>
          <a className={styles.text} href={'https://ones.com/identity/login?ones_from=https://ones.com/project/?lang=ja&segment=bk9vBIvqW1RVne41A24YWqNUGxQeDPHH&lang=ja'}>
            <span>ログイン</span>
          </a>
          <a className={styles.trial} href={`${URL_CONFIG.baseUrl}/sign_up`}>
            <span >無料トライアル</span>
          </a>
        </div>
      </div>
    </nav>
  );
});
