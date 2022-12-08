import React from 'react';
import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import Buttons from '../../components/Buttons/Buttons';
import { StyledInput, StyledLabel, StyledSelect } from '../../components/Form/StyledForm';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../imgs/Logo.svg';

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório'),
    email: yup.string().required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório'),
    confirmPassword: yup
      .string()
      .required('Este campo é obrigatório')
      .oneOf([yup.ref('password')], 'As senhas devem ser as mesmas'),
    bio: yup.string().required('Este campo é obrigatório'),
    contact: yup.string().required('Este campo é obrigatório'),
    course_module: yup.string().required('Este campo é obrigatório'),
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
      .post('https://kenziehub.herokuapp.com/users', {data}, {
        headers: { 'content-type': 'application/json' },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <Container className="d-flex align-items-center justify-content-center flex-column">
      <div className="d-flex justify-content-center justify-content-between align-items-between div">
        <img src={logo} alt="Kenzie-hub" />
        <Link to="/" className="link-button-register">
          Voltar
        </Link>
      </div>
      <Form
        className="d-flex align-items-center flex-column"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>

        <StyledLabel htmlFor="name">Nome</StyledLabel>
        <StyledInput placeholder="Digite aqui seu nome" {...register('name')} />
        {errors.name && errors.name.message}

        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          placeholder="Digite aqui seu email"
          type="email"
          {...register('email')}
        />
        {errors.email && errors.email.message}

        <StyledLabel htmlFor="password">Senha</StyledLabel>
        <StyledInput
          type="password"
          placeholder="Digite aqui sua senha"
          {...register('password')}
        />
        {errors.password && errors.password.message}

        <StyledLabel htmlFor="confirmPassword">Confirmar Senha</StyledLabel>
        <StyledInput
          type="password"
          placeholder="Digite novamente sua senha"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && errors.confirmPassword.message}

        <StyledLabel htmlFor="bio">Bio</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Fale sobre você"
          {...register('bio')}
        />
        {errors.bio && errors.bio.message}

        <StyledLabel htmlFor="contact">Contato</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Opções de contato"
          {...register('contact')}
        />
        {errors.contact && errors.contact.message}

        <StyledLabel htmlFor="course_module">Selecionar Módulo</StyledLabel>
        <StyledSelect
          {...register('course_module')}
        >
          <option disabled value="">Selecione o módulo</option>
          <option value="1º Módulo (Frontend iniciante)">1º Módulo (Frontend iniciante)</option>
          <option value="2º Módulo (Frontend avançado)">2º Módulo (Frontend avançado)</option>
          <option value="3º Módulo (Frontend avançado)">3º Módulo (Frontend avançado)</option>
          <option value="4º Módulo (Backend iniciante)">4º Módulo (Backend iniciante)</option>
          <option value="5º Módulo (Backend avançado)">5º Módulo (Backend avançado)</option>
          <option value="6º Módulo (Backend avançado)">6º Módulo (Backend avançado)</option>
        </StyledSelect>
        {errors.course_module && errors.course_module.message}

        <Buttons type="submit">Cadastrar</Buttons>
      </Form>
    </Container>
  );
};

export default Register;
