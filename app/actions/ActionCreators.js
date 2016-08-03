/**
 * Created by new on 2016/8/2.
 */
import * as actions from './Actions';
import {get, save} from '../utils/userInfo';

export const tryLogin = function () {
    return (dispatch)=>{
        save('new_xd');
        dispatch(login("new_xd"));
    };
};

export const login = function (user) {
    return {
        type : actions.ACTION_LOGIN,
        user
    }
};

export const logout = function () {
    return {
        type : actions.ACTION_LOGOUT
    }
};

export const homeUpdate = function (data) {
    return {
        type : actions.ACTION_HOME,
        data
    }
};

const startFinish = () =>{
    return {
        type : actions.ACTION_APP_START_FINISH
    }
};

export const appStart = function(){
    return (dispatch)=>{
        get().then((user)=>{
            if(user != null)
                dispatch(login(user));
            dispatch(startFinish());
        }).catch(()=>{
            dispatch(startFinish());
        })
    }
};

export const fetchNestData = function (arg) {
    return {
        type : actions.ACTION_NEST_FETCH_RESULT,
        data : "data for "+arg,
        arg
    }
};