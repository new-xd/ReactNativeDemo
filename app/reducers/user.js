/**
 * Created by new on 2016/8/2.
 */
import * as actions from '../actions/Actions';
const initState = {
    user : ""
};

export default function (state=initState, action) {
    switch (action.type){
        case actions.ACTION_LOGIN :
            return {
                ...state,
                user : action.user
            };
        case actions.ACTION_LOGOUT :
            return {
                ...state,
                user : ''
            };
        default :
            return state;
    }
}