import formActionTypes from './form.types';

export const apiRequest = () => ({
    type: formActionTypes.API_REQUEST
})


export const addDishType = dish => ({
    type: formActionTypes.ADD_DISH_TYPE,
    payload: dish
})