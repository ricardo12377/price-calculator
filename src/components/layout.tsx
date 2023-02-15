import { ReactNode } from 'react';
import {
  AiFillHome,
  AiOutlineUnorderedList,
  AiFillSetting,
  AiOutlineLogin
} from 'react-icons/ai';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <main className="h-5/6 w-full">{children}</main>
      <header className="h-20 w-fulla bg-secondary flex items-center pl-10 gap-5">
        <button className="flex w-32 bg-primary flex items-center rounded-md pl-2 gap-1">
          <AiFillHome color="#1a1a62" size={25} />
          <em>Home</em>
        </button>
        <button className="flex w-32 bg-primary flex items-center rounded-md pl-2 gap-1">
          <AiOutlineUnorderedList color="#1a1a62" size={25} />
          <em>Histórico</em>
        </button>
        <button className="flex w-32 bg-primary flex items-center rounded-md pl-2 gap-1">
          <AiFillSetting color="#1a1a62" size={25} />
          <em>Histórico</em>
        </button>
        <button className="flex w-32 bg-primary flex items-center rounded-md pl-2 gap-1">
          <AiOutlineLogin color="#1a1a62" size={25} />
          <em>Login/Register</em>
        </button>
      </header>
    </div>
  );
};
