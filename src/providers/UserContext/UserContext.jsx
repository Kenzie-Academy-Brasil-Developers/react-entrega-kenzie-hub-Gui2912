import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRequestsAxios } from '../../services/api';
import { TechContext } from '../Techs/Techs';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userId = window.localStorage.getItem('@userId');
  const userToken = window.localStorage.getItem('@Token');

  const { setUserData } = useContext(TechContext);

  const navigate = useNavigate();
  const exit = () => {
    window.localStorage.clear();
    navigate('/');
  };

  const userDataApi = async () => {
    const data = await getRequestsAxios.getUserData(userId);
    setUserData(data);
  };


  return (
    <UserContext.Provider value={(exit, userId, userToken, userDataApi)}>
      {children}
    </UserContext.Provider>
  );
};
