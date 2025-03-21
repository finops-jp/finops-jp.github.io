import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Features, {type FeatureItem} from '@site/src/data/features';

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
          <p className="hero__title">
            {siteConfig.tagline}
          </p>
        </Heading>
        <div className="hero__subtitle">
          FinOps Foundation（F2）の各種コンテンツのローカライズ、国内でのミートアップ運営などを通じてFinOpsの国内普及を促進するとともに、FinOpsに携わる国内エンジニアが成長しあう場所を提供します
        </div>
        <div className={styles.indexCtas}>
          <Link className="button button--secondary button--lg" to="/docs/about">
            <Translate>Japan Chapterについて</Translate>
          </Link>
          <Link className="button button--secondary button--lg" to="https://finops-jp.github.io/ja/docs/introduction/what-is-finops">
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

function HomepageEvents() {
  return (
    <div></div>
  );
}

function HomepageJoinCommunity() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.hero)} data-theme="dark">
      <div className="container">
        <Heading as="h2" className={styles.buttons}>
          FinOpsのスキルアップを目指し、実践者や専門家のあつまるコミュニティの一員になりませんか？
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.finops.org/join/">
            FinOps Foundationコミュニティに参加する
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
