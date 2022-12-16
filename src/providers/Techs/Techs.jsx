import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRequestsAxios } from '../../services/api';
import { UserContext } from '../UserContext/UserContext';


export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [userData, setUserData] = useState('');
  const [userTechs, setUserTechs] = useState([]);
  const [TechById, setTechById] = useState('');
  const navigate = useNavigate();

  const {userToken, userId, userDataApi} = useContext(UserContext)
  //x
  // function atuInfos() {
  //    const token = localStorage.getItem('@myHub:TOKEN') 
  //    api.defaults.headers.authorization = `Bearer ${token}` 
  //       api
  //       .get('profile')      
  //       .then(res => setInfos([...infos, res.data.techs]))   
  // }

  useEffect(() => {
    !userToken && navigate('/');
    // console.log(userToken);
  }, [userToken]);

  const exit = () => {
    window.localStorage.clear();
    navigate('/');
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
