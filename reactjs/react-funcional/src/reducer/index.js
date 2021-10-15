import {useState} from 'react';

import useStore from './somaReducer';

function ReducerHook() {

  const [num1, setNum1] = useState(''); // dentro dos () fica o valor padrao
  const [num2, setNum2] = useState('');

  const [store, dispatch] = useStore();

  const somar = () => {
    const n1Int = parseInt(num1);
    const n2Int = parseInt(num2);

    console.log("[1] dispatching action")

    dispatch({
        type: 'SOMA',
        payload: n1Int + n2Int
    })
  }

  const subtrair = () => {
    const n1Int = parseInt(num1);
    const n2Int = parseInt(num2);

    console.log("[1] dispatching action")

    dispatch({
        type: 'SUBTRACAO',
        payload: n1Int - n2Int
    })
  }

  return (
    <div>
      Numero 1:
      <input type="text" onChange={event => setNum1(event.target.value)}/>
      <br/>
      Numero 2:
      <input type="text" onChange={event => setNum2(event.target.value)}/>
      <br/>
      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button>
      <br/>
      Resultado:
      <input type="text" value={store.res}/>
    </div>
  );
}

export default ReducerHook;
