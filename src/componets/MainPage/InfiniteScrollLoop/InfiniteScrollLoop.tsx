import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { MainPage } from '@src/blocks';
import { CATEGORIES, paths } from '@src/constants';
import { ICategories } from '@src/types';
import { imgLoader } from '@src/utils';

const renderRows = (clickHandler: (category: ICategories) => () => void) =>
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
      <Typography mt={1}>{item.label}</Typography>
    </MainPage.CategoryButton>
  ));

const InfiniteScrollLoop = ({
  backup = 1
}: {
  backup?: number;
}): JSX.Element => {
  const router = useRouter();
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = React.useState<number>(0);

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

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.offsetWidth);
      scrollRef.current.scrollLeft = backupWidth;
    }
  }, [setWidth, backupWidth]);

  const redirectHandler = useCallback(
    ({ tag }: ICategories) =>
      () =>
        router.push({
          pathname: paths.shop,
          query: { tag }
        }),
    [router]
  );

  const HidedScrollList = useMemo(
    () =>
      Array.from(Array(backup).keys()).map((i) => (
        <MainPage.ListWrapper key={i}>
          {renderRows(redirectHandler)}
        </MainPage.ListWrapper>
      )),
    [backup, redirectHandler]
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
