import create from 'zustand';

import { StateProps, User } from './props';

const storeProvider = create<StateProps>(set => ({
  result: 0,
  user: {} as User,
  token: '',
  calculateResult: (value: number) => set(() => ({ result: value })),
  login: ({ user, token }: { user: User; token: string }) =>
    set(() => ({ user: user, token: token }))
}));

export { storeProvider };
