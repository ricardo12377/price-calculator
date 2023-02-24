export interface ButtonPropsForm {
  callback?: () => void;
}

export interface ButtonPropsHome {
  text: string;
  type: 'submit' | 'reset' | undefined;
}
