import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import {
  Banner,
  Carousel,
  CategorySlider,
  ContactForm,
  InfiniteScrollLoop,
  Loader,
  Modal,
  PopularItems
} from '@src/componets';
import { useLoaderContext, useTouchDevice } from '@src/hooks';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoading, setLoading } = useLoaderContext();
  const isTouchDevice = useTouchDevice();

  const modalHandler = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setLoading(false);

    return () => {
      setLoading(false);
    };
  }, [setLoading]);

  return (
    <>
      {isLoading && <Loader isFullPage fill='#b99765' />}
      <Carousel />
      <Box mt={3}>
        {isTouchDevice ? <CategorySlider /> : <InfiniteScrollLoop />}
      </Box>
      <Banner />
      <PopularItems />
      {/* <InfoLine /> */}

      <Modal isOpen={isOpen} closeModal={modalHandler}>
        <ContactForm />
      </Modal>
    </>
  );
};
export default Home;
