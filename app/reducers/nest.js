/**
 * Created by new on 2016/8/2.
 */
import * as actions from '../actions/Actions';

const initState = {
    data : {}
};

export default function (state=initState, action) {
    switch (action.type){
        case actions.ACTION_NEST_FETCH_RESULT:
            let data = {
                ...state.data
            };
            data[action.arg] = action.data;
            return {
                ...state,
                data
            };
        default :
            return state;
    }
}