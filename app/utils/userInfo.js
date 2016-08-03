/**
 * Created by new on 2016/8/2.
 */
import {
    AsyncStorage
}from 'react-native';

const KEY_USER = "KEY_USER";

const save = (user)=>{
    return AsyncStorage.setItem(KEY_USER, user);
};

const get = ()=>{
    return AsyncStorage.getItem(KEY_USER);
};

export {save, get};