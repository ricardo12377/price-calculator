import { DefaultButton } from 'components/defaultButton';

export const HomePage = () => {
  return (
    <main className="bg-primary text-black h-screen w-screen flex justify-center items-center flex-col bg-background">
      <header
        className={`
      bg-secondary text-primary h-36 w-3/5 text-center flex flex-col items-center justify-center rounded-md
      max-[400px]:w-4/5 max-[400px]:h-52
      `}
      >
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
