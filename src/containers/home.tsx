import { DefaultButton } from 'components/defaultButton';

export const HomePage = () => {
  return (
    <main className="text-black h-screen w-screen flex justify-center items-center flex-col bg-background">
      <header className="bg-secondary text-primary h-36 w-3/5 text-center flex flex-col items-center justify-center">
        Está com dificuldade para precificar um produto ou um serviço que deseja
        vender?
        <p>Faça uma simulação rapidamente e comece a vender.</p>
      </header>
      <div>
        <DefaultButton text="Começar!!" path="calculator" />
      </div>
    </main>
  );
};
