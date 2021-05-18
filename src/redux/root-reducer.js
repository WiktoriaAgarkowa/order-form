import { combineReducers } from 'redux';

import { reducer as formReduxReducer } from 'redux-form';


export default combineReducers({
    form: formReduxReducer
})