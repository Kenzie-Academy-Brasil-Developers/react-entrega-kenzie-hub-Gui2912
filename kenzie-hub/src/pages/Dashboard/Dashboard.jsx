import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/Buttons/Buttons';
import Container from '../../components/Container/Container';
import { StyledContainerContent } from '../../components/Container/StyledContainer';
import logo from '../../imgs/Logo.svg';
import { api } from '../../services/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState('')


  const exit = () => {
    window.localStorage.clear();
    navigate('/');
  };

  const userId = window.localStorage.getItem('@userId');

   useEffect(() => {
    async function apiData() {
      try {
        const request = await api.get(`users/${userId}`);

        setUserData(request.data);
      } catch (err) {
        console.log(err);
      }
    }
    apiData();
  }, []);

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
          <h3>{userData.name}</h3>
          <span className='white'>{userData.course_module}</span>
        </div>
        <div className="w-100">
          <h2 className="mg-20">Que pena! Estamos em desenvolvimento :( </h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </StyledContainerContent>
    </Container>
  );
};

export default Dashboard;
