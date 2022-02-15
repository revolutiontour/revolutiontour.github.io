
import { notification,message } from 'antd';
import { userService } from '../../testing/user.data';

import Router from 'next/router';
import memberRepository from '../../repositories/memberRepository';

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

export const actionTypes = {
    LOGIN_REQUEST:"LOGIN_REQUEST",
    LOGOUT_REQUEST:"LOGOUT_REQUEST",
      LOGIN_SUCCESS:"LOGIN_SUCCESS",
      LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
      REGISTER_SUCCESS:"REGISTER_SUCCESS",
      REGISTER_TP_REQUEST:"REGISTER_TP_REQUEST",
      REGISTER_TP_SUCCESS:"REGISTER_TP_SUCCESS",
      REGISTER_TL_REQUEST:"REGISTER_TL_REQUEST",
      REGISTER_TL_SUCCESS:"REGISTER_TL_SUCCESS",
      LIST_TL_REQUEST:"LIST_TL_REQUEST",
      LIST_TP_REQUEST:"LIST_TP_REQUEST",
      LIST_TL_SUCCESS:"LIST_TL_SUCCESS",
      LIST_TP_SUCCESS:"LIST_TP_SUCCESS",
    }
    
    export const loginMember = (payload)=>(dispatch) => {
        try {
            // const user = yield call(memberRepository.loginMember, payload);
            const user = userService.login(payload)
            if (!user) {
                modalFailed('error');
            } else {
                console.log(user)
                if (user.responseMessage==="SUCCESS") {
                    dispatch(loginMemberSuccess(user.data));
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
    };
    export const listLeader = () => async (dispatch) => {
        try{
            const getTL = await memberRepository.getTourLeader()
            if(getTL.responseMessage=="SUCCESS"){
                dispatch(listLeaderSuccess(getTL.data))
            }
        }catch(error){
            console.log(error);
        }
    };
    export const listLeaderSuccess = (data) => {
      return {
        type: actionTypes.LIST_TL_SUCCESS,
        payload: data,
      };
    };
    export const listParticipant = () => async(dispatch) => {
        try{
            const getTP = await memberRepository.getTourParticipant()
            if(getTP.responseMessage=="SUCCESS"){
                dispatch(listParticipantSuccess(getTP.data));
            }
        }catch(error){
            console.log(error);
        }
    };
    export const listParticipantSuccess = (data) => {
      return {
        type: actionTypes.LIST_TP_SUCCESS,
        payload: data,
      };
    };
  
    export const loginMemberSuccess = (data) => {
      return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: data,
      };
    };
    export const logoutMemberSuccess = () => {
      return {
        type: actionTypes.LOGOUT_SUCCESS,
        payload: null,
      };
    };
    export const registMemberSuccess = (data) => {
      return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: data,
      };
    };
    export const registTourParticipant = (payload) => async (dispatch) => {
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
            const regis = await memberRepository.registTourParticipant(payload)
            if(regis.responseMessage=="SUCCESS"){
            dispatch(registMemberSuccess(regis.data));
            listParticipant()(dispatch)
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
    };
    export const registTourParticipantSuccess = (data) => {
      return {
        type: actionTypes.REGISTER_TP_SUCCESS,
        payload: data,
      };
    };
    export const registTourLeader = (payload) => async (dispatch) => {
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
            const regis = await memberRepository.registTourLeader(payload)
            if(regis.responseMessage=="SUCCESS"){
            dispatch(registMemberSuccess(regis.data));
            listLeader()(dispatch)
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
    };
    export const registTourLeaderSuccess = (data) => {
      return {
        type: actionTypes.REGISTER_TL_SUCCESS,
        payload: data,
      };
    };
    