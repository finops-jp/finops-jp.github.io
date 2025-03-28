import React, {type ReactNode} from 'react';

export type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const Features: FeatureItem[] = [
  {
    title: 'ミートアップ',
    image: '/img/AdobeStock_543767605_1.png',
    description: (
      <>
        公式ミートアップの開催を通じて、FinOpsに関わる人々が知識や経験を共有しあう場を提供します。
      </>
    ),
  },
  {
    title: '日本語化',
    image: '/img/AdobeStock_543767605_2.png',
    description: (
      <>
        FinOps Foundationが提供しているさまざまなコンテンツの日本語化をリードします。
      </>
    ),
  },
  {
    title: '情報発信',
    image: '/img/AdobeStock_543767605_3.png',
    description: (
      <>
        ウェブサイト、ブログ、SNSなどを通じて、FinOpsに関する最新情報やノウハウを発信します。
      </>
    ),
  },
  {
    title: 'エンジニア育成',
    image: '/img/AdobeStock_543767605_4.png',
    description: (
      <>
        メンターシッププログラムなどを通じて、後続エンジニアのスキルアップを支援します。
      </>
    ),
  },
  {
    title: '架け橋',
    image: '/img/AdobeStock_543767605_5.png',
    description: (
      <>
        FinOps Foundationと日本のエンジニアとの架け橋となり、FinOpsの普及促進に貢献します。
      </>
    ),
  },
];

export default Features;
