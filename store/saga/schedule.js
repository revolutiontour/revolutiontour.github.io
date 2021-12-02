import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification,message } from 'antd';

import { actionTypes, detailScheduleSuccess, listScheduleSuccess, registTourGroupScheduleSuccess } from '../actions/schedule';
import scheduleRepository from '../../repositories/scheduleRepository';

import Router from 'next/router';

const modalFailed = (msg) => {
    notification['error']({
        message: msg,
        description: 'Gagal mendapatkan schedule',
    });
};


const modalSuccessRegis = () => {
    notification['success']({
        message: 'Registrasi Berhasil',
        description: 'Anda berhasil registrasi schedule',
    });
};

function* listScheduleSaga() {
    try {
        const schedule = yield call(scheduleRepository.getSchedule);
        if (!schedule) {
            modalFailed('error','');
        } else {
            if (schedule.responseMessage==="SUCCESS") {
                yield put(listScheduleSuccess(schedule.data));
                // Router.push({
                //     pathname: '/dashboard',
                // });
            } else {
                modalFailed('error',user.responseMessage);
            }
        }
    } catch (err) {
        console.log(err);
    }
}
function* detailScheduleSaga({payload}) {
    try {
        const hide = message.loading({
            content:
                'Data sedang diproses...',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
        // Dismiss manually and asynchronously
        setTimeout(hide, 2500);
        const schedule = yield call(scheduleRepository.getDetailSchedule,payload);
        if (!schedule) {
            modalFailed('error','');
        } else {
            if (schedule.responseMessage==="SUCCESS") {
                yield put(detailScheduleSuccess(schedule.data));
                // Router.push({
                //     pathname: '/dashboard',
                // });
            } else {
                modalFailed('error',user.responseMessage);
            }
        }
    } catch (err) {
        console.log(err);
    }
}

function* registTourGroupScheduleSaga({payload}) {
    console.log('regist Tour Group Schedule')
    try {
        const schedule = yield call(scheduleRepository.registTourGroupSchedule,payload);
        if (!schedule) {
            modalFailed('error','');
        } else {
            console.log(schedule)
            if (schedule.responseMessage==="SUCCESS") {
                // yield put(registTourGroupScheduleSuccess(schedule.data));
                modalSuccessRegis()
                Router.push({
                    pathname: '/dashboard',
                });
            } else {
                modalFailed('error',schedule.responseMessage);
            }
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LIST_SCHEDULE_REQUEST, listScheduleSaga)]);
    yield all([takeEvery(actionTypes.DETAIL_SCHEDULE_REQUEST, detailScheduleSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_TOURGROUPSCHEDULE_REQUEST, registTourGroupScheduleSaga)]);
}