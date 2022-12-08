import React from 'react';
import { Link, redirect } from 'react-router-dom';
import Buttons from '../../components/Buttons/Buttons';
import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import { StyledInput, StyledLabel } from '../../components/Form/StyledForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import logo from '../../imgs/Logo.svg';

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    axios
      .post('https://kenziehub.herokuapp.com/sessions', data, {
        headers: { 'content-type': 'application/json' },
      })
      .then((response) =>
        window.localStorage.setItem(
          '@Token',
          JSON.stringify(response.data.token)
        )
      )

      .catch((error) => console.log(error));
  };

  const token = localStorage.getItem('@Token');
  console.log(token);

  const navigateToDashboard = (event) => {
    if (token === null) {
      event.preventDefault();
    } else {
      return redirect('/dashboard');
    }
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

        <Buttons
          className="mg-botton20"
          type="submit"
          onClick={navigateToDashboard}
        >
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
