/**
 * Created by new on 2016/8/2.
 */
import * as actions from '../actions/Actions';

const initState = {
    data : "Home data"
};

export default function (state=initState, action) {
    switch (action.type){
        case actions.ACTION_HOME:
            return {
                ...state,
                data : action.data
            };
        default :
            return state;
    }
}