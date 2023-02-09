import { FC } from 'react';
import { InputT } from 'types/input';

export const InputField: FC<InputT> = ({
  name,
  placeholder,
  value,
  onChange,
  error,
  type
}) => {
  return (
    <input
      name={name}
      type={type}
      className={`${
        error ? 'border-red-500' : 'border-primary'
      } w-72 h-24 rounded-lx`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
