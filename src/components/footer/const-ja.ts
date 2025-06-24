import TwitterIcon from "../../assets/twitter_icon.svg";
import LinkedInIcon from "../../assets/linkedin_icon.svg";
import FacebookIcon from "../../assets/facebook_icon.svg";
import YouTuBeIcon from "../../assets/youtube_icon.svg";
// 由于目前还没有日语 linkedin 账号 & youtube 账号，所以由英文替换
export const socialLinks = [
  {
    type: "twitter",
    link: "https://twitter.com/JPN_ONES",
    slot: TwitterIcon,
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/company/ones-2022",
    slot: LinkedInIcon,
  },
  {
    type: "facebook",
    link: "https://www.facebook.com/ONESJPN",
    slot: FacebookIcon,
  },
  {
    type: "youtube",
    link: "https://www.youtube.com/channel/UC1234567890",
    slot: YouTuBeIcon,
  },
];


export const footerData =[
  {
    "title": "製品",
    "child": [
      {
        "title": "プロジェクト管理",
        "link": "/products/project"
      },
      {
        "title": "ナレッジコラボレーション",
        "link": "/products/wiki"
      },
      {
        "title": "ガントチャート",
        "link": "/features/gantt"
      },
      {
        "title": "レポート",
        "link": "/features/reporting"
      },
      {
        "title": "リソースの最適化",
        "link": "/features/worklogs"
      },
      {
        "title": "自動化",
        "link": "/features/automations"
      },
      {
        "title": "コードインテグレーション",
        "link": "/products/code-integration"
      },
      {
        "title": "パイプラインインテグレーション",
        "link": "/products/pipeline-integration"
      },
      {
        "title": "ONES Task",
        "link": "/products/task"
      },
      {
        "title": "ONES TestCase",
        "link": "/products/testcase"
      }
    ]
  },
  {
    "title": "ソリューション",
    "child": [
      {
        "title": "ソフトウェア開発",
        "link": "/solutions/software-development"
      },
      {
        "title": "業務管理",
        "link": "/solutions/work-management"
      },
      {
        "title": "アジャイル開発",
        "link": "/solutions/agile-development"
      },
      {
        "title": "ウォーターフォール開発",
        "link": "/solutions/waterfall-development"
      }
    ]
  },
  {
    "title": "リソース",
    "child": [
      {
        "title": "料金プラン",
        "link": "/pricing"
      },
      {
        "title": "ONES Academy",
        "link": "https://academy.ones.com/home-ja",
        "isExternal": true,
        "target": "_blank"
      },
      {
        "title": "ブログ",
        "link": "https://ones.com/ja/blog",
        "isExternal": true,
        "target": "_blank"
      },
      {
        "title": "お役立ち資料",
        "link": "https://ja.docs.ones.com/",
        "isExternal": true,
        "target": "_blank"
      },
      {
        "title": "Jira、Confluence 移行",
        "link": "/migration",
        "target": "_blank"
      },
      {
        "title": "営業に問い合わせる",
        "link": "/contact_us"
      },
      {
        "title": "デモを予約する",
        "link": "/request_demo"
      },
      {
        "title": "vs Jira",
        "link": "/compare/ones-vs-jira"
      },
      {
        "title": "vs Monday",
        "link": "/compare/ones-vs-monday"
      },
      {
        "title": "vs Excel",
        "link": "/compare/ones-vs-excel"
      }
    ]
  },
  {
    "title": "企業情報",
    "child": [
      {
        "title": "ONES.com について",
        "link": "/about"
      },
      {
        "title": "パートナープログラム",
        "link": "/partners"
      },
      {
        "title": "セキュリティ",
        "link": "/trust"
      },
      {
        "title": "利用規約",
        "link": "/trust/terms",
        "target": "_blank"
      },
      {
        "title": "プライバシーポリシー",
        "link": "/trust/privacy",
        "target": "_blank"
      }
    ]
  }
]