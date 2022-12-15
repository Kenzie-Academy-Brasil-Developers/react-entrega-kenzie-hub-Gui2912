import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { formSchemaModal } from '../../../validators/schemas';
import Buttons from '../../Buttons/Buttons';
import Form from '../../Form/Form';
import { StyledInput, StyledLabel, StyledSelect } from '../../Form/StyledForm';
import Modal from '../Modal';
import {
  StyledSubmitTechRegisterButton,
  SyledModalHeader,
} from '../StyledModal';
import { useContext } from 'react';
import { ModalContext } from '../../../providers/ShowModal/ShowModal';
import { postRequestsAxios } from '../../../services/api';
import { TechContext } from '../../../providers/Techs/Techs';

const RegisterTech = () => {
  const { handleModal } = useContext(ModalContext);
  const { setUserTechs, userTechs } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaModal),
  });

  const userToken = localStorage.getItem('@Token')

  const registerNewTech = async(data) => {
    const techFormulary = await postRequestsAxios.postCreateTech(data, userToken)
    setUserTechs([...userTechs,techFormulary])
  };

  return (
    <Modal>
      <SyledModalHeader className="d-flex justify-content-between align-items-center">
        <p>Cadastrar Tecnologia</p>
        <Buttons onClick={handleModal}>X</Buttons>
      </SyledModalHeader>
      <Form onSubmit={handleSubmit(registerNewTech)}>
        <StyledLabel>Nome</StyledLabel>
        <StyledInput placeholder="Nome da tecnologia" {...register('title')} />
        {errors.title && errors.title.message}

        <StyledLabel>Nível nessa tecnologia</StyledLabel>
        <StyledSelect {...register('status')}>
          <option disabled>Selecionar o nível</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </StyledSelect>
        {errors.status && errors.status.message}

        <StyledSubmitTechRegisterButton>
          Cadastrar Tecnologia
        </StyledSubmitTechRegisterButton>
      </Form>
    </Modal>
  );
};

export default RegisterTech;
