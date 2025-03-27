import {translate} from '@docusaurus/Translate';
import {sortBy, sortByDesc} from '@site/src/utils/jsUtils';

// LIST OF AVAILABLE TAGS
export type TagType =
  | 'favorite'
  | 'introduction'
  | 'framework'
  | 'focus'
  | 'aws'
  | 'azure'
  | 'gcp'
  | 'oci';

// Add slides to this list
// prettier-ignore
const Slides: Slide[] = [
  {
    name: 'Satoshi Matsuzawa',
    icon: 'https://github.com/chacco38.png',
    title: 'エンジニアのためのFinOps実践アプローチの紹介 #cncw2024',
    preview: 'https://files.speakerdeck.com/presentations/86a162c1f75e4a4c945ffb356d053d29/slide_0.jpg',
    url: 'https://speakerdeck.com/chacco38/finopsshi-jian-apurotinoshao-jie-v20241129',
    date: '2024-11-29',
    tags: [],
  },
  {
    name: 'Satoshi Matsuzawa',
    icon: 'https://github.com/chacco38.png',
    title: 'AWSコスト削減ポイント紹介',
    url: 'https://speakerdeck.com/chacco38/awskosutoxue-jian-pointoshao-jie-v20241205',
    preview: 'https://files.speakerdeck.com/presentations/72dc4eea925d415bbf9e0257931dc328/slide_0.jpg',
    date: '2024-12-05',
    tags: [],
  },
  {
    name: 'Satoshi Matsuzawa',
    icon: 'https://github.com/chacco38.png',
    title: 'FinOpsスキルの効率的な上げ方 #ochacafe',
    url: 'https://speakerdeck.com/chacco38/finopssukirunoxiao-lu-de-nashang-gefang-v20250305',
    preview: 'https://files.speakerdeck.com/presentations/1f44e7e0789c4a46a0bc8087435249ff/slide_0.jpg',
    date: '2025-03-05',
    tags: [],
  },
  {
    name: 'Satoshi Matsuzawa',
    icon: 'https://github.com/chacco38.png',
    title: 'FinOps実践によるビジネス価値の最大化へとシフトせよ #ITmediaDXSummit23',
    url: 'https://speakerdeck.com/chacco38/kuraudo-slash-sheng-cheng-aino-dan-naruli-yong-kara-bu-xian-he-finopsshi-jian-niyorubizinesujia-zhi-nozui-da-hua-hetosihutoseyo',
    preview: 'https://files.speakerdeck.com/presentations/3939e698a024402ebb85e6fc031799f1/slide_0.jpg',
    date: '2025-02-28',
    tags: [],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type Slide = {
  name: string;
  icon: string | null;
  title: string;
  url: string;
  preview: string | null; // null = use our serverless screenshot service
  date: string,
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'おすすめ'}),
    description: translate({
      message: 'ぜひチェックしてほしいおすすめのスライドです！',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  introduction: {
    label: translate({message: '入門'}),
    description: translate({
      message: 'FinOpsの入門にピッタリのスライド',
      id: 'showcase.tag.introduction.description',
    }),
    color: '#dfd545',
  },

  framework: {
    label: translate({message: 'フレームワーク'}),
    description: translate({
      message: 'FinOpsフレームワークに関するスライド',
      id: 'showcase.tag.framework.description',
    }),
    color: '#39ca30',
  },

  focus: {
    label: translate({message: 'FOCUS'}),
    description: translate({
      message: 'FOCUSに関するスライド',
      id: 'showcase.tag.focus.description',
    }),
    color: '#a44fb7',
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

export const TagList = Object.keys(Tags) as TagType[];
function sortSlides() {
  let result = Slides;
  // Sort by slide name
  result = sortByDesc(result, (slide) => slide.date.toUpperCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (slide) => !slide.tags.includes('favorite'));
  return result;
}

export const sortedSlides = sortSlides();
