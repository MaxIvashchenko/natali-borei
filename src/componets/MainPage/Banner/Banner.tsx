import Ztext from 'react-ztext';
import Image from 'next/image';
import { IMAGES } from '@src/constants';
import { useWindowSize } from '@src/hooks';
import { imgLoader } from '@src/utils';

import { MainPage } from 'blocks';

const { Banner: StyledBanner } = MainPage;

const Banner = () => (
  <StyledBanner>
    {useWindowSize() ? (
      <Image
        src={IMAGES.FULL_LOGO}
        width={400}
        height={110}
        loader={imgLoader}
        quality={100}
        alt='big logo'
      />
    ) : (
      <Ztext
        depth='1rem'
        direction='both'
        event='pointer'
        eventRotation='10deg'
        fade={false}
        layers={1}
        perspective='500px'
        eventDirection={''}
        children={
          <Image
            src={IMAGES.FULL_LOGO}
            width={440}
            height={112}
            loader={imgLoader}
            quality={100}
            alt='big logo'
          />
        }
      />
    )}
    <p>Beaded Jewelry & Accessories</p>
  </StyledBanner>
);

export default Banner;