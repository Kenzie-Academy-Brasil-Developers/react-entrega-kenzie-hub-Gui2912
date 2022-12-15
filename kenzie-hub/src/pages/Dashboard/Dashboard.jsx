import React from 'react';
import Buttons from '../../components/Buttons/Buttons';
import { StyledAddTech } from '../../components/Buttons/StyledButton';
import Container from '../../components/Container/Container';
import {
  StyledContainerContent,
  StyledContainerDashboard,
} from '../../components/Container/StyledContainer';
import { StyledTechCard } from '../../components/TechCards/StyledTechCards';
import TechCards from '../../components/TechCards/TechCards';
import logo from '../../imgs/Logo.svg';
import RegisterTech from '../../components/Modal/RegisterTech/RegisterTech';
import { useContext } from 'react';
import { ModalContext } from '../../providers/ShowModal/ShowModal';
import TechDetails from '../../components/Modal/TechDetails/TechDetails';
import { TechContext } from '../../providers/Techs/Techs';

const Dashboard = () => {
  const { showModal, handleModal, showTechDetails, handleModalTechDetails } =
    useContext(ModalContext);

  const { userData, userTechs, exit } = useContext(TechContext);

  return (
    <Container className="d-flex justify-content-center">
      <StyledContainerContent>
        {showModal && <RegisterTech />}
        {showTechDetails && <TechDetails />}

        <StyledContainerDashboard className="w-100 d-flex justify-content-between mg-20">
          <img src={logo} alt="Kenzie Hub" />
          <Buttons type="button" onClick={exit}>
            Sair
          </Buttons>
        </StyledContainerDashboard>
        <StyledContainerDashboard className="w-100 d-flex justify-content-between mg-20 p-40">
          <h3>{userData.name}</h3>
          <span className="white">{userData.course_module}</span>
        </StyledContainerDashboard>
        <StyledContainerDashboard className="mg-20 d-flex align-items-center justify-content-between">
          <h2>Tecnologias</h2>
          <StyledAddTech onClick={handleModal}>+</StyledAddTech>
        </StyledContainerDashboard>
        <TechCards>
          {userTechs.map((element) => {
            return (
              <StyledTechCard key={element.id} onClick={() => handleModalTechDetails(element)}>
                <h2>{element.title}</h2>
                <p>{element.status}</p>
              </StyledTechCard>
            );
          })}
        </TechCards>
      </StyledContainerContent>
    </Container>
  );
};

export default Dashboard;
