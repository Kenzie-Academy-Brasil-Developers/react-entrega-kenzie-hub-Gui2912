import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { ModalContext } from '../../../providers/ShowModal/ShowModal';
import { TechContext } from '../../../providers/Techs/Techs';
import { deleteRequestsAxios, postRequestsAxios } from '../../../services/api';
import { formSchemaModal } from '../../../validators/schemas';
import Buttons from '../../Buttons/Buttons';
import Form from '../../Form/Form';
import {  StyledLabel, StyledSelect } from '../../Form/StyledForm';
import Modal from '../Modal';
import {
  StyledDeleteTechButton,
  StyledSubmitTechRegisterButton,
  SyledModalHeader,
} from '../StyledModal';

const TechDetails = () => {
  const { closeModalTechDetails } = useContext(ModalContext);
  const { userToken, TechById, setUserTechs, userTechs } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaModal),
  });

  const exclueTech = async() => {
    const request = await deleteRequestsAxios.deleteTech(TechById, userToken)
  }

  const updateTechLvl = async (data) => {
    const request = await postRequestsAxios.postUpdateTech( data, TechById, userToken )
  }

  return (
    <Modal>
      <SyledModalHeader className="d-flex justify-content-between align-items-center">
        <p>Detalhes da Tecnologia</p>
        <Buttons onClick={closeModalTechDetails}>X</Buttons>
      </SyledModalHeader>
      <Form onSubmit={handleSubmit(updateTechLvl)}>
        <StyledLabel>Nível nessa tecnologia</StyledLabel>
        <StyledSelect {...register('status')}>
          <option disabled>Selecionar o nível</option>
          <option value="iniciante">iniciante</option>
          <option value="intermediário">intermediário</option>
          <option value="avançado">avançado</option>
        </StyledSelect>
        {errors.status && errors.status.message}

        <div className='w-100 d-flex justify-content-between'>
        <StyledSubmitTechRegisterButton className='w-65' type='submit'>
          Salvar Alterações
        </StyledSubmitTechRegisterButton>
        <StyledDeleteTechButton type='button' className='w-30' onClick={() => exclueTech()}>
          Excluir
        </StyledDeleteTechButton>
        </div>
      </Form>
    </Modal>
  );
};

export default TechDetails;
