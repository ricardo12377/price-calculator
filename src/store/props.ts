interface ProductPrice {
  name: string;
  price: number;
}

export interface User {
  name: string;
  email: string;
  prices: ProductPrice[];
}

export interface StateProps {
  result: number;
  calculateResult: (value: number) => void;
  token: string;
  user: User;
}
