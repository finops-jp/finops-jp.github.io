import React, {type ReactNode} from 'react';

export type EventItem = {
  title: string;
  date: string;
  link: string;
  image: string;
};

const Events: EventItem[] = [
  {
    title: 'Japan FinOps Meetup#5',
    date: "次回: 2025年10月16日",
    link: '    link: 'https://finops.connpass.com/event/368385/',
    image: 'https://media.connpass.com/thumbs/3d/7d/3d7da2ba261173b058991c10b7e43a2b.png',
  },
  {
    title: 'LF Japan Community Days大阪 feat. FinOps',
    date: "次回: 2025年10月21～22日",
    link: 'https://finops.connpass.com/event/368384/',
    image: 'https://media.connpass.com/thumbs/3d/7d/3d7da2ba261173b058991c10b7e43a2b.png',
  },
];

export default Events;
