import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification,message } from 'antd';

import { actionTypes, listLeaderSuccess, listParticipantSuccess, loginMemberSuccess, logoutMemberSuccess, registMemberSuccess, registTourLeaderSuccess, registTourParticipantSuccess } from '../actions/member';
import memberRepository from '../../repositories/memberRepository';


import Router from 'next/router';
import { userService } from '../../testing/user.data';

const modalSuccess = (type,name) => {
    notification[type]({
        message: 'Wellcome back '+name,
        description: 'You are login successful!',
    });
};


const modalSuccessRegis = (type) => {
    notification[type]({
        message: 'Registrasi Berhasil',
        description: 'Silakan login untuk melanjutkan!',
    });
};

const modalWarning = (type) => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};

const modalFailed = (type) => {
    notification[type]({
        message: 'Login gagal!',
        description: 'Wrong Username or Password!',
    });
};


const loginFailed = (type,msg) => {
    notification[type]({
        message: 'Login gagal!',
        description: msg,
    });
};


const modalVerification = (type) => {
    notification[type]({
        message: 'Verification sukses.',
        description: 'Verification berhasil dilakukan',
        duration: 5,
    });
};

const modalForgot = (type) => {
    notification[type]({
        message: 'Forgot password sukses.',
        description: 'Mohon untuk cek email anda',
        duration: 5,
    });
};

const modalChangePass = (type) => {
    notification[type]({
        message: 'Mengganti password sukses.',
        description: 'Mohon untuk login kembali',
        duration: 5,
    });
};

const modalEmailAlready = (type) => {
    notification[type]({
        message: 'Email anda sudah terdaftar',
        description: 'Mohon untuk menggunakan email lain',
        duration: 5,
    });
};

const modalRegistFailed = (type) => {
    notification[type]({
        message: 'Register gagal!',
        description: 'Mohon dicek kembali fieldnya',
    });
};

function* loginSaga({ payload }) {
    try {
        // const user = yield call(memberRepository.loginMember, payload);
        const user = userService.login(payload)
        if (!user) {
            modalFailed('error');
        } else {
            console.log(user)
            if (user.responseMessage==="SUCCESS") {
                yield put(loginMemberSuccess(user.data));
                modalSuccess('success',user.data.userName);
                Router.push({
                    pathname: '/dashboard',
                });
            } else {
                loginFailed('error',user.responseMessage);
            }
        }
    } catch (err) {
        console.log(err);
    }
}


function* logOutSaga() {
    try {
        yield put(logoutMemberSuccess());
        Router.push({
            pathname: '/',
        });
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

function* registTLSaga({payload}){
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
        const regis = yield call(memberRepository.registTourLeader, payload)
        if(regis.responseMessage=="SUCCESS"){
        yield put(registMemberSuccess(regis.data));
        modalSuccessRegis('success')
        
        Router.push({
            pathname: '/dashboard',
        });
        }else{
            modalRegistFailed('error')
        }

    } catch (error) {
        console.log(error);
    }
}

function* getTPSaga(){
    try{
        const getTP = yield call(memberRepository.getTourParticipant)
        if(getTP.responseMessage=="SUCCESS"){
            yield put(listParticipantSuccess(getTP.data));
        }
    }catch(error){
        console.log(error);
    }
}

function* getTLSaga(){
    try{
        const getTL = yield call(memberRepository.getTourLeader)
        if(getTL.responseMessage=="SUCCESS"){
            yield put(listLeaderSuccess(getTL.data))
        }
    }catch(error){
        console.log(error);
    }
}
function* registTPSaga({payload}){
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
        const regis = yield call(memberRepository.registTourParticipant, payload)
        if(regis.responseMessage=="SUCCESS"){
        yield put(registMemberSuccess(regis.data));
        modalSuccessRegis('success')
        
        Router.push({
            pathname: '/dashboard',
        });
        }else{
            modalRegistFailed('error')
        }

    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    // yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([takeEvery(actionTypes.LIST_TL_REQUEST, getTLSaga)]);
    yield all([takeEvery(actionTypes.LIST_TP_REQUEST, getTPSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_TL_REQUEST, registTLSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_TP_REQUEST, registTPSaga)]);
}
