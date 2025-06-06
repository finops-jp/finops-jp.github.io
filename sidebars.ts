import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  about: [{type: 'autogenerated', dirName: 'about'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  'what-is-finops': [
    'introduction/what-is-finops',
    {
      type: 'link',
      label: 'FinOpsフレームワーク',
      href: 'https://finops-jp.github.io/docs/framework',
    },
    {
      type: 'link',
      label: 'FinOps用語',
      href: 'https://finops-jp.github.io/docs/assets/terminology',
    },
  ],

  framework: [
    {
      type: 'link',
      label: 'FinOpsとは',
      href: 'https://finops-jp.github.io/docs/introduction/what-is-finops',
    },
    {
      type: 'category',
      label: 'FinOpsフレームワーク',
      link: {
        type: 'doc',
        id: 'framework/index',
      },
      items: [
        'framework/principles',
        {
          type: 'category',
          label: 'FinOpsペルソナ',
          description: 'FinOpsの分野には、さまざまなペルソナが含まれます。それらのペルソナ、その役割、要件について詳しく理解します。',
          link: {
            type: 'doc',
            id: 'framework/personas/index',
          },
          items: [
            'framework/personas/finops-practitioner',
            'framework/personas/leadership',
            'framework/personas/product',
            'framework/personas/engineering',
            'framework/personas/finance',
            'framework/personas/procurement',
          ],
        },
        'framework/phases',
        'framework/maturity-model',
        {
          type: 'category',
          label: 'FinOpsドメイン',
          description: 'FinOpsドメインは、活動やナレッジの領域を表しています。FinOpsを採用するすべての組織は、すべてのFinOpsドメインで活動を行うことになります。',
          link: {
            type: 'doc',
            id: 'framework/domains/index',
          },
          items: [
            'framework/domains/understand-cloud-usage-cost',
            'framework/domains/quantify-business-value',
            'framework/domains/optimize-cloud-usage-cost',
            'framework/domains/manage-finops-practice',
          ],
        },
        {
          type: 'category',
          label: 'FinOpsケイパビリティ',
          description: 'FinOpsケイパビリティは、対応するFinOpsドメインをサポートする機能的な活動領域を表しています。各ケイパビリティには、実際のFinOpsプラクティスに関連する定義、主要なペルソナ、パフォーマンスメトリクス、機能的なアクティビティが含まれています。',
          link: {
            type: 'doc',
            id: 'framework/capabilities/index',
          },
          items: [
            'framework/capabilities/data-ingestion',
            'framework/capabilities/allocation',
            'framework/capabilities/reporting-analytics',
            'framework/capabilities/anomaly-management',
            'framework/capabilities/planning-estimating',
            'framework/capabilities/forecasting',
            'framework/capabilities/budgeting',
            'framework/capabilities/benchmarking',
            'framework/capabilities/unit-economics',
            'framework/capabilities/architecting-for-cloud',
            'framework/capabilities/rate-optimization',
            'framework/capabilities/workload-optimization',
            'framework/capabilities/cloud-sustainability',
            'framework/capabilities/licensing-saas',
            'framework/capabilities/finops-parctice-operations',
            'framework/capabilities/cloud-policy-governance',
            'framework/capabilities/finops-assessment',
            'framework/capabilities/finops-tools-services',
            'framework/capabilities/finops-education-enablement',
            'framework/capabilities/invoicing-chargeback',
            'framework/capabilities/onboarding-workloads',
            'framework/capabilities/intersecting-disciplines',
          ],
        },
        'framework/scopes',
      ],
    },
    {
      type: 'link',
      label: 'FinOps用語',
      href: 'https://finops-jp.github.io/docs/assets/terminology',
    },
  ],

  terminology: [
    'assets/terminology'
  ],
};

export default sidebars;
