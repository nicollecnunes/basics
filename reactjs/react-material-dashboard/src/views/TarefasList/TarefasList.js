import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';

import {esconderMsg} from '../../store/mensagensReducer'

import {
  Dialog,
  DialogActions,
  DialogContent, 
  DialogTitle,
  Button
} from '@material-ui/core'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listar, salvar, deletar, alterarStatus} from '../../store/tarefasReducer'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefasList = (props) => {
  const classes = useStyles();


  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    props.listar();
  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={props.salvar}  />
      <div className={classes.content}>
        <TarefasTable tarefas={props.tarefas}
        alterarStatus={props.alterarStatus} deletar={props.deletar} />
      </div>
      <Dialog open={props.openDialog}
      onClose={props.esconderMsg}>
        <DialogTitle>Atenção</DialogTitle>
        <DialogContent>{props.mensagem}</DialogContent>
        <DialogActions>
          <Button onClick={props.esconderMsg}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapStateToProps = state => ({
  tarefas: state.tarefas.tarefas,
  mensagem: state.mensagens.mensagem,
  openDialog: state.mensagens.mostrarMsg
})

const mapDispatchToProps = dispatch => 
bindActionCreators({
  listar,
  salvar,
  deletar,
  alterarStatus,
  esconderMsg}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (TarefasList);
// tarefaslist vai receber via props
