import axios from 'axios';
import { mostrarMsg } from './mensagensReducer';

const http = axios.create({
    baseURL: 'https://minhastarefas-api.herokuapp.com'
})

const ACTIONS ={
    LISTAR: "TAREFAS_LISTAR",
    ADD: "TAREFAS_ADD",
    REMOVER: "TAREFAS_REMOVER",
    UPDATE: "TAREFAS_ATUALIZAR"
}

const ESTADO_INICIAL={
    tarefas: []
}
export const tarefasReducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type){
        case ACTIONS.LISTAR:
            return{...state, tarefas: action.tarefas}
        case ACTIONS.ADD:
            return{...state, tarefas: [...state.tarefas, action.tarefas]}
        case ACTIONS.REMOVER:
            const id = action.id;
            const tarefasFiltrado = state.tarefas.filter(tarefa => tarefa.id !== id)
            return{...state, tarefas: tarefasFiltrado}
        case ACTIONS.UPDATE:
            const lista = [...state.tarefas]
            lista.forEach(tarefa => {
                if(tarefa.id === action.id){
                    tarefa.done = true;
                }
            })
            return {...state, tarefas: lista}
        default:
            return state;

    }

}

export function listar(){
    return dispatch =>{
        http.get('/tarefas', {
            headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado')}
        }).then(response => {
            dispatch({
                type: ACTIONS.LISTAR,
                tarefas: response.data
            })
        })
    }
}

export function salvar (tarefa) {
    return dispatch => {
        http.post('/tarefas', tarefa, {
            headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado')}
        }).then(response =>{
            dispatch([{
                type: ACTIONS.ADD,
                tarefas: response.data
            }, mostrarMsg("Salvo!")])
        })
    }
}

export function deletar(id){
    return dispatch => {
        http.delete(`/tarefas/${id}`, {
            headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado')}
        }).then(response => {
            dispatch([{
                type: ACTIONS.REMOVER,
                id: id
            }, mostrarMsg("Deletado.")])
        })
    }
}

export function alterarStatus(id) {
    return dispatch => {
        http.patch(`/tarefas/${id}`, null, {
          headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado')}
        }).then(response => {
            dispatch([{
                type: ACTIONS.UPDATE,
                id: id
            }, mostrarMsg("Salvo")])
        })

    }
}