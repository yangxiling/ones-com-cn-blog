import React from 'react';
import {Button} from '@ones-design/core';
import styles from './nav.module.scss';
import onesLogo from '../../assets/onescom.svg';
import {Menu} from './menu';
import {URL_CONFIG} from '../../const/url-config';

export const NavMenu = React.memo(() => {

  const handleBtnClick = () => {
    window.location.href = 'https://ones.cn/service_success?utm_term=%E9%A2%84%E7%BA%A6%E6%BC%94%E7%A4%BA&_channel_track_key=NdBOAxB4&utm_source=ones-issue';
  };

  const handleTrialClick = () => {
    window.location.href = 'https://ones.cn/sign_up?utm_source=ones-issue&utm_term=home&utm_campaign=banner&_channel_track_key=KJ4xUv9v';
  };

  return (
    <nav id="nav-container" className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <a className={styles.logo} href={URL_CONFIG.baseUrl}>
            <img src={onesLogo} alt="ONES" />
          </a>

          <Menu />
        </div>
        <div className={styles.right}>
          <Button
            type="default"
            className={styles.phone}
            href={`${URL_CONFIG.baseUrl}/contact_us`}
          >
            Contact sales
          </Button>
          <Button type="link" className={styles.login} href={`${URL_CONFIG.baseUrl}/identity/login`}>Log in</Button>
          <Button type="primary" className={styles.trial} href={`${URL_CONFIG.baseUrl}/sign_up`}>Try for free</Button>
        </div>
      </div>
    </nav>
  );
});


