
const ESTADO_INICIAL={
    mensagem: '',
    mostrarMsg: false
}

export const ACTIONS ={
    MOSTRAR_MSG: 'MOSTRAR_MSG',
    ESCONDER_MSG: 'ESCONDER_MSG'
}

export function msgReducer(state = ESTADO_INICIAL, action) {
    switch(action.type){
        case ACTIONS.MOSTRAR_MSG:
            return {...state, mensagem: action.mensagem, mostrarMsg: true}
        case ACTIONS.ESCONDER_MSG:
            return {...state, mensagem: '', mostrarMsg: false}
        default:
            return state;
    }
}

export function mostrarMsg(msg){
    return {
        type: ACTIONS.MOSTRAR_MSG,
        mensagem: msg
    }
}

export function esconderMsg(){
    return{
        type: ACTIONS.ESCONDER_MSG,
    }
}