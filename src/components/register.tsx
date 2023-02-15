import { useFormik } from 'formik';
import { FC } from 'react';

import { InputField } from './input';
import { FormButton } from './formButton';

export const RegisterForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: ''
    },
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      return values;
    }
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col w-2/5 h-3/5 bg-secondary items-center justify-center gap-2"
    >
      <>
        <label htmlFor="name" className="text-primary">
          Insira seu nome
        </label>
        <InputField
          name="name"
          type="text"
          placeholder="Insira o nome da empresa"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.name)}
        />
      </>
      <>
        <label htmlFor="email" className="text-primary">
          Insira o seu Email
        </label>
        <InputField
          type="text"
          name="email"
          placeholder="Insira seu email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.email)}
        />
      </>
      <>
        <label htmlFor="password" className="text-primary">
          Insitura a senha
        </label>
        <InputField
          type="password"
          name="password"
          placeholder="Insira o nome da empresa"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.name)}
        />
      </>
      <>
        <label htmlFor="password" className="text-primary">
          Confirme o password
        </label>
        <InputField
          type="confirm"
          name="password"
          placeholder="Insira o nome da empresa"
          value={formik.values.confirm}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.confirm)}
        />
      </>

      <FormButton text={'Cadastrar'} type={undefined} callback={() => null} />
    </form>
  );
};
