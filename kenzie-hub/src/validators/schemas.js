  import * as yup from 'yup';
  
  export const formSchemaRegister = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório'),
    email: yup.string().required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório'),
    confirmPassword: yup
      .string()
      .required('Este campo é obrigatório')
      .oneOf([yup.ref('password')], 'As senhas devem coincidir'),
    bio: yup.string().required('Este campo é obrigatório'),
    contact: yup.string().required('Este campo é obrigatório'),
    course_module: yup.string().required('Este campo é obrigatório'),
  });

  export const formSchemaLogin = yup.object().shape({
    email: yup.string().required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório'),
  });