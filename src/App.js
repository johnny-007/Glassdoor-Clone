import React, { useState } from 'react';
import Header from './components/Header';
import BodySection from './components/BodySection';
import InfoSection from './components/InfoSection';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header openModal={openModal} />
      <BodySection />
      <InfoSection />
      <SearchSection openModal={openModal} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
