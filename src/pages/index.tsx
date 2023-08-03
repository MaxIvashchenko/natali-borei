import React, { useEffect, useState } from 'react';
import {
  Banner,
  ContactForm,
  InfiniteScrollLoop,
  Loader,
  Modal
} from '@src/componets';
import { useLoaderContext } from '@src/hooks';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoading, setLoading } = useLoaderContext();

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
      <Banner />
      <InfiniteScrollLoop />
      {/* <InfoLine /> */}

      <Modal isOpen={isOpen} closeModal={modalHandler}>
        <ContactForm />
      </Modal>
    </>
  );
};
export default Home;
