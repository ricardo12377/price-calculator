import Link from 'next/link';
import { FC } from 'react';

export interface ButtonPropsForm {
  callback?: () => void;
}

export interface ButtonPropsHome {
  text: string;
  path: string;
}

type Props = ButtonPropsHome & ButtonPropsForm;

export const DefaultButton: FC<Props> = props => {
  const { text, path } = props;

  return (
    <Link href={path}>
      <button className="text-third text-primary bg-secondary w-48 h-12 rounded-lg mt-4 ml-400 max-[400px]:w-40">
        {text}
      </button>
    </Link>
  );
};
