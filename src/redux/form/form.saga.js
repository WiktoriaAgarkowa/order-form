import { all, takeLatest, call } from "redux-saga/effects";

import axios from 'axios';

export function* formSagas() {
    console.log('start working')
    yield all([call(listenToApiRequest)]);
}

export function* listenToApiRequest() {
    console.log('second working')
    yield takeLatest('API_REQUEST', callFunctionSagaRequest);
}

const submit = values => {
    console.log('submit working!')

    values.id = Date.now()
    values.no_of_slices = parseInt(values.no_of_slices);
    values.diameter = parseInt(values.diameter);
    values.spiciness_scale = parseInt(values.spiciness_scale);
    values.slices_of_bread = parseInt(values.slices_of_bread);
  
    const headers = {
      'Content-Type': 'application/json'
    }
  
    axios.post(
      'https://frosty-wood-6558.getsandbox.com:443/dishes',
      JSON.stringify(values),
      {'headers': headers})
      .then((req) => {
        console.log(req)
      })
      .catch((error) => {
        console.log(error.message);
      });
  
  }

export function* callFunctionSagaRequest() {
    console.log('working!!!!')
    const request = yield call(submit)
    request.next();
}