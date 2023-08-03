import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useWindowSize } from '@src/hooks';
import { imgLoader } from '@src/utils';

const STORAGE_URL = process.env.STORAGE_URL;
const path = STORAGE_URL + '/public/common/carousel';

interface CarouselImageProps {
  num: number;
}

const CarouselImage = ({ num }: CarouselImageProps) => {
  const width = useWindowSize();
  const src = path + `/carousel_${num}.jpg`;
  const height = width > 1920 ? (1920 / 16) * 5 : (width / 16) * 5;

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
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
      />
    </Box>
  );
};

export default CarouselImage;
