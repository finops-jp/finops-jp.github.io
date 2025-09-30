import React, {type ReactNode} from 'react';

export type EventItem = {
  title: string;
  date: string;
  location: string;
  link: string;
  image: string;
};

const Events: EventItem[] = [
  {
    title: 'Japan FinOps Meetup#5',
    date: "次回: 2025年10月16日(木)",
    location: "サイバーエージェント アベマタワー",
    link: 'https://finops.connpass.com/event/368385/',
    image: 'https://media.connpass.com/thumbs/3d/7d/3d7da2ba261173b058991c10b7e43a2b.png',
  },
  {
    title: 'LF Japan Community Days大阪 feat. FinOps',
    date: "次回: 2025年10月21日(火)-22日(水)",
    location: "JEC日本研修センター心斎橋",
    link: 'https://finops.connpass.com/event/368384/',
    image: 'https://media.connpass.com/thumbs/3d/7d/3d7da2ba261173b058991c10b7e43a2b.png',
  },
  {
    title: 'East & Southeast Asia FinOps Community Call',
    date: "次回: 2025年11月5日(水)",
    location: "オンライン",
    link: 'https://finops.connpass.com/event/371158/',
    image: 'https://media.connpass.com/thumbs/48/e3/48e384c5051b89e79f05fec627d03779.png',
  },
  {
    title: 'FinOps X Day Tokyo',
    date: "次回: 2026年",
    location: "TBD",
    link: 'https://x.finops.org/x-days/tokyo/',
    image: 'https://media.connpass.com/thumbs/63/42/634262cedd66758c17cf8e6deaf7583d.png',
  },
];

export default Events;
