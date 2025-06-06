import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as BlogOptions} from '@docusaurus/plugin-content-blog';
import type {Options as PageOptions} from '@docusaurus/plugin-content-pages';
import type {Options as ClientRedirectsOptions} from '@docusaurus/plugin-client-redirects';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FinOps Foundation Japan Chapter',
  tagline: '日本国内におけるFinOpsの普及促進',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://finops-jp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'finops-jp', // Usually your GitHub org/user name.
  projectName: 'finops-jp.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/finops-jp/finops-jp.github.io/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
          'https://github.com/finops-jp/finops-jp.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'client-redirects',
      {
        fromExtensions: ['html'],
        redirects: [
          // かつて存在したパスへのリンク切れを防ぐために追加
          {
            from: ['/posts/2023/11/japan-finops-meetup-1'],
            to: '/blog/japan-finops-meetup-1',
          },
          {
            from: ['/posts/2024/07/japan-finops-meetup-2'],
            to: '/blog/japan-finops-meetup-2',
          },
          {
            from: ['/posts/2023/11/japan-finops-meetup-3'],
            to: '/blog/japan-finops-meetup-3',
          },
          {
            from: ['/ja'],
            to: '/docs/introduction/what-is-finops',
          },
        ],
      } satisfies ClientRedirectsOptions,
    ],
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true,
      } satisfies IdealImageOptions,
    ],
  ],

  themeConfig: {
    image: 'img/F2-Logo-GreenDarkGrey.svg',
    announcementBar: {
      id: 'announcementBar-',
      content: '<a target="_blank" href="https://www.finops.org">FinOps Framework and Foundation Content</a> by <a target="_blank" href="https://www.finops.org">FinOps Foundation</a> <b>(CC BY 4.0)</b>',
      textColor: '#FFF',
      backgroundColor: '#4AAD78',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      //title: 'FinOps Foundation Japan Chapter',
      logo: {
        alt: 'FinOps Foundation Japan Chapter',
        src: 'img/F2-Logo-GreenDarkGrey.svg',
      },
      items: [
        {
          href: 'https://finops.connpass.com/',
          label: 'イベント',
          position: 'right',
        },
        {
          to: '/docs/introduction/what-is-finops',
          label: 'ドキュメント',
          position: 'right',
        },
        {to: 'slides', label: 'スライド資料', position: 'right'},
        {to: 'press', label: 'メディア記事', position: 'right'},
        //{to: 'blog', label: 'ブログ', position: 'right'},
        {
          href: 'https://github.com/finops-jp/finops-jp.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '入門',
          items: [
            {
              label: 'FinOpsとは',
              to: '/docs/introduction/what-is-finops',
            },
            {
              label: 'フレームワーク概要',
              to: '/docs/framework',
            },
            {
              label: 'FinOps用語',
              to: '/docs/assets/terminology',
            },
          ],
        },
        {
          title: 'フレームワーク',
          items: [
            {
              label: '原則',
              to: '/docs/framework/principles',
            },
            {
              label: 'ペルソナ',
              to: '/docs/framework/personas',
            },
            {
              label: 'フェーズ',
              to: '/docs/framework/phases',
            },
            {
              label: '成熟度',
              to: '/docs/framework/maturity-model',
            },
            {
              label: 'ドメイン',
              to: '/docs/framework/domains',
            },
            {
              label: 'ケイパビリティ',
              to: '/docs/framework/capabilities',
            },
            {
              label: 'スコープ',
              to: '/docs/framework/scopes',
            },
          ],
        },
        {
          title: 'アセット',
          items: [
            {
              label: 'FinOpsの採用',
              to: 'https://www.finops.org/wg/adopting-finops/',
            },
          ],
        },
        {
          title: 'コミュニティー',
          items: [
            {
              label: 'FinOps Foundation',
              href: 'https://www.finops.org',
            },
            {
              label: 'FinOps Foundation Japan Chater',
              href: 'https://finops-jp.github.io',
            },
            {
              label: 'Connpass',
              href: 'https://finops.connpass.com/',
            },

            {
              label: 'GitHub',
              href: 'https://github.com/finops-jp/finops-jp.github.io',
            },
          ],
        },
      ],
      copyright: `© FinOps Foundation Japan Chapter. ${new Date().getFullYear()}. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
