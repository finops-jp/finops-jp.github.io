import {translate} from '@docusaurus/Translate';
import {sortBy, sortByDesc} from '@site/src/utils/jsUtils';

// スライド一覧
const Slides: Slide[] = [
  {
    name: 'Satoshi Matsuzawa',
    icon: 'https://github.com/chacco38.png',
    title: 'エンジニアのためのFinOps実践アプローチの紹介 #cncw2024',
    preview: 'https://files.speakerdeck.com/presentations/86a162c1f75e4a4c945ffb356d053d29/slide_0.jpg',
    url: 'https://speakerdeck.com/chacco38/finopsshi-jian-apurotinoshao-jie-v20241129',
    date: '2024-11-29',
    capabilities: ["finops-practice-operations"],
    tags: [],
  },
  {
    name: 'Satoshi Matsuzawa',
    icon: 'https://github.com/chacco38.png',
    title: 'AWSコスト削減ポイント紹介',
    url: 'https://speakerdeck.com/chacco38/awskosutoxue-jian-pointoshao-jie-v20241205',
    preview: 'https://files.speakerdeck.com/presentations/72dc4eea925d415bbf9e0257931dc328/slide_0.jpg',
    date: '2024-12-05',
    capabilities: ["reporting-analytics", "rate-optimization", "workload-optimization"],
    tags: [],
  },
  {
    name: 'Satoshi Matsuzawa',
    icon: 'https://github.com/chacco38.png',
    title: 'FinOpsスキルの効率的な上げ方 #ochacafe',
    url: 'https://speakerdeck.com/chacco38/finopssukirunoxiao-lu-de-nashang-gefang-v20250305',
    preview: 'https://files.speakerdeck.com/presentations/1f44e7e0789c4a46a0bc8087435249ff/slide_0.jpg',
    date: '2025-03-05',
    capabilities: ["finops-education-enablement"],
    tags: [],
  },
  {
    name: 'Satoshi Matsuzawa',
    icon: 'https://github.com/chacco38.png',
    title: 'FinOps実践によるビジネス価値の最大化へとシフトせよ #ITmediaDXSummit23',
    url: 'https://speakerdeck.com/chacco38/kuraudo-slash-sheng-cheng-aino-dan-naruli-yong-kara-bu-xian-he-finopsshi-jian-niyorubizinesujia-zhi-nozui-da-hua-hetosihutoseyo',
    preview: 'https://files.speakerdeck.com/presentations/3939e698a024402ebb85e6fc031799f1/slide_0.jpg',
    date: '2025-02-28',
    capabilities: ["finops-practice-operations"],
    tags: [],
  },

  // メモ: 後ろに追加だとコンフリクトしやすいので作者名順（アルファベット順）にしましょう。
];

export type Slide = {
  name: string;
  icon: string | null;
  title: string;
  url: string;
  preview: string | null;
  date: string,
  capabilities: CapabilityType[];
  tags: TagType[];
};

// 使えるタグ一覧
export type TagType =
  | 'favorite'
  | 'aws'
  | 'azure'
  | 'gcp'
  | 'oci';

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'おすすめ'}),
    description: translate({
      message: 'ぜひチェックしてほしいおすすめのスライドです！',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  aws: {
    label: translate({message: 'AWS'}),
    description: translate({
      message: 'AWSに関するスライド',
      id: 'showcase.tag.aws.description',
    }),
    color: '#a44fb7',
  },

  azure: {
    label: translate({message: 'Azure'}),
    description: translate({
      message: 'Azureに関するスライド',
      id: 'showcase.tag.azure.description',
    }),
    color: '#a44fb7',
  },

  gcp: {
    label: translate({message: 'Google Cloud'}),
    description: translate({
      message: 'Google Cloudに関するスライド',
      id: 'showcase.tag.gcp.description',
    }),
    color: '#a44fb7',
  },

  oci: {
    label: translate({message: 'Google Cloud'}),
    description: translate({
      message: 'Google Cloudに関するスライド',
      id: 'showcase.tag.gcp.description',
    }),
    color: '#a44fb7',
  },

};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const TagList = Object.keys(Tags) as TagType[];

// 使えるケイパビリティ一覧
export type CapabilityType =
  | 'favorite'
  // 使用量とコストの把握
  | 'data-ingestion'
  | 'allocation'
  | 'reporting-analytics'
  | 'anomaly-management'
  // ビジネス価値の定量化
  | 'planning-estimating'
  | 'forecasting'
  | 'budgeting'
  | 'benchmarking'
  | 'unit-economics'
  // 使用量とコストの最適化
  | 'architecting-for-cloud'
  | 'rate-optimization'
  | 'workload-optimization'
  | 'cloud-sustainability'
  | 'licensing-saas'
  // FinOpsプラクティスの管理
  | 'finops-practice-operations'
  | 'policy-governance'
  | 'finops-assessment'
  | 'finops-tools-services'
  | 'finops-education-enablement'
  | 'invoicing-chargeback'
  | 'onboading-workloads'
  | 'intersecting-disciplines';

export const Capabilities: {[type in CapabilityType]: Capability} = {
  favorite: {
    label: translate({message: 'おすすめ'}),
  },
  // 使用量とコストの把握
  'data-ingestion': {
    label: 'データ取り込み',
  },
  'allocation': {
    label: '割り当て',
  },
  'reporting-analytics': {
    label: 'レポーティングと分析',
  },
  'anomaly-management': {
    label: '異常管理',
  },
  // ビジネス価値の定量化
  'planning-estimating': {
    label: '計画と見積',
  },
  'forecasting': {
    label: '予測',
  },
  'budgeting': {
    label: '予算',
  },
  'benchmarking': {
    label: 'ベンチマーク',
  },
  'unit-economics': {
    label: 'ユニットエコノミクス',
  },
  // 使用量とコストの最適化
  'architecting-for-cloud': {
    label: 'アーキテクチャー設計',
  },
  'rate-optimization': {
    label: '料金の最適化',
  },
  'workload-optimization': {
    label: 'ワークロードの最適化',
  },
  'cloud-sustainability': {
    label: 'サステナビリティ',
  },
  'licensing-saas': {
    label: 'ライセンスとSaaS',
  },
  // FinOpsプラクティスの管理
  'finops-practice-operations': {
    label: 'プラクティスの運用',
  },
  'policy-governance': {
    label: 'ポリシーとガバナンス',
  },
  'finops-assessment': {
    label: 'アセスメント',
  },
  'finops-tools-services': {
    label: 'ツールとサービス',
  },
  'finops-education-enablement': {
    label: '教育と仕組みづくり',
  },
  'invoicing-chargeback': {
    label: '請求とチャージバック',
  },
  'onboading-workloads': {
    label: 'ワークロードのオンボーディング',
  },
  'intersecting-disciplines': {
    label: '関連する専門分野',
  },
};

export type Capability = {
  label: string;
};

export const CapabilityList = Object.keys(Capabilities) as CapabilityType[];

function sortSlides() {
  let result = Slides;
  // Sort by slide name
  result = sortByDesc(result, (slide) => slide.date.toUpperCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (slide) => !slide.tags.includes('favorite'));
  return result;
}

export const sortedSlides = sortSlides();
