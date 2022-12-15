import React from 'react';

import {
  StyledModalContainer,
  StyledModalContainerBackground
} from './StyledModal';

const Modal = ({children}) => {
  return (
    <StyledModalContainerBackground className="d-flex align-items-center justify-content-center">
      <StyledModalContainer>
        {children}
      </StyledModalContainer>
    </StyledModalContainerBackground>
  );
};

export default Modal;
