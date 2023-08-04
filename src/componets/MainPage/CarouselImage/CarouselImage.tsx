import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useWindowSize } from '@src/hooks';
import { imgLoader } from '@src/utils';

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/carousel';

interface CarouselImageProps {
  num: number;
  isMobile: boolean;
}

const maxHeight = 1920;

const CarouselImage = ({ num, isMobile = false }: CarouselImageProps) => {
  const width = useWindowSize();
  const src = path + `/carousel_${num}.jpg`;
  const ratio = (isMobile ? 8 : 5) / 16;

  const height = width > maxHeight ? maxHeight * ratio : width * ratio;

  return (
    <Box
      sx={{
        position: 'relative',
        height
      }}
    >
      <Image
        priority
        loader={imgLoader}
        src={src}
        alt={`carousel-photo-${num}`}
        fill
        style={{ objectFit: 'cover' }}
        // sizes='100vw'
      />
    </Box>
  );
};

export default CarouselImage;
