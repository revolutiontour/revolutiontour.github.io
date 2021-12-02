import { all } from 'redux-saga/effects';
import memberSaga from './member'
import scheduleSaga from './schedule'
import objectSaga from './object'

export default function* rootSaga() {
    yield all([
        memberSaga(),
        scheduleSaga(),
        objectSaga(),
    ])
}