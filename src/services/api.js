import axios from 'axios';
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com/',
  timeout: 3000,
});

export const getRequestsAxios = {
  getUserData: async (userId) => {
    try {
      const request = await api.get(`users/${userId}`);

      return request.data;
    } catch (err) {
      console.log(err);
    }
  },
  getUserTechs: async (userToken) => {
    try {
      const request = await api.get('profile', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      return request.data.techs;
    } catch (err) {
      console.log(err);
    }
  },
};

export const postRequestsAxios = {
  loginRequest: async (data, navigate) => {
    try {
      const request = await api.post('sessions', data);
      toast.success('Login feito com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        theme: 'light',
      });
      window.localStorage.setItem('@Token', request.data.token);
      window.localStorage.setItem('@userId', request.data.user.id);
      navigate('/dashboard');
    } catch (err) {
      toast.error(
        'Algo deu errado, verifique se o email e senha estão corretos',
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          theme: 'light',
        }
      );
    }
  },
  postCreateTech: async (data, userToken) => {
    try {
      const request = await api.post('users/techs', data, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      toast.success('Tecnologia Cadastrada com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        theme: 'colored',
      });
      return request.data;
    } catch (err) {
      toast.error('Algo deu errado :()', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        theme: 'colored',
      });
    }
  },
  postUpdateTech: async (data, techId, userToken) => {
    try {
      const request = await api.post(
        `users/techs/${techId}`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      return request;
    } catch (err) {
      console.log(err);
    }
  },
};

export const deleteRequestsAxios = {
  deleteTech: async (techId, userToken) => {
    try {
      const request = await api.delete(`users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      
      toast.success('Tecnologia excluida com sucesso', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        theme: 'colored',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
