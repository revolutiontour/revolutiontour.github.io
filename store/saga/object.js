import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification,message } from 'antd';

import { actionTypes, listObjectSuccess,registObjectSuccess,detailObjectSuccess } from '../actions/object';

import Router from 'next/router';
import objectRepository from '../../repositories/objectRepository';

const modalSuccess = (type,name) => {
    notification[type]({
        message: 'Wellcome back '+name,
        description: 'You are login successful!',
    });
};


const modalSuccessRegis = (type) => {
    notification[type]({
        message: 'Tambah data berhasil',
        description: 'Silakan kembali ke list objek wisata untuk melihat!',
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
        message: 'Gagal',
        description: 'Gagal mendapatkan detail objek',
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

function* getObjectSaga(){
    try{
        const getObject = yield call(objectRepository.getObjekWisata)
        if(getObject.responseMessage=="SUCCESS"){
            yield put(listObjectSuccess(getObject.data));
        }
    }catch(error){
        console.log(error);
    }
}

function* registObjectSaga({payload}){
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
        const regis = yield call(objectRepository.registObjekWisata, payload)
        if(regis.responseMessage=="SUCCESS"){
        yield put(registObjectSuccess(regis.data));
        yield call(getObjectSaga)
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

function* detailObjectSaga({payload}) {
    console.log(payload)
    try {
        const detail = yield call(objectRepository.getDetailObjekWisata,payload);
        if (!detail) {
            modalFailed('error','');
        } else {
            if (detail.responseMessage==="SUCCESS") {
                yield put(detailObjectSuccess(detail.data));
            } else {
                modalFailed('error',detail.responseMessage);
                Router.push({
                    pathname: '/dashboard/objek-wisata',
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LIST_OBJECT_REQUEST, getObjectSaga)]);
    yield all([takeEvery(actionTypes.DETAIL_OBJECT_REQUEST, detailObjectSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_OBJECT_REQUEST, registObjectSaga)]);
}