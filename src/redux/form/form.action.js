import formActionTypes from './form.types';

export const apiRequest = () => ({
    type: formActionTypes.API_REQUEST
})

export const addOrder = newOrder => ({
    type: formActionTypes.ADD_ORDER,
    payload: newOrder
})