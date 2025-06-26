import {URL_CONFIG} from "../const/url-config";

const menuData = {
  "menuProduct": {
    "fieldGroupName": "menu_product",
    "name": "製品",
    "menus": [
      {
        "name": "機能",
        "menu": [
          {
            "id": "project",
            "title": "プロジェクト管理",
            "desc": "製品開発プロセスの効率化に繋がる",
            "link": "/products/project",
            "extraClassName": "w-[300px] m_screen:w-[260px] mb-[10px]"
          },
          {
            "id": "wiki",
            "title": "ナレッジコラボレーション",
            "desc": "知識を共有・活用してサイロ化を解消",
            "link": "/products/wiki",
            "extraClassName": "w-[300px] m_screen:w-[260px]"
          }
        ]
      },
      {
        "name": "",
        "menu": [
          {
            "id": "gantt",
            "title": "ガントチャート",
            "desc": "作業を見える化、効率よく計画を立てる",
            "link": "/features/gantt",
            "logo": 'GanttLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "reporting",
            "title": "レポート",
            "desc": "実行可能な洞察を得て、より良い意思決定を行う",
            "link": "/features/reporting",
            "logo": 'ReportingLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "resource",
            "title": "リソースの最適化",
            "desc": "効果的なリソース配分と管理を行う",
            "link": "/features/worklogs",
            "logo": 'ResourceLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "automation",
            "title": "自動化",
            "desc": "業務効率を上げ、繰り返しの作業から解放される",
            "link": "/features/automations",
            "logo": 'AutomationLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "code_integration",
            "title": "コードインテグレーション",
            "desc": "コードリポジトリの連携により、開発をシームレスに進める",
            "link": "/products/code-integration",
            "logo": 'CodeIntegrationLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "pipeline_integration",
            "title": "パイプラインインテグレーション",
            "desc": "ビルドとデプロイメントの追跡を簡単にする",
            "link": "/products/pipeline-integration",
            "logo": 'PipelineIntegrationLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          }
        ]
      },
      {
        "name": "アドオン",
        "menu": [
          {
            "id": "task",
            "title": "ONES Task",
            "desc": "作業を一か所でよりスムーズに行い、生産性を最大化する",
            "link": "/products/task",
            "logo": 'TaskLogo'
          },
          {
            "id": "test_case",
            "title": "ONES TestCase",
            "desc": "QA チームがより良い製品を提供できるように支援する",
            "link": "/products/testcase",
            "logo": 'TestCaseLogo'
          }
        ]
      }
    ]
  },
  "menuSolution": {
    "fieldGroupName": "menu_solution",
    "name": "ソリューション",
    "menus": [
      {
        "name": "ユースケース",
        "menu": [
          {
            "id": "software_development",
            "title": "ソフトウェア開発",
            "desc": "高品質なソフトウェアをより迅速に提供する",
            "link": "/solutions/software-development",
            "logo": "SoftwareDevLogo",
          },
          {
            "id": "work_management",
            "title": "業務管理",
            "desc": "クロスファンクショナルチームで効率よく働いて目標を達成する",
            "link": "/solutions/work-management",
            "logo": "WorkManagementLogo",
          },
          {
            "id": "agile_development",
            "title": "アジャイル開発",
            "desc": "製品をより速く、より良くデリバリーする",
            "link": "/solutions/agile-development",
            "logo": "AgileLogo",
          },
          {
            "id": "waterfall_development",
            "title": "ウォーターフォール開発",
            "desc": "プロジェクトの目標と締め切りを明確にする",
            "link": "/solutions/waterfall-development",
            "logo": "WaterfallLogo",
          }
        ]
      }
    ]
  },
  "menuResource": {
    "fieldGroupName": "menu_resource",
    "name": "リソース",
    "menus": [
      {
        "name": "知る",
        "menu": [
          {
            "id": "academy",
            "title": "ONES Academy",
            "desc": "ONES Academy でスキルと生産性を向上させましょう",
            "link": "https://academy.ones.com/home-ja",
            "target": "_blank",
            "extraClassName": "w-[33.3%]",
            "isNew": true
          },
          {
            "id": "blog",
            "title": "ブログ",
            "desc": "生産性向上、製品ヒント、アップデートなどの最新情報を紹介",
            "link": "https://ones.com/ja/blog",
            "target": "_blank",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "docs",
            "title": "お役立ち資料",
            "desc": "ONES.com の機能の詳細をご覧ください",
            "link": "https://ja.docs.ones.com/",
            "target": "_blank",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "ones_vs_excel",
            "title": "vs Jira",
            "desc": "Jira の制限から解放され、ONES.com をお楽しみください",
            "link": "/compare/ones-vs-jira",
            "target": "_self",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "ones_vs_monday",
            "title": "vs Monday",
            "desc": "ソフトウェア開発に ONES.com が最適な理由",
            "link": "/compare/ones-vs-monday",
            "target": "_self",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "ones_vs_excel",
            "title": "vs Excel",
            "desc": "ONES.com に乗り換えて、プロジェクト管理が飛躍的に効率化する",
            "link": "/compare/ones-vs-excel",
            "target": "_self",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "migration",
            "title": "Jira、Confluence 移行",
            "desc": "Jira と Confluence からのシームレスな移行",
            "link": "/migration",
            "target": "_blank",
            "extraClassName": "w-[33.3%]",
            "isNew": true
          }
        ]
      },
      {
        "name": "つながる",
        "menu": [
          {
            "id": "contact_sales",
            "title": "営業に問い合わせる",
            "desc": "プラン、価格、および製品に関する専門的なアドバイス",
            "link": "/contact_us",
            "target": "_self",
            "extraClassName": "w-[260px] m_screen:w-[236px]"
          },
          {
            "id": "book_a_demo",
            "title": "デモを予約する",
            "desc": "詳細な製品紹介とパーソナライズされたデモ",
            "link": "/request_demo",
            "target": "_self",
            "extraClassName": "w-[260px] m_screen:w-[236px]"
          },
          {
            "id": "partners",
            "title": "パートナープログラム",
            "desc": "パートナープログラムを活用して、ビジネスの発展に繋がる",
            "link": "/partners",
            "target": "_self",
            "extraClassName": "w-[260px] m_screen:w-[236px]"
          }
        ]
      }
    ],
  },
  "menuPrice": {
    "fieldGroupName": "menu_price",
    "name": "料金プラン",
    "link": `${URL_CONFIG.baseUrl}/pricing`
  }
};

export default menuData;