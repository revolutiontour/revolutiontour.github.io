import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import { notification,message } from 'antd';

import { actionTypes, detailScheduleSuccess, listSchedule, listScheduleSuccess, registTourGroupScheduleSuccess } from '../actions/schedule';
import scheduleRepository from '../../repositories/scheduleRepository';

import Router from 'next/router';
import { useDispatch } from 'react-redux';

const modalFailed = (msg) => {
    notification['error']({
        message: msg,
        description: 'Gagal mendapatkan schedule',
    });
};

const modalWarning = (msg) => {
    notification['warning']({
        message: msg,
        description: 'schedule tidak tersedia',
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
            }
            else if(schedule.responseMessage==="DATA NOT EXIST"){
                // modalWarning(schedule.responseMessage);
                yield put(listScheduleSuccess(null));
            }
            else {
                console.log(schedule)
                modalFailed(schedule.responseMessage);
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
            Router.push({
                pathname: '/dashboard',
            });
        } else {
            if (schedule.responseCode==="0000") {
                yield put(detailScheduleSuccess(schedule.data));
                // Router.push({
                //     pathname: '/dashboard',
                // });
            } else if(schedule.responseCode==="0003") {
                const getAllScheduleState = (state) => state.schedule.sAll
                const getSchedule = yield select(getAllScheduleState)
                let scheduleData = getSchedule.filter((el)=>
                    {
                        return el.tourId === `TTRDEV${payload}`&&
                        (el)
                    }
                    )
                yield put(detailScheduleSuccess(scheduleData[0]));
                // Router.push({
                //     pathname: '/dashboard',
                // });
            }else {
                
            modalFailed('error','');
            Router.push({
                pathname: '/dashboard',
            });
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
                yield call(listScheduleSaga)
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
function* registTourScheduleSaga({payload}) {
    console.log('regist Tour Schedule')
    try {
        const schedule = yield call(scheduleRepository.registTourSchedule,payload);
        if (!schedule) {
            modalFailed('error','');
        } else {
            console.log(schedule)
            if (schedule.responseMessage==="SUCCESS") {
                // yield put(registTourGroupScheduleSuccess(schedule.data));
                modalSuccessRegis()
                yield call(listScheduleSaga)
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
    yield all([takeEvery(actionTypes.REGISTER_TOURSCHEDULE_REQUEST, registTourScheduleSaga)]);
}