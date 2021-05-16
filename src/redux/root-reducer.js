import { combineReducers } from 'redux';

import { reducer as formReduxReducer } from 'redux-form';
import formReducer from './form/form.reducer';


export default combineReducers({
    form: formReduxReducer,
    stateFromReducer: formReducer
})