import { FC } from 'react';
import { ButtonPropsForm, ButtonPropsHome } from 'types/buttonForm';

type Props = ButtonPropsHome & ButtonPropsForm;

export const FormButton: FC<Props> = props => {
  const { text, type } = props;

  return <button type={type}>{text}</button>;
};
