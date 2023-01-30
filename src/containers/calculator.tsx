import { DefaultButton } from 'components/defaultButton';
import { useFormik } from 'formik';
import { FC } from 'react';
import { schema } from 'schemas/calculator';
import { storeProvider } from 'store';

export const CalculatorContainer: FC = () => {
  const INPUT_TW = 'bg-background w-2/3 text-secondary';

  const handleCalculate = storeProvider(state => state.calculateResult);

  const result = storeProvider(state => state.result);

  const formik = useFormik({
    initialValues: {
      cost: 0,
      expenses: 0,
      profit: 0
    },
    validationSchema: schema,
    onSubmit: async values => {
      const PROFIT_PERCENT = values.profit / 100 + 1;
      const BASE_VALUE = values.cost + values.expenses;

      handleCalculate(BASE_VALUE * PROFIT_PERCENT);
    }
  });

  return (
    <div className="bg-primary h-screen w-screen flex flex-col items-center justify-center text-secondary text-center">
      <h1 className="[max-700]: w-5/6">
        Informe o seu custo, despesa e o quanto você deseja lucrar.
      </h1>
      <strong className="[max-700]:w-5/6">
        Se tiver dúvidas do que é custo, depesa e margem de lucro, leia nosso
        tutorial.
      </strong>
      <DefaultButton text="Aprenda agora" path="/guide" />

      <form
        className="bg-secondary flex flex-col justify-center gap-1 mt-10 w-72 max-h-full h-2/5 items-center w-72 [max-400]:"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="cost" className="text-primary">
          Custo:
        </label>
        <input
          name="cost"
          type="number"
          className={INPUT_TW}
          value={formik.values.cost}
          onChange={formik.handleChange}
        />

        <label htmlFor="expenses" className="text-primary">
          Despesas:
        </label>
        <input
          name="expenses"
          type="number"
          className={INPUT_TW}
          value={formik.values.expenses}
          onChange={formik.handleChange}
        />

        <label htmlFor="profit" className="text-primary">
          Margem de lucro em %:
        </label>
        <input
          name="profit"
          type="number"
          className={INPUT_TW}
          value={formik.values.profit}
          onChange={formik.handleChange}
        />

        <button
          type="submit"
          className="h-8 bg-primary text-third w-2/5 mt-5 rounded-lg"
        >
          Calcular
        </button>
        <div className="text-primary">Resultado: {result.toFixed(2)}</div>
      </form>
    </div>
  );
};
