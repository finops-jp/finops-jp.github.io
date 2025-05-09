import React, {type ReactNode} from 'react';

export type EventItem = {
  title: string;
  date: string;
  link: string;
  image: string;
};

const Events: EventItem[] = [
  {
    title: 'Japan Community Day (CNCF & FinOps)',
    date: "次回: 2025年6月15日(日) 11:00-21:00",
    link: 'https://community.cncf.io/events/details/cncf-cloud-native-community-japan-presents-japan-community-day-at-kubecon-cloudnativecon-japan-2025/',
    image: 'https://media.connpass.com/thumbs/3d/7d/3d7da2ba261173b058991c10b7e43a2b.png',
  },
  {
    title: 'Asia Pacific Japan FinOps Foundation Summit',
    date: "次回: 2025年7月31日(木) 13:30-14:30",
    link: 'https://finops.connpass.com/event/350360/',
    image: 'https://media.connpass.com/thumbs/99/b0/99b0154ae9f4ede879df48bd937aefd7.png',
  },
  {
    title: 'East & Southeast Asia FinOps Community Call',
    date: "次回: 2025年7月2日(水) 13:00-14:00",
    link: 'https://finops.connpass.com/event/350482/',
    image: 'https://media.connpass.com/thumbs/48/e3/48e384c5051b89e79f05fec627d03779.png',
  },
  {
    title: 'FinOps X Day Tokyo',
    date: "次回: 2025年6月18日(水)",
    link: 'https://x.finops.org/x-days/tokyo/',
    image: 'https://media.connpass.com/thumbs/63/42/634262cedd66758c17cf8e6deaf7583d.png',
  },
];

export default Events;
