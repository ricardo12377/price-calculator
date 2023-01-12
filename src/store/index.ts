import create from 'zustand';

export interface StateProps {
  result: number;
  calculateResult: (value: number) => void;
}

const storeProvider = create<StateProps>(set => ({
  result: 0,
  calculateResult: (value: number) => set(() => ({ result: value }))
}));

export { storeProvider };
