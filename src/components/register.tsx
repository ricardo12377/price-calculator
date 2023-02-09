import { useFormik } from 'formik';
import { FC } from 'react';

import { InputField } from './input';

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
    <form onSubmit={formik.handleSubmit}>
      <InputField
        name="name"
        type="text"
        placeholder="Insira o nome da empresa"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.name)}
      />
      <InputField
        type="text"
        name="email"
        placeholder="Insira seu email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.email)}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Insira o nome da empresa"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.name)}
      />
      <InputField
        type="confirm"
        name="password"
        placeholder="Insira o nome da empresa"
        value={formik.values.confirm}
        onChange={formik.handleChange}
        error={Boolean(formik.errors.confirm)}
      />
    </form>
  );
};
