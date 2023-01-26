import * as yup from 'yup';

export const schema = yup.object().shape({
  cost: yup.string().required(),
  expenses: yup.number().required(),
  profit: yup.number().required()
});
