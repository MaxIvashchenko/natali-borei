import React, { useEffect, useState } from 'react';
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
import { useLoaderContext, useMobile } from '@src/hooks';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoading, setLoading } = useLoaderContext();
  const isMobile = useMobile();

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
      <Banner />
      {isMobile ? <CategorySlider /> : <InfiniteScrollLoop />}
      <PopularItems />
      {/* <InfoLine /> */}

      <Modal isOpen={isOpen} closeModal={modalHandler}>
        <ContactForm />
      </Modal>
    </>
  );
};
export default Home;
