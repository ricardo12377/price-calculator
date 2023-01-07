import create from 'zustand';

export interface StateProps {
  dark: boolean;
}

const themeState = create<StateProps>(set => ({
  dark: false,
  changeTheme: () => set(state => ({ dark: !state.dark }))
}));

export { themeState };
