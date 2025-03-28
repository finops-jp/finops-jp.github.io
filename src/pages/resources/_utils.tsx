/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {useCallback, useMemo} from 'react';
import {translate} from '@docusaurus/Translate';
import {
  usePluralForm,
  useQueryString,
  useQueryStringList,
} from '@docusaurus/theme-common';
import type {TagType, Slide} from '@site/src/data/slides';
import {sortedSlides} from '@site/src/data/slides';

export function useSearchName() {
  return useQueryString('name');
}

export function useTags() {
  return useQueryStringList('tags');
}

type Operator = 'AND' | 'OR';

export function useOperator() {
  const [searchOperator, setSearchOperator] = useQueryString('operator');
  const operator: Operator = searchOperator === 'OR' ? 'OR' : 'AND';
  const toggleOperator = useCallback(() => {
    const newOperator = operator === 'AND' ? 'OR' : null;
    setSearchOperator(newOperator);
  }, [operator, setSearchOperator]);
  return [operator, toggleOperator] as const;
}

function filterSlides({
  slides,
  tags,
  operator,
  searchName,
}: {
  slides: Slide[];
  tags: TagType[];
  operator: Operator;
  searchName: string | null;
}) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    slides = slides.filter((slide) =>
      slide.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (tags.length === 0) {
    return slides;
  }
  return slides.filter((slide) => {
    if (slide.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return tags.every((tag) => slide.tags.includes(tag));
    }
    return tags.some((tag) => slide.tags.includes(tag));
  });
}

export function useFilteredSlides() {
  const [tags] = useTags();
  const [searchName] = useSearchName();
  const [operator] = useOperator();
  return useMemo(
    () =>
      filterSlides({
        slides: sortedSlides,
        tags: tags as TagType[],
        operator,
        searchName,
      }),
    [tags, operator, searchName],
  );
}

export function useSiteCountPlural() {
  const {selectMessage} = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          description:
            'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 site|{sitesCount} sites',
        },
        {sitesCount},
      ),
    );
}
