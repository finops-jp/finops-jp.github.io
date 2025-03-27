import React, {type ReactNode} from 'react';

export type EventItem = {
  title: string;
  date: string;
  link: string;
  image: string;
};

const Events: EventItem[] = [
  {
    title: 'Japan FinOps Meetup#4',
    date: "2025年3月14日(金) 18:30-21:00",
    link: 'https://finops.connpass.com/event/346147/',
    image: 'https://media.connpass.com/thumbs/3d/7d/3d7da2ba261173b058991c10b7e43a2b.png',
  },
  {
    title: 'Asia Pacific Japan April FinOps Virtual Summit',
    date: "2025年4月3日(木) 13:30-14:30",
    link: 'https://finops.connpass.com/event/350359/',
    image: 'https://media.connpass.com/thumbs/61/e1/61e1c7924465df8f7e56bde8e9bce281.png',
  },
  {
    title: 'East & Southeast Asia FinOps Community Call',
    date: "2025年5月7日(水) 13:00-14:00",
    link: 'https://finops.connpass.com/event/350361/',
    image: 'https://media.connpass.com/thumbs/48/e3/48e384c5051b89e79f05fec627d03779.png',
  },
  {
    title: 'FinOps X Day Tokyo',
    date: "2025年6月18日(水)",
    link: 'https://x.finops.org/x-days/',
    image: 'https://media.connpass.com/thumbs/63/42/634262cedd66758c17cf8e6deaf7583d.png',
  },
];

export default Events;
