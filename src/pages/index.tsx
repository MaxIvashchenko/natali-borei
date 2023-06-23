import React, { useEffect, useState } from 'react';

import { useLoaderContext } from '@src/hooks';
import { Banner, ContactForm, Loader, Modal } from '@src/componets';



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
      {/* <InfoLine /> */}

      <Modal isOpen={isOpen} closeModal={modalHandler}>
        <ContactForm modalHandler={modalHandler} />
      </Modal>
    </>
  );
};
export default Home;
