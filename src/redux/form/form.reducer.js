import formActionTypes from './form.types';

const INITIAL_STATE = {
    typeOfDish: "",
    order: {}
};

const formReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        
        case formActionTypes.ADD_ORDER:
            return {
                ...state,
                order: action.payload
            }    

        default:
                return state
    }

}


export default formReducer;

