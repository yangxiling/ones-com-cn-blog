import {URL_CONFIG} from "../const/url-config";

const menuData = {
  "menuProduct": {
    "fieldGroupName": "menu_product",
    "name": "Product",
    "menus": [
      {
        "name": "Features",
        "menu": [
          {
            "id": "project",
            "title": "Project management",
            "desc": "Ensure seamless product development processes",
            "link": "/products/project",
            "extraClassName": "w-[300px] m_screen:w-[260px] mb-[10px]"
          },
          {
            "id": "wiki",
            "title": "Knowledge collaboration",
            "desc": "Connect all knowledge without silos",
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
            "title": "Gantt",
            "desc": "Plan and visualize all the work on Gantt chart",
            "link": "/features/gantt",
            "logo": 'GanttLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "reporting",
            "title": "Reporting",
            "desc": "Get actionable insights and make better decisions",
            "link": "/features/reporting",
            "logo": 'ReportingLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "resource",
            "title": "Resource planning",
            "desc": "Schedule and manage resources  more efficiently",
            "link": "/features/worklogs",
            "logo": 'ResourceLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "automation",
            "title": "Automation",
            "desc": "Speed up work process and leave repetitive work behind",
            "link": "/features/automations",
            "logo": 'AutomationLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "code_integration",
            "title": "Code Integration",
            "desc": "Link code to project lifecycle for seamless development",
            "link": "/products/code-integration",
            "logo": 'CodeIntegrationLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          },
          {
            "id": "pipeline_integration",
            "title": "Pipeline Integration",
            "desc": "Effortless build and deployment tracking",
            "link": "/products/pipeline-integration",
            "logo": 'PipelineIntegrationLogo',
            "extraClassName": "w-[calc(50%-5px)] odd:mr-[10px]"
          }
        ]
      },
      {
        "name": "Add-ons",
        "menu": [
          {
            "id": "task",
            "title": "ONES Task",
            "desc": "Get more done in one place to maximize productivity",
            "link": "/products/task",
            "logo": 'TaskLogo'
          },
          {
            "id": "test_case",
            "title": "ONES TestCase",
            "desc": "Enable QA teams to deliver better products",
            "link": "/products/testcase",
            "logo": 'TestCaseLogo'
          }
        ]
      }
    ]
  },
  "menuSolution": {
    "fieldGroupName": "menu_solution",
    "name": "Solutions",
    "menus": [
      {
        "name": "Use cases",
        "menu": [
          {
            "name": "Software development",
            "link": "/solutions/software-development",
            "desc": "Ship quality software faster and better",
            "logo": "SoftwareDevLogo",

          },
          {
            "name": "Work management",
            "link": "/solutions/work-management",
            "desc": "Work smarter and exceed goals in cross-functional teams",
            "logo": "WorkManagementLogo",
          }
        ]
      }
    ]
  },
  "menuResource": {
    "fieldGroupName": "menu_resource",
    "name": "Resources",
    "menus": [
      {
        "name": "Learn",
        "menu": [
          {
            "id": "academy",
            "title": "ONES Academy",
            "desc": "Level up your skills and productivity with ONES Academy",
            "link": "https://academy.ones.com/home",
            "target": "_blank",
            "extraClassName": "w-[33.3%]",
            "isNew": true
          },
          {
            "id": "blog",
            "title": "Blog",
            "desc": "Explore the latest on productivity, product tips, updates, and more",
            "link": "https://ones.com/blog",
            "target": "_blank",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "docs",
            "title": "Docs",
            "desc": "Discover the details about ONES.com features",
            "link": "https://docs.ones.com",
            "target": "_blank",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "ones_vs_excel",
            "title": "vs Jira",
            "desc": "Get rid of the limitations of Jira and enjoy ONES.com",
            "link": "/compare/ones-vs-jira",
            "target": "_self",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "ones_vs_monday",
            "title": "vs Monday",
            "desc": "Why ONES.com is the better choice for software development",
            "link": "/compare/ones-vs-monday",
            "target": "_self",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "ones_vs_excel",
            "title": "vs Excel",
            "desc": "Switch to ONES.com for a project management jumpstart",
            "link": "/compare/ones-vs-excel",
            "target": "_self",
            "extraClassName": "w-[33.3%]"
          },
          {
            "id": "migration",
            "title": "Jira & Confluence migration",
            "desc": "Seamless transition from Jira & Confluence ",
            "link": "/migration",
            "target": "_blank",
            "extraClassName": "w-[33.3%]",
            "isNew": true
          }
        ]
      },
      {
        "name": "Connect",
        "menu": [
          {
            "id": "contact_sales",
            "title": "Contact sales",
            "desc": "Expert guidance on plans, pricing, and product questions",
            "link": "/contact_us",
            "target": "_self",
            "extraClassName": "w-[260px] m_screen:w-[236px]"
          },
          {
            "id": "book_a_demo",
            "title": "Book a demo",
            "desc": "Detailed product introduction and personalized demo",
            "link": "/request_demo",
            "target": "_self",
            "extraClassName": "w-[260px] m_screen:w-[236px]"
          },
          {
            "id": "partners",
            "title": "Partner programs",
            "desc": "Grow your business with our partner programs",
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
    "name": "Pricing",
    "link": `${URL_CONFIG.baseUrl}/pricing`
  }
};

export default menuData;