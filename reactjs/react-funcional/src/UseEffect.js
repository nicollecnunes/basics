import {useState, useEffect} from 'react';

function UseEffect() {

  const [num1, setNum1] = useState(''); // dentro dos () fica o valor padrao
  const [num2, setNum2] = useState('');
  const [res, setRes] = useState('');

  const somar = () => {
    const n1Int = parseInt(num1);
    const n2Int = parseInt(num2);

    setRes(n1Int + n2Int);
  }

  useEffect(() => { //componentDidMount
    console.log("[UEF] num1: ", num1)
    console.log("[UEF] num2: ", num2)
  }, [num1, num2])
  //segundo parametro é opcional. é o que o use effect monitora, sempre que
  //modifica [x], ele chama o useeffect de novo

  // se deixar [] ele só chama a primeira fez
  // se deixar sem nada, ele chama toda vez que modificar qualquer variável
  // se deixar [x], ele chama toda vez que modificar a variavel x

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
