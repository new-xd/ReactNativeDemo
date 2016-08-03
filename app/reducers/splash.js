/**
 * Created by new on 2016/8/2.
 */
import * as actions from '../actions/Actions';

const initState = {
    go : false
};

export default function (state=initState, action) {
    switch (action.type){
        case actions.ACTION_APP_START_FINISH:
            return {
                ...state,
                go : true
            };
        default :
            return state;
    }
}