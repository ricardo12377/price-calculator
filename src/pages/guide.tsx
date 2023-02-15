import { DefaultButton } from 'components/defaultButton';

export default function Guide() {
  return (
    <div className="w-screen h-screen text-secondary flex flex-col items-center justify-center">
      <div className="flex flex-col h-2/6 w-3/5 justify-between mb-10">
        <strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab,
          perspiciatis quae officiis consequatur ipsum! Quis, expedita maxime
        </strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab,
          perspiciatis quae officiis consequatur ipsum! Quis, expedita maxime
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi,
          repellendus consequuntur, tempora ut ipsum suscipit magni sit eligendi
          id incidunt facere aliquam autem totam cupiditate ex possimus debitis
          quod!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab,
          perspiciatis quae officiis consequatur ipsum! Quis, expedita maxime
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatem tempore quos aliquam nobis voluptates optio, culpa sint
          quidem labore dignissimos alias fuga a. Aliquam illo quos magnam
          voluptate beatae?
        </p>
      </div>

      <DefaultButton text={'Voltar'} path={'/calculator'} />
    </div>
  );
}
