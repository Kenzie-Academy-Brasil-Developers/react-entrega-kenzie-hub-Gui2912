import { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteRequestsAxios, getRequestsAxios } from '../../services/api';

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const userId = window.localStorage.getItem('@userId');
  const userToken = window.localStorage.getItem('@Token');

  const navigate = useNavigate();
  const [userData, setUserData] = useState('');
  const [userTechs, setUserTechs] = useState([]);
  const [TechById, setTechById] = useState('');
  // function atuInfos() {
  //    const token = localStorage.getItem('@myHub:TOKEN') 
  //    api.defaults.headers.authorization = `Bearer ${token}` 
  //       api
  //       .get('profile')      
  //       .then(res => setInfos([...infos, res.data.techs]))   
  // }

  useEffect(() => {
    !userToken && navigate('/');
    console.log(userToken);
  }, [userToken]);

  const exit = () => {
    window.localStorage.clear();
    navigate('/');
  };

  const userDataApi = async () => {
    const data = await getRequestsAxios.getUserData(userId);
    setUserData(data);
  };

  const userTechsApi = async () => {
    const data = await getRequestsAxios.getUserTechs(userToken);
    setUserTechs(data);
  };

  useEffect(() => {
    userDataApi();
  }, []);

  useEffect(() => {
    userTechsApi();
  }, []);

  return (
    <TechContext.Provider
      value={{
        navigate,
        userData,
        setUserData,
        userTechs,
        setUserTechs,
        exit,
        userToken,
        TechById,
        setTechById
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
