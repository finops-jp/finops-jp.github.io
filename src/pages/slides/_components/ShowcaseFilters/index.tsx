/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ReactNode, CSSProperties} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import FavoriteIcon from '@site/src/pages/slides/_components/FavoriteIcon';
import {Tags, TagList, type TagType} from '@site/src/data/slides';
import Heading from '@theme/Heading';
import ShowcaseTagSelect from '../ShowcaseTagSelect';
import OperatorButton from '../OperatorButton';
import ClearAllButton from '../ClearAllButton';
import {useFilteredSlides, useSiteCountPlural} from '../../_utils';

import styles from './styles.module.css';

function TagCircleIcon({color, style}: {color: string; style?: CSSProperties}) {
  return (
    <span
      style={{
        backgroundColor: color,
        width: 10,
        height: 10,
        borderRadius: '50%',
        ...style,
      }}
    />
  );
}

function ShowcaseTagListItem({tag}: {tag: TagType}) {
  const {label, description, color} = Tags[tag];
  return (
    <li className={styles.tagListItem}>
      <ShowcaseTagSelect
        tag={tag}
        label={label}
        description={description}
      />
    </li>
  );
}

function ShowcaseTagList() {
  return (
    <ul className={clsx('clean-list', styles.tagList)}>
      {TagList.map((tag) => {
        return <ShowcaseTagListItem key={tag} tag={tag} />;
      })}
    </ul>
  );
}

function HeadingText() {
  const filteredSlides = useFilteredSlides();
  const siteCountPlural = useSiteCountPlural();
  return (
    <div className={styles.headingText}>
      <Heading as="h2">
        <Translate id="showcase.filters.title">Filters</Translate>
      </Heading>
      <span>{siteCountPlural(filteredSlides.length)}</span>
    </div>
  );
}

function HeadingButtons() {
  return (
    <div className={styles.headingButtons} style={{alignItems: 'center'}}>
      <OperatorButton />
      <ClearAllButton />
    </div>
  );
}

function HeadingRow() {
  return (
    <div className={clsx('margin-bottom--sm', styles.headingRow)}>
      <HeadingText />
      <HeadingButtons />
    </div>
  );
}

export default function ShowcaseFilters(): ReactNode {
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <HeadingRow />
      <ShowcaseTagList />
    </section>
  );
}
