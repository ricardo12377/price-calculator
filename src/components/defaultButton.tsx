import { FC } from 'react';

export interface ButtonPropsForm {
  callback?: () => void;
}

export interface ButtonPropsHome {
  text: string;
  onClick?: () => void;
}

type Props = ButtonPropsHome & ButtonPropsForm;

export const DefaultButton: FC<Props> = props => {
  const { text } = props;

  return <button className="text-indigo-100 bg-primary">{text}</button>;
};
