import { all, takeLatest, call } from "redux-saga/effects";
import formActionTypes from './form.types';
import submit from "../../api/Submit";

export function* formSagas() {
    yield all([call(listenToApiRequest)]);
}

export function* listenToApiRequest() {
    yield takeLatest(formActionTypes.API_REQUEST, submit);
}
