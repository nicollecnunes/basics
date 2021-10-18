import {combineReducers} from 'redux';
import { tarefasReducer } from './tarefasReducer';
import { msgReducer } from './mensagensReducer';

const mainReducer =combineReducers({
    tarefas: tarefasReducer,
    mensagens: msgReducer
})

export default mainReducer;

