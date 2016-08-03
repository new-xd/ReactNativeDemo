/**
 * Created by new on 2016/8/2.
 */
import {combineReducers} from 'redux';
import home from './home';
import mine from './mine';
import other from './other';
import user from './user';
import splash from './splash';
import router from './router';
import nest from './nest';

const reduces = combineReducers({
    home,
    mine,
    other,
    user,
    splash,
    router,
    nest
});
export default reduces;