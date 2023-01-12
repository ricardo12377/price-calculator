import { DefaultButton } from 'components/defaultButton';
import { FC } from 'react';
import { storeProvider } from 'store';

export const CalculatorContainer: FC = () => {
  const INPUT_TW = 'bg-background w-2/3 text-primary';

  const handleCalculate = storeProvider(state => state.calculateResult);

  return (
    <div className="bg-background h-screen w-screen flex flex-col items-center justify-center text-primary">
      <h1>Informe o seu custo, despesa e o quanto você deseja lucrar.</h1>
      <strong>
        Se tiver dúvidas do que é custo, depesa e margem de lucro, leia nosso
        tutorial.
      </strong>
      <DefaultButton text="Aprenda agora" path="/guide" />

      <form className="flex flex-col justify-center gap-1 mt-10 bg-third w-72 max-h-full h-2/5 items-center">
        <label htmlFor="cost">Custo:</label>
        <input name="cost" type="number" className={INPUT_TW} />

        <label htmlFor="expenses">Despesas:</label>
        <input name="expenses" type="number" className={INPUT_TW} />

        <label htmlFor="profit">Margem de lucro:</label>
        <input name="profit" type="number" className={INPUT_TW} />

        <button
          type="submit"
          className="h-8 bg-primary text-third w-2/5 mt-5 rounded-lg"
        >
          Calcular
        </button>
      </form>
    </div>
  );
};
