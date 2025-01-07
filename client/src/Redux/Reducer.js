import { GETCONTACTS, GETONECONTACT } from "./ActionTypes"

const initialState= {
    contacts : [],
    oneContact : {}
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {
        case GETCONTACTS : return {...state, contacts : action.payload} 
        case GETONECONTACT : return {...state, oneContact : action.payload}  
        default: return state
    }
}

export default Reducer