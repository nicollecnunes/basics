import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';
import axios from 'axios';

import {
  Dialog,
  DialogActions,
  DialogContent, 
  DialogTitle,
  Button
} from '@material-ui/core'



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


  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [msg, setMsg] = useState('');

  const salvar = (tarefa) => {
    axios.post(API_URL, tarefa, {
      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado')}
    }).then(resposta => {
      const novaTarefa = resposta.data
      setTarefas([...tarefas, novaTarefa])
      listar()
      setMsg('Item salvo')
      setOpenDialog(true)
    }).catch(err => {
      setMsg('Ocorreu um erro')
      setOpenDialog(true)
      console.log(err)
    })
  }

  const listar = () => {
    axios.get(API_URL, {
      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado')}
    }).then(resposta => {
      const ListaDeTarefas = resposta.data
      setTarefas(ListaDeTarefas)
    }).catch(erro => {
      console.log(erro)
    })
  }

  const alterarStatus = (id) => {
    axios.patch(`${API_URL}/${id}`, null, {
      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado')}
    }).then(response => {
      const lista = [...tarefas]
      lista.forEach(tarefa => {
        if(tarefa.id === id){
          tarefa.done = true;
        }
      })
      setTarefas(lista)
    }).catch(erro => {
      console.log(erro)
    })
  }

  const deletar = (id) => {
    axios.delete(`${API_URL}/${id}`, {
      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado')}
    })
    .then(response => {
      const lista = tarefas.filter(tarefa => tarefa.id !== id)
      setTarefas(lista)
      console.log(response)
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
        <TarefasTable tarefas={tarefas} alterarStatus={alterarStatus} deletar={deletar} />
      </div>
      <Dialog open={openDialog} onClose={e => setOpenDialog(false)}>
        <DialogTitle>Atenção</DialogTitle>
        <DialogContent>{msg}</DialogContent>
        <DialogActions>
          <Button onClick={e => setOpenDialog(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TarefasList;
