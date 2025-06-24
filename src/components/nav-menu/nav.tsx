import React from 'react';
import {Button} from '@ones-design/core';
import styles from './nav.module.scss';
import onesLogo from '../../images/ones-logo.svg';
import Phone from '../../images/phone-icon.svg';
import infoTechInnovationIcon from '../../images/info-tech-innovation-icon.svg';
import { Menu } from './menu';

const menuItems = [
  {
    key: 'product',
    label: <span style={{fontSize: '16px'}}>产品 </span>,
    children: [
      {key: 'product1', label: '产品一'},
      {key: 'product2', label: '产品二'},
    ],
  },
  {
    key: 'solution',
    label: <span style={{fontSize: '16px'}}>解决方案 </span>,

    children: [
      {key: 'solution1', label: '解决方案一'},
      {key: 'solution2', label: '解决方案二'},
    ],
  },
  {
    key: 'case',
    label: <span style={{fontSize: '16px'}}>客户案例</span>,

    children: [
      {key: 'case1', label: '案例一'},
      {key: 'case2', label: '案例二'},
    ],
  },
  {
    key: 'support',
    label: <span style={{fontSize: '16px'}}>服务与支持</span>,
    children: [
      {key: 'support1', label: '支持一'},
      {key: 'support2', label: '支持二'},
    ],
  },
  {key: 'pricing', label: <a style={{fontSize: '16px'}} className={styles.pricing} href='https://ones.cn/pricing'>产品定价</a>},

  {
    key: 'xinchuang', label: <div style={{color: '#1890ff'}}>
      <img src={infoTechInnovationIcon} alt="信创" />
      信创
    </div>},
];

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

          <Menu items={menuItems} />
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


