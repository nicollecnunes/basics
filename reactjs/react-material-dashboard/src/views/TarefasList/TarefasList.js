import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';
import axios from 'axios';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefasList = () => {
  const classes = useStyles();
  const API_URL = "https://minhastarefas-api.herokuapp.com/tarefas";
  const headers = { 'x-tenant-id': 'nic@email.com' };


  const [tarefas, setTarefas] = useState([]);

  const salvar = (tarefa) => {
    axios.post(API_URL, tarefa, {
      headers: headers
    }).then(resposta => {
      const novaTarefa = resposta.data
      setTarefas([...tarefas, novaTarefa])
      listar()
    }).catch(err => {
      console.log(err)
    })
  }

  const listar = () => {
    axios.get(API_URL, {
      headers: headers
    }).then(resposta => {
      const ListaDeTarefas = resposta.data
      setTarefas(ListaDeTarefas)
    }).catch(erro => {
      console.log(erro)
    })
  }

  const alterarStatus = (id) => {
    axios.patch(`${API_URL}/${id}`, null, {
      headers: headers
    }).then(response => {
      console.log(response.status)
    }).catch(erro => {
      console.log(erro)
    })
  }

  useEffect(() => {
    listar();
  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={salvar}  />
      <div className={classes.content}>
        <TarefasTable tarefas={tarefas} alterarStatus={alterarStatus} />
      </div>
    </div>
  );
};

export default TarefasList;
