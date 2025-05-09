import type {ReactNode} from 'react';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Image from '@theme/IdealImage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import SearchIcon from '@mui/icons-material/Search';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import {sortedSlides, type Slide} from '@site/src/data/slides';
import {useFilteredSlides, useSearchName} from './_utils';
import styles from './index.module.css';

/* ヘッダー */
function SlideHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.hero)} data-theme="dark">
      <div className="container">
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'FinOps Foundation Japan Chapter'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/AdobeStock_542603874.jpeg')}
            width="480"
          />
          <div className={styles.slidePageTitle}>
            日本のFinOps実践者が集う、知識共有の場へようこそ
          </div>
        </Heading>
        <div className={styles.slidePageSubtitle}>
          このページでは、国内の実践者たちが作成したFinOps関連のスライドを閲覧できます。具体的な事例やノウハウを学び、FinOps実践を加速させましょう。さらに、あなたがこれまでに作成したFinOpsの知見が詰まったスライドを共有することで、日本のFinOpsコミュニティ全体の成長に貢献できます。ぜひ、あなたのスライドも共有してみませんか？
        </div>
        <div className={styles.addSlideButton}>
          <Link
            className="button button--secondary"
            to='https://github.com/finops-jp/finops-jp.github.io/discussions/9'>
            スライドの共有方法、スライドに対する要件について
            <OpenInNewIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

/* 検索バー */
function SlideSearchBar(): ReactNode {
  const [searchName, setSearchName] = useSearchName();
  return (
    <div className="row margin-top--lg margin-bottom--lg">
      <div className="container">
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <SlideHeader />
        <SlideSearchBar />
        <SlideCards />
      </main>
    </Layout>
  );
}
