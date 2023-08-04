import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { MainPage } from '@src/blocks';
import { GLOBAL_STYLES, paths } from '@src/constants';
import { CATEGORIES } from '@src/content';
import { ICategory } from '@src/types';
import { imgLoader } from '@src/utils';

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
};

const CategorySlider = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation('common');

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

  return (
    <Box sx={GLOBAL_STYLES.relative}>
      <Slider {...settings}>{renderRows(redirectHandler)}</Slider>
    </Box>
  );
};

export default CategorySlider;