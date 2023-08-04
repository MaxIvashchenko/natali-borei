import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import { MainPage as MainPageBlock } from '@src/blocks';
import { IconComponent } from '@src/componets/Common';
import { GLOBAL_STYLES } from '@src/constants';

import { CarouselImage } from '../CarouselImage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { CarouselButton } = MainPageBlock;

const settings = {
  infinite: true,
  speed: 1000,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  initialSlide: 0,
  arrows: false,
  cssEase: 'linear'
};

const Carousel = () => {
  const slider = useRef<Slider>(null);

  const goNext = () => slider?.current?.slickNext();

  const goBack = () => slider?.current?.slickPrev();

  return (
    <Box sx={GLOBAL_STYLES.relative}>
      <Slider ref={slider} {...settings}>
        {[1, 2, 3, 4].map((key) => (
          <CarouselImage num={key} key={`carousel-${key}`} />
        ))}
      </Slider>

      <CarouselButton position='left' onClick={goBack}>
        <IconComponent name='right' isMirror fill='#fff' />
      </CarouselButton>
      <CarouselButton position='right' onClick={goNext}>
        <IconComponent name='right' fill='#fff' />
      </CarouselButton>
    </Box>
  );
};

export default Carousel;
