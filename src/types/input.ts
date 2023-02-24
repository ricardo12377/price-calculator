import { ChangeEvent } from 'react';

export interface InputT {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<unknown>) => void;
  error: boolean;
}
