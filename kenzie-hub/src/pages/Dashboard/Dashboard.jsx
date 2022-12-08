import React from 'react';
import Buttons from '../../components/Buttons/Buttons';
import Container from '../../components/Container/Container';
import { StyledContainerContent } from '../../components/Container/StyledContainer';
import logo from '../../imgs/Logo.svg';

const Dashboard = () => {
  const exit = () => window.localStorage.clear();

  return (
    <Container className="d-flex justify-content-center">
      <StyledContainerContent>
        <div className="w-100 d-flex justify-content-between mg-20">
          <img src={logo} alt="Kenzie Hub" />
          <Buttons type="button" onClick={exit}>
            Sair
          </Buttons>
        </div>
        <div className="w-100 d-flex justify-content-between mg-20 p-40">
          <h3>Nome</h3>
          <span>Módulo</span>
        </div>
        <div className="w-100">
          <h2 className='mg-20'>Que pena! Estamos em desenvolvimento :( </h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </StyledContainerContent>
    </Container>
  );
};

export default Dashboard;
