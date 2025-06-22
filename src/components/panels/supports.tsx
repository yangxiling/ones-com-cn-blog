import { ExpertQRCode } from '../expert-qrcode';
import { SubMenu } from './sub-menu';
import type { MenuItem } from './sub-menu';
import ExpertForProduct from '../../images/expert-for-product.png'; // Placeholder

interface BlogItem {
  title: string;
  blogType: { name: string };
  photo: { sourceUrl: string };
  relatedBlog: { link: string };
}

interface SupportsMenu {
  name: string;
  menu: { name: string; menu: MenuItem[] }[];
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
  onPanelClose,
}: {
  menu: SupportsMenu;
  onPanelClose: () => void;
}) => {
  const blogItems = menu.info.recommend.blog.acfBlogRecommend.blogRecommendBlogs;

  return (
    <div className="">
      {/* <div className="ease-in-panel-content oac-flex oac-flex-1 oac-justify-end oac-mr-6 oac-space-y-4 xl:oac-space-x-[60px] xl:oac-space-y-0">
        {menu.menu.map((item, index: number) => (
          <SubMenu
            key={index}
            {...item}
            onPanelClose={onPanelClose}
          />
        ))}
      </div>
      <div className="oac-w-[300px] oac-pl-8 oac-ml-8">
        <div className="ease-in-title">{menu.info.title}</div>
        <div className="oac-space-y-4 oac-mt-4">
          {blogItems.map((blog, index) => (
            <a key={index} href={blog.relatedBlog.link} target="_blank" rel="noopener noreferrer" className="oac-flex oac-items-center oac-no-underline oac-text-black">
              <img src={blog.photo.sourceUrl} alt={blog.title} className="oac-w-[120px] oac-h-[68px] oac-object-cover oac-mr-4 rounded" />
              <div>
                <p className="oac-text-sm oac-font-bold">{blog.title}</p>
                <p className="oac-text-xs oac-text-gray-500">{blog.blogType.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <ExpertQRCode
        title="获取专属产品演示"
      /> */}
  fuwuyuzhichi
    </div>
  )
};
