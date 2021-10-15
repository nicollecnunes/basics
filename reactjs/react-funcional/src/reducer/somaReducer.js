import { useReducer } from "react";

const STATE_INICIAL = {
    res: ''
}

const somaReducer = (state = STATE_INICIAL, action) => {
    console.log("[2] action executed: ", JSON.stringify(action))
    // action -> dispatcher -> store -> view (flux)
    // action é a ação que disparou esse evento
    switch(action.type){
        case 'SUBTRACAO':
            return {...state, res: action.payload}
        case 'SOMA':
            return {...state, res: action.payload}
            // retorna o state atual
            // e a variavel resultado recebe o payload da action
        default:
            return state;
    }

}

const useStore = () => useReducer(somaReducer, STATE_INICIAL)

export default useStore;