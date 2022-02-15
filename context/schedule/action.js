import { notification,message } from 'antd';
import scheduleRepository from '../../repositories/scheduleRepository';

import Router from 'next/router';
import { GetRootContext } from '../context';

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

export const actionTypes = {
    REGISTER_TOURSCHEDULE_REQUEST:"REGISTER_TOURSCHEDULE_REQUEST",
    REGISTER_TOURSCHEDULE_SUCCESS:"REGISTER_TOURSCHEDULE_SUCCESS",
    REGISTER_TOURGROUPSCHEDULE_REQUEST:"REGISTER_TOURGROUPSCHEDULE_REQUEST",
    REGISTER_TOURGROUPSCHEDULE_SUCCESS:"REGISTER_TOURGROUPSCHEDULE_SUCCESS",
    LIST_SCHEDULE_REQUEST:"LIST_SCHEDULE_REQUEST",
    LIST_SCHEDULE_SUCCESS:"LIST_SCHEDULE_SUCCESS",
    DETAIL_SCHEDULE_REQUEST:"DETAIL_SCHEDULE_REQUEST",
    DETAIL_SCHEDULE_SUCCESS:"DETAIL_SCHEDULE_SUCCESS",
  }
  
  export const listSchedule = () => async (dispatch) => {
    try {
        const schedule = await scheduleRepository.getSchedule();
        if (!schedule) {
            modalFailed('error','');
        } else {
            if (schedule.responseMessage==="SUCCESS") {
                dispatch(listScheduleSuccess(schedule.data));
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
  };
  export const listScheduleSuccess = (data) => {
    return {
      type: actionTypes.LIST_SCHEDULE_SUCCESS,
      payload: data,
    };
  };
  export const detailSchedule = (payload) => async ({state,dispatch}) => {
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
        setTimeout(hide, 1500);
        const schedule = await scheduleRepository.getDetailSchedule(payload);
        if (!schedule) {
            modalFailed('error','');
            Router.push({
                pathname: '/dashboard',
            });
        } else {
            if (schedule.responseCode==="0000") {
                dispatch(detailScheduleSuccess(schedule.data));
                // Router.push({
                //     pathname: '/dashboard',
                // });
            } else if(schedule.responseCode==="0003") {
                const getSchedule = state.schedule.sAll
                let scheduleData = getSchedule.filter((el)=>
                    {
                        return el.tourId === `TTRDEV${payload}`&&
                        (el)
                    }
                    )
                dispatch(detailScheduleSuccess(scheduleData[0]));
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
  };
  export const detailScheduleSuccess = (data) => {
    return {
      type: actionTypes.DETAIL_SCHEDULE_SUCCESS,
      payload: data,
    };
  };
  export const registTourSchedule = (payload) => async (dispatch) => {
    console.log('regist Tour Schedule')
    try {
        const schedule = await scheduleRepository.registTourSchedule(payload);
        if (!schedule) {
            modalFailed('error','');
        } else {
            console.log(schedule)
            if (schedule.responseMessage==="SUCCESS") {
                // yield put(registTourGroupScheduleSuccess(schedule.data));
                modalSuccessRegis()
                listSchedule()(dispatch)
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
  };
  export const registTourScheduleSuccess = (data) => {
    return {
      type: actionTypes.REGISTER_TOURSCHEDULE_SUCCESS,
      payload: data,
    };
  };
  export const registTourGroupSchedule = (payload) => {
    console.log('regist Tour Group Schedule')
    try {
        const schedule = scheduleRepository.registTourGroupSchedule(payload);
        if (!schedule) {
            modalFailed('error','');
        } else {
            console.log(schedule)
            if (schedule.responseMessage==="SUCCESS") {
                // yield put(registTourGroupScheduleSuccess(schedule.data));
                modalSuccessRegis()
                listSchedule()(dispatch)
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
  };
  export const registTourGroupScheduleSuccess = (data) => {
    return {
      type: actionTypes.REGISTER_TOURGROUPSCHEDULE_SUCCESS,
      payload: data,
    };
  };
  