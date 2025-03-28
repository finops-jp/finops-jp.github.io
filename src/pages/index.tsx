import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Features, {type FeatureItem} from '@site/src/data/features';
import Events, {type EventItem} from '@site/src/data/events';

import styles from './index.module.css';

// ホームページのヘッダー
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.hero)} data-theme="dark">
      <div className="container">
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt={translate({message: 'FinOps Foundation Japan Chapter'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/AdobeStock_262128399.jpeg')}
            width="480"
          />
          <div className={styles.heroTitle}>
            {siteConfig.tagline}
          </div>
        </Heading>
        <div className={styles.heroSubtitle}>
          <Translate>
            FinOps Foundation（F2）の各種コンテンツのローカライズ、国内でのミートアップ運営などを通じてFinOpsの国内普及を促進するとともに、FinOpsに携わる国内エンジニアが成長しあう場所を提供します
          </Translate>
        </div>
        <div className={styles.indexCtas}>
          <Link className="button button--secondary button--lg" to="/docs/about">
            <Translate>Japan Chapterについて</Translate>
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/introduction/what-is-finops">
            <Translate>FinOpsとは？ - 約8分 ⏱️</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=finops-jp&amp;repo=finops-jp.github.io&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </header>
  );
}

// ホームページのフィーチャー
function Feature({feature, className,}: {
  feature: FeatureItem;
  className?: string;
}) {
  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        src={feature.image}
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.description}</p>
    </div>
  );
}

function HomepageFeatures() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-top--lg margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}

// ホームページのイベント
function Event({event, className,}: {
  event: EventItem;
  className?: string;
}) {
  return (
    <li key={event.title} className="card shadow--md">
      <Link to={event.link} className={styles.eventCardLink}>
        <div className={clsx('card__image', styles.eventCardImage)}>
          <Image img={event.image} alt={event.title} />
        </div>
      </Link>
      <div className="card__body">
        <div className={clsx(styles.eventCardHeader)}>
          <Heading as="h3" className={styles.eventCardTitle}>
            <Link to={event.link} className={styles.eventCardLink}>
              {event.title}
            </Link>
          </Heading>
        </div>
        <div className={styles.eventCardBody}>
          {event.date}
        </div>
      </div>
    </li>
  );
}

function HomepageEvents() {
  const firstRow = Events.slice(0, 4);
  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
          <Translate>最新のイベント情報</Translate>
        </Heading>
        <div className="container text--center">
          <ul className={clsx('clean-list', styles.cardList)}>
            {firstRow.map((event, idx) => (
              <Event event={event} key={idx} />
            ))}
          </ul>
        </div>
        <div className="container">
        <div className={styles.indexCtas}>
          <Link
            className="button button--primary button--lg"
            to="https://finops.connpass.com/">
            <Translate>日本のイベント一覧を見る</Translate>
          </Link>
          <Link
            className="button button--primary button--lg button--outline"
            to="https://www.finops.org/community/events/">
            <Translate>グローバルのイベント一覧を見る</Translate>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

function HomepageJoinCommunity() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.hero)} data-theme="dark">
      <div className="container">
        <Heading as="h2" className={styles.joinCommunityTagline}>
          FinOpsのスキルアップを目指し、実践者や専門家のあつまるコミュニティーの一員になりませんか？
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.finops.org/join/">
            FinOps Foundationコミュニティーに参加する
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="${siteConfig.title} website">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <HomepageEvents />
        <HomepageJoinCommunity />
      </main>
    </Layout>
  );
}
