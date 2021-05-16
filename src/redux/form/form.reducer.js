import formActionTypes from './form.types';

const INITIAL_STATE = {
    typeOfDish: ""
};

const formReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case formActionTypes.ADD_DISH_TYPE:
            return {
                ...state,
                typeOfDish: action.payload
            }

            default:
                return state
    }
}

export default formReducer;

