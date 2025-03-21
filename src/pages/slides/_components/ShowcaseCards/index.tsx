import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {sortedSlides, type Slide} from '@site/src/data/slides';
import Heading from '@theme/Heading';
import ShowcaseCard from '../ShowcaseCard';
import {useFilteredSlides} from '../../_utils';

import styles from './styles.module.css';

const favoriteSlides = sortedSlides.filter((slide) =>
  slide.tags.includes('favorite'),
);

const allSlides = sortedSlides;

function HeadingNoResult() {
  return (
    <Heading as="h2">
      <Translate id="showcase.slidesList.noResult">該当するスライドはありません</Translate>
    </Heading>
  );
}

function HeadingFavorites() {
  return (
    <Heading as="h2" className={styles.headingFavorites}>
      <Translate id="showcase.favoritesList.title">注目のスライド</Translate>
    </Heading>
  );
}

function HeadingAllSlides() {
  return (
    <Heading as="h2">
      <Translate id="showcase.slidesList.allSlides">すべてのスライド</Translate>
    </Heading>
  );
}

function CardList({heading, items}: {heading?: ReactNode; items: Slide[]}) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} slide={item} />
        ))}
      </ul>
    </div>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}

export default function ShowcaseCards() {
  const filteredSlides = useFilteredSlides();

  if (filteredSlides.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredSlides.length === sortedSlides.length ? (
        <>
          <div className={styles.showcaseFavorite}>
            <CardList heading={<HeadingFavorites />} items={favoriteSlides} />
          </div>
          <div className="margin-top--lg">
            <CardList heading={<HeadingAllSlides />} items={allSlides} />
          </div>
        </>
      ) : (
        <CardList items={filteredSlides} />
      )}
    </section>
  );
}
