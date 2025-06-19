import React from 'react';
import styles from './NavMenuPanel.module.scss';

const products = [
  { icon: '📁', name: 'ONES Project', desc: '项目管理' },
  { icon: '📚', name: 'ONES Wiki', desc: '知识库管理' },
  { icon: '🤖', name: 'ONES Copilot', desc: 'AI助手', group: 'AI' },
];

const apps = [
  { name: 'ONES TestCase', desc: '测试管理' },
  { name: 'ONES Plan', desc: '项目集管理' },
  { name: 'ONES Performance', desc: '效能管理' },
  { name: 'ONES Automation', desc: '流程自动化' },
  { name: 'ONES Desk', desc: '工单管理' },
  { name: 'ONES Account', desc: '企业账号与目录' },
  { name: 'ONES Task', desc: '任务协作' },
  { name: 'ONES Resource', desc: '资源管理' },
];

const NavMenuPanel = () => (
  <div className={styles.panel}>
    <div className={styles.left}>
      <div className={styles.groupTitle}>基础产品</div>
      {products.filter(p => !p.group).map(p => (
        <div className={styles.product} key={p.name}>
          <span className={styles.icon}>{p.icon}</span>
          <div>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.desc}>{p.desc}</div>
          </div>
        </div>
      ))}
      <div className={styles.groupTitle}>ONES AI</div>
      {products.filter(p => p.group === 'AI').map(p => (
        <div className={styles.product} key={p.name}>
          <span className={styles.icon}>{p.icon}</span>
          <div>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.desc}>{p.desc}</div>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.center}>
      <div className={styles.groupTitle}>应用</div>
      <div className={styles.apps}>
        {apps.map(a => (
          <div className={styles.app} key={a.name}>
            <div className={styles.name}>{a.name}</div>
            <div className={styles.desc}>{a.desc}</div>
          </div>
        ))}
      </div>
      <a className={styles.more} href="#">前往应用中心探索更多应用</a>
    </div>
    <div className={styles.right}>
      <div className={styles.qrcodeBox}>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=ONES" alt="二维码" className={styles.qrcode} />
        <div className={styles.qrdesc}>了解更多产品细节<br />请扫码联系方案专家</div>
      </div>
    </div>
  </div>
);

export default NavMenuPanel; 