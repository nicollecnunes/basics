import {useState} from 'react';

function UseState() {

  const [num1, setNum1] = useState(); // dentro dos () fica o valor padrao
  const [num2, setNum2] = useState();
  const [res, setRes] = useState();

  const somar = () => {
    const n1Int = parseInt(num1);
    const n2Int = parseInt(num2);

    setRes(n1Int + n2Int);
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
      <br/>
      Resultado:
      <input type="text" value={res}/>
    </div>
  );
}

export default App;
