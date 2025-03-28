import type {ReactNode} from 'react';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import SearchIcon from '@mui/icons-material/Search';

import {sortedSlides, type Slide} from '@site/src/data/slides';
import {useFilteredSlides, useSearchName} from './_utils';
import styles from './index.module.css';

/* ヘッダー */
function SlideHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">FinOpsに関するスライド</Heading>
      <Link
        className="button button--primary"
        to='https://github.com/finops-jp/finops-jp.github.io/discussions/9'>
        🙏 Please add your slides
      </Link>
    </section>
  );
}

/* 検索バー */
function SlideSearchBar(): ReactNode {
  const [searchName, setSearchName] = useSearchName();
  return (
    <div className={styles.search}>
      <div className={styles.searchBar}>
        <SearchIcon />
        <input
          placeholder='ドキュメント名で検索'
          type='search'
          value={searchName}
          onInput={(e) => {
            setSearchName(e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
}

/* スライド一覧 */
const favoriteSlides = sortedSlides.filter((slide) =>
  slide.tags.includes('favorite'),
);

const allSlides = sortedSlides

function HeadingNoResult() {
  return (
    <Heading as="h2">
      <Translate>該当するスライドはありません</Translate>
    </Heading>
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

function getCardImage(slide: Slide): string {
  return (
    slide.preview ??
    // TODO make it configurable
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      slide.url,
    )}/showcase`
  );
}

function SlideCard({slide}: {slide: Slide}) {
  const image = getCardImage(slide);
  const date  = new Date(slide.date);
  const [month, day, year] = [
    new Intl.DateTimeFormat("en-US", {month:"long"}).format(date),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <li key={slide.title} className="card shadow--md">
      <Link to={slide.url}>
        <div className={clsx('card__image', styles.slideCardImage)}>
          <Image img={image} alt={slide.title} />
        </div>
      </Link>
      <div className="card__body">
        <div className={clsx(styles.slideCardHeader)}>
          <Heading as="h4" className={styles.slideCardTitle}>
            <Link to={slide.url}>
              {slide.title}
            </Link>
          </Heading>
        </div>
      </div>
      <div className={clsx('card__footer', styles.cardFooter)}>
        <div className="avatar">
          <img
            alt={slide.name}
            className="avatar__photo"
            src={slide.icon}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={clsx('avatar__intro')}>
            <strong className="avatar__name">{slide.name}</strong>
            <p className={styles.slideCardBody}>{month} {day}, {year}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

function CardList({heading, items}: {heading?: ReactNode; items: Slide[]}) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <SlideCard key={item.title} slide={item} />
        ))}
      </ul>
    </div>
  );
}

function SlideCards() {
  const filteredSlides = useFilteredSlides();

  if (filteredSlides.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredSlides.length === sortedSlides.length ? (
        <CardList items={allSlides} />
      ) : (
        <CardList items={filteredSlides} />
      )}
    </section>
  );
}

function FavoriteSlideCards() {
  const filteredSlides = useFilteredSlides();

  if (filteredSlides.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredSlides.length === sortedSlides.length ? (
        <>
          <div className={styles.slideFavorite}>
            <CardList items={favoriteSlides} />
          </div>
        </>
      ) : (
        <CardList items={filteredSlides} />
      )}
    </section>
  );
}

export default function Slide(): ReactNode {
  return (
    <Layout>
      <main className="margin-vert--lg">
        <SlideHeader />
        <div className="container">
          <SlideSearchBar />
        </div>
        <SlideCards />
      </main>
    </Layout>
  );
}
