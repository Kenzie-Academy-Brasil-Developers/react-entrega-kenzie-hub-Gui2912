import React from 'react';
import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import Buttons from '../../components/Buttons/Buttons';
import { StyledInput, StyledLabel } from '../../components/Form/StyledForm';

const Register = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column">
      <div className="d-flex justify-content-between">
        <h1>Kenzie Hub</h1>
        <Buttons>Voltar</Buttons>
      </div>
      <Form className="d-flex align-items-center flex-column">
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>

        <StyledLabel htmlFor="name">Nome</StyledLabel>
        <StyledInput id="name" placeholder="Digite aqui seu nome" />

        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput id='email'/>

        <StyledLabel htmlFor="password">Senha</StyledLabel>
        <StyledInput id='password'/>

        <StyledLabel htmlFor="confirmPassword">Confirmar Senha</StyledLabel>
        <StyledInput id='confirmPassword'/>

        <StyledLabel htmlFor="bio">Bio</StyledLabel>
        <StyledInput id='bio'/>

        <StyledLabel htmlFor="contact">Contato</StyledLabel>
        <StyledInput id='contact'/>

        <StyledLabel htmlFor="module">Selecionar Módulo</StyledLabel>
        <StyledInput id='module'/>
      </Form>
    </Container>
  );
};

export default Register;
