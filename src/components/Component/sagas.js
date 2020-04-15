import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import { GET_DATA_START, GET_DATA_FAIL, GET_DATA_SUCCESS } from './constants';

function getJson() {
    return axios({
        method: 'get',
        url: 'https://some.url.com/',
        responseType: 'json',
    });
}

function* getData() {
    try {
        const { data } = yield call(getJson);

        yield put({ type: GET_DATA_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: GET_DATA_FAIL });
    }
}

export default [
    takeLatest(GET_DATA_START, getData),
];
