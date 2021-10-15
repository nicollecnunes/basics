import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button,
        TextField,
        Grid,
        Select,
      MenuItem,
    FormControl,
  InputLabel, 
  Menu} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const TarefasToolbar = props => {
  const { className, ...rest } = props;

  const [descri, setDescri] = useState('');
  const [categ, setCateg] = useState('');

  

  const classes = useStyles();

  const submit = (event) =>{
    event.preventDefault();
    const tarefa ={
      descricao: descri,
      categoria: categ
    }
    props.salvar(tarefa)
    setDescri('')
    setCateg('')
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />

      </div>
      <div className={classes.row}>
        <Grid container>
          <Grid item md={4}>
            <TextField
              className={classes.searchInput}
              placeholder="Descrição da Tarefa"
              label="Descrição"
              fullWidth
              value={descri}
              onChange={e => setDescri(e.target.value)}
            />
          </Grid>

          <Grid item md={4}>
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select onChange={e => setCateg(e.target.value)} value={categ}>
                <MenuItem value={""}>Selecione..</MenuItem>
                <MenuItem value={"TRABALHO"}>Trabalho</MenuItem>
                <MenuItem value={"ESTUDOS"}>Estudos</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2}>
            <Button onClick={submit} variant="contained" color="secondary">Adicionar</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

TarefasToolbar.propTypes = {
  className: PropTypes.string
};

export default TarefasToolbar;
