/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

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
    github: 'chacco38',
    title: 'FinOpsの実践アプローチの紹介',
    description: '#cndw2024',
    preview: 'https://files.speakerdeck.com/presentations/86a162c1f75e4a4c945ffb356d053d29/slide_0.jpg',
    url: 'https://speakerdeck.com/chacco38/finopsshi-jian-apurotinoshao-jie-v20241129',
    date: 'November 29, 2024',
    tags: ['favorite','introduction','framework'],
  },
  {
    github: 'chacco38',
    title: 'AWSコスト削減ポイント紹介',
    description: '#三大クラウドコスト削減術',
    url: 'https://speakerdeck.com/chacco38/awskosutoxue-jian-pointoshao-jie-v20241205',
    preview: 'https://files.speakerdeck.com/presentations/72dc4eea925d415bbf9e0257931dc328/slide_0.jpg',
    date: 'December 05, 2024',
    tags: ['aws'],
  },
  {
    github: 'chacco38',
    title: 'FinOpsスキルの効率的な上げ方',
    description: '#ochacafe',
    url: 'https://speakerdeck.com/chacco38/finopssukirunoxiao-lu-de-nashang-gefang-v20250305',
    preview: 'https://files.speakerdeck.com/presentations/1f44e7e0789c4a46a0bc8087435249ff/slide_0.jpg',
    date: 'March 05, 2025',
    tags: ['favorite','introduction', 'aws'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type Slide = {
  github: string;
  title: string;
  description: string;
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
  result = sortBy(result, (slide) => slide.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (slide) => !slide.tags.includes('favorite'));
  return result;
}

export const sortedSlides = sortSlides();
