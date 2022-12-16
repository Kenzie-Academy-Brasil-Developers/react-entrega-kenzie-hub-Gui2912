import { createContext, useContext, useState } from 'react';
import { TechContext } from '../Techs/Techs';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTechDetails, setShowTechDetails] = useState(false);
  const {setTechById} = useContext(TechContext)

  const handleModal = () => setShowModal(!showModal);

  const handleModalTechDetails = (element) => {
    setShowTechDetails(true)
    setTechById(element.id)
  };

  const closeModalTechDetails = () => setShowTechDetails(false)

  return (
    <ModalContext.Provider
      value={{
        handleModal,
        showModal,
        setShowModal,
        handleModalTechDetails,
        showTechDetails,
        setShowTechDetails,
        closeModalTechDetails
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
