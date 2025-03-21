/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import {Tags, TagList, type TagType, type Slide} from '@site/src/data/slides';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import styles from './styles.module.css';

function TagItem({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  );
}

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        return <TagItem key={index} {...tagObject} />;
      })}
    </>
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

function ShowcaseCard({slide}: {slide: Slide}) {
  const image = getCardImage(slide);
  return (
    <li key={slide.title} className="card shadow--md">
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <Image img={image} alt={slide.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={slide.url} className={styles.showcaseCardLink}>
              {slide.title}
            </Link>
          </Heading>
          {slide.tags.includes('favorite') && (
            <FavoriteIcon size="medium" style={{marginRight: '0.25rem'}} />
          )}
        </div>
        <p className={styles.showcaseCardBody}>{slide.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={slide.tags} />
      </ul>
      <ul className={clsx('card__footer', styles.cardFooter)}>
              <div className="avatar">
          <img
            alt={slide.github}
            className="avatar__photo"
            src={`https://unavatar.io/github/${slide.github}`}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={clsx('avatar__intro', styles.tweetMeta)}>
            <strong className="avatar__name">{slide.github}</strong>
            <p className={styles.showcaseCardBody}>{slide.date}</p>
          </div>
        </div>
        </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
