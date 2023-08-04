import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { MainPage } from '@src/blocks';
import { paths } from '@src/constants';
import { CATEGORIES } from '@src/content';
import { useMobile } from '@src/hooks';
import { ICategory } from '@src/types';
import { imgLoader } from '@src/utils';

const InfiniteScrollLoop = ({
  backup = 1
}: {
  backup?: number;
}): JSX.Element => {
  const router = useRouter();
  const isMobile = useMobile();
  const { t } = useTranslation('common');
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const width = (isMobile ? 94 : 140) * CATEGORIES.length;
  const backupWidth = width * backup;

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollLeft;

      if (scroll < backupWidth) {
        scrollRef.current.scrollLeft = backupWidth + scroll;
      } else if (scroll >= backupWidth + width) {
        scrollRef.current.scrollLeft = backupWidth;
      }
    }
  }, [width, backupWidth]);

  const redirectHandler = useCallback(
    ({ tag }: ICategory) =>
      () =>
        router.push({
          pathname: paths.shop,
          query: { tag }
        }),
    [router]
  );

  const renderRows = useCallback(
    (clickHandler: (category: ICategory) => () => void) =>
      CATEGORIES.map((item) => (
        <MainPage.CategoryButton
          key={item.tag}
          variant='text'
          onClick={clickHandler(item)}
        >
          <Box className='imgWrapper'>
            <Image
              src={item.imgSrc}
              width={100}
              height={100}
              loader={imgLoader}
              quality={50}
              alt='category'
            />
          </Box>
          <Typography mt={1}>{t(`categories.${item.tag}`)}</Typography>
        </MainPage.CategoryButton>
      )),
    [t]
  );

  const HidedScrollList = useMemo(
    () =>
      Array.from(Array(backup).keys()).map((i) => (
        <MainPage.ListWrapper key={i}>
          {renderRows(redirectHandler)}
        </MainPage.ListWrapper>
      )),
    [backup, redirectHandler, renderRows]
  );

  return (
    <MainPage.OuterLoopWrapper style={{ maxWidth: 140 * CATEGORIES.length }}>
      <MainPage.InnerLoopWrapper
        style={{ width: 140 * CATEGORIES.length }}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {HidedScrollList}
        <MainPage.ListWrapper>
          {renderRows(redirectHandler)}
        </MainPage.ListWrapper>
        {HidedScrollList}
      </MainPage.InnerLoopWrapper>
    </MainPage.OuterLoopWrapper>
  );
};

export default InfiniteScrollLoop;
