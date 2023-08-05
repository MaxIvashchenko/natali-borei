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
import { useTouchDevice } from '@src/hooks';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { appSelector, setLoading } from '@src/store/slices/appSlice';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoading } = useAppSelector(appSelector);
  const dispatch = useAppDispatch();

  const isTouchDevice = useTouchDevice();

  const modalHandler = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    dispatch(setLoading(false));

    return () => {
      dispatch(setLoading(false));
    };
  }, [dispatch]);

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
