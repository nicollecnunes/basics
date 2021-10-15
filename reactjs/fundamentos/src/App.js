import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IconContext } from "react-icons";
import { FaQuestionCircle } from 'react-icons/fa'


class App extends React.Component {

  state = {
    nome: '',
    msgBoasVindas: 'Cadastro',
    letraFinal: 'x',
    email: '',
    check: false
  }



  testaCheckbox = (event) => { 
    var checkNovo = event.target.value;
    this.setState({
      check : checkNovo,    
    })
  }

  modificarNome = (event) => {
    var novoNome = event.target.value;
    this.setState({
      nome: novoNome,
    }) 
  }

  modificarEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  modificarMensagem = (event) => {
    let genero = event.target.value
    let letra = ""
    
    if (genero === "masculino")
      letra ="o"    
    else
      letra = "a"

      this.setState({
        msgBoasVindas: 'Seja bem-vind' + letra + ", " + this.state.nome + '!'
      })
  }
  

  checkForm = () =>  {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if((this.state.check))
      if((this.state.email != "") && (this.state.nome != "") && re.test(this.state.email))
        alert("Conta criada!")
      else   
        alert("Por favor, preencha todos os campos")
    else
      alert("Por favor, aceite os termos")
  }

  render() {
    return (
      // retorna um 'no': componente unico
      <>
        <div className="container-principal">
          <div className="titulo">
          <h1>{this.state.msgBoasVindas}</h1>
          </div>
          <div className="container-input">
            <IconContext.Provider value={{ color: '#6409db', size: '25px' }}>
              <div className="icon-container">
                <BsFillPersonFill />
              </div>
            </IconContext.Provider>
            <input type="text" placeholder="Nome" onChange={this.modificarNome} className="campo" required/>
          </div>

          <div className="container-input">
            <IconContext.Provider value={{ color: '#6409db', size: '25px' }}>
              <div className="icon-container">
                <MdEmail />
              </div>
            </IconContext.Provider>
            <input type="email" placeholder="E-mail" onChange={this.modificarEmail} className="campo" required/>
          </div>

          <div className="container-input">
            <IconContext.Provider value={{ color: '#6409db', size: '25px' }}>
              <div className="icon-container">
                <FaQuestionCircle />
              </div>
            </IconContext.Provider>
            <select onChange={this.modificarMensagem} className="campo" required>
              <option disabled selected value> Selecione uma opção </option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>

          <p><input type="checkbox" onChange={this.testaCheckbox}/> Eu li e aceito os <u>Termos e Condições</u></p>
          <button type="submit" className="botaoSubmit" onClick={this.checkForm}>Criar Conta</button>
          <p>Sua conta foi criada há {this.props.tempo} dias</p>
        </div>
      </>
    )
  }
}

// exportacao para que o componente seja visualizado pelos outros
export default App;
