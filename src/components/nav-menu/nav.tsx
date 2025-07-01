import React from 'react';
import {Button} from '@ones-design/core';
import styles from './nav.module.scss';
import onesLogo from '../../assets/images/ones-logo.svg';
import Phone from '../../assets/images/phone-icon.svg';
import { Menu } from './menu';

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
          <a className={styles.logo} href="https://ones.cn">
            <img src={onesLogo} alt="ONES" />
          </a>

          <Menu />
        </div>
        <div className={styles.right}>
          <Button
            onClick={handleBtnClick}
            type="default"
            className={styles.phone}
          >
            <img style={{marginRight: '5px'}} src={Phone} alt="Phone" />
            400-666-1399

          </Button>
          <Button type="link" className={styles.login} href='https://ones.cn/identity/login'>登录</Button>
          <Button type="primary" className={styles.trial} onClick={handleTrialClick}>免费试用</Button>
        </div>
      </div>
    </nav>
  );
});


