import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useWindowSize } from '@src/hooks';
import { imgLoader } from '@src/utils';

interface CardImageProps {
  image: string;
  name: string;
}

const CardImage = ({ image, name }: CardImageProps) => {
  const [height, setHeight] = useState<number>(0);
  const size = useWindowSize();
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef?.current) {
      setHeight(imageRef?.current?.clientWidth);
    }
  }, [size]);

  return (
    <Box
      style={{
        position: 'relative',
        height
      }}
    >
      {image && (
        <Image
          ref={imageRef}
          loader={imgLoader}
          src={image}
          alt={name + '-photo'}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      )}
    </Box>
  );
};

export default CardImage;
