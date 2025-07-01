import {SubMenu} from './sub-menu';
import type {MenuItem} from './sub-menu';
import {ArrowRight} from '@ones-design/icons'
import styles from './index.module.scss';
import supportsStyles from './supports.module.scss';
import { URL_CONFIG } from '../../const/url-config';

// 导入图片
import supportImg from '../../assets/images/support.webp';
import support2Img from '../../assets/images/suppot2.webp';

interface BlogItem {
  title: string;
  blogType: {name: string};
  photo: {sourceUrl: string};
  relatedBlog: {link: string};
}

interface SupportsMenu {
  name: string;
  menu: {name: string; menu: MenuItem[]}[];
  info: {
    title: string;
    recommend: {
      blog: {
        acfBlogRecommend: {
          blogRecommendBlogs: BlogItem[];
        };
      };
    };
  };
}

export const SupportsPanel = ({
  menu,
  info
}: {
  menu: SupportsMenu;
  info: SupportsMenu['info'];
}) => {
  // const blogItems = info.recommend.blog.acfBlogRecommend.blogRecommendBlogs;

  return (
    <div className={styles.panel}>
      <div className={supportsStyles.left}>
        <SubMenu
          key='0'
          menuContentClassName={supportsStyles.content}
          appendButton={
            <a href='https://ones.cn/blog' type='text' style={{color: 'var(--blue-700)'}}>
              更多文档和资源
              <ArrowRight style={{marginLeft: '10px'}} />
            </a>
          }
          {...menu[0]}
        />
        <SubMenu
          key='1'
          menuContentClassName={supportsStyles.content}
          {...menu[1]}
        />
        <SubMenu
          key='2'
          menuContentClassName={supportsStyles.content}
          {...menu[2]}
        />

      </div>
      <div className={supportsStyles.right}>
        <div className={styles.title}>{info.title}</div>
        <div className={supportsStyles.content}>
          <a href='https://ones.cn/blog' >
            <img src={supportImg} alt={'support'} className={supportsStyles.blogImg} />
          </a>
          <a href='https://ones.cn/blog' >
            <img src={support2Img} alt={'support'} className={supportsStyles.blogImg} />
          </a>

          <a href='https://ones.cn/blog' type='text' style={{color: 'var(--blue-700)'}}>
            ONES Blog
            <ArrowRight style={{marginLeft: '10px'}} />
          </a>
        </div>
      </div>
    </div>
  )
};
