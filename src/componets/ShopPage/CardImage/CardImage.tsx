import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { GLOBAL_COLORS } from '@src/constants';
import { useWindowSize } from '@src/hooks';
import { imgLoader } from '@src/utils';

interface CardImageProps {
  image: string;
  name: string;
  heightProportion?: number;
  withBorder?: boolean;
}

const CardImage = ({
  image,
  name,
  heightProportion = 1,
  withBorder = false
}: CardImageProps) => {
  const [height, setHeight] = useState<number>(0);
  const size = useWindowSize();
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef?.current) {
      setHeight(imageRef?.current?.clientWidth);
    }
  }, [imageRef?.current?.clientWidth, size]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: height * heightProportion,
        border: withBorder ? `1px solid ${GLOBAL_COLORS.gold}` : '',
        boxSizing: 'border-box'
      }}
    >
      <Image
        ref={imageRef}
        loader={imgLoader}
        src={image}
        alt={name + '-photo'}
        fill
        style={{ objectFit: 'cover' }}
        sizes='100vw'
      />
    </Box>
  );
};

export default CardImage;
