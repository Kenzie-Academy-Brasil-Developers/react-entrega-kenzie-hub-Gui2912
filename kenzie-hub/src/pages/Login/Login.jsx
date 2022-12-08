import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Buttons from '../../components/Buttons/Buttons';
import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import { StyledInput, StyledLabel } from '../../components/Form/StyledForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import logo from '../../imgs/Logo.svg';
import { api } from '../../services/api';
import { formSchemaLogin } from '../../validators/schemas';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post('sessions', data)
      .then((response) => {
        toast.success('Login feito com sucesso!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          theme: 'light',
        });
        window.localStorage.setItem('@Token', response.data.token);
        window.localStorage.setItem('@userId', response.data.user.id);
        navigate('/dashboard');
      })
      .catch(() =>
        toast.error('Algo deu errado, verifique se o email e senha estão corretos', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          theme: 'light',
        })
      );
  };

  return (
    <Container className="d-flex align-items-center justify-content-center flex-column">
      <div className="d-flex justify-content-between">
        <img src={logo} alt="" className="mg-botton20" />
      </div>
      <Form
        className="d-flex align-items-center flex-column"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <h2>Login</h2>

        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          id="email"
          {...register('email')}
          placeholder="Email de cadastro"
        />
        {errors.email && errors.email.message}

        <StyledLabel htmlFor="password">Senha</StyledLabel>
        <StyledInput
          placeholder="Senha de cadastro"
          id="password"
          {...register('password')}
          type="password"
        />
        {errors.password && errors.password.message}

        <Buttons className="mg-botton20" type="submit">
          Entrar
        </Buttons>

        <p>Ainda não possui conta?</p>
        <Link className="link-button-login" to={'/register'}>
          Cadastrar
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
