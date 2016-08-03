/**
 * Created by new on 2016/8/1.
 */
import React, {Component} from 'react';
import {Router, Actions} from 'react-native-router-flux';
import scenes from './router';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider, connect} from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {
    BackAndroid
} from 'react-native';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const createLogger = require(`redux-logger`);
    const logger = createLogger();
    middlewares.push(logger);
    console.log("add redux-logger");
}
const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
const RouterWithRedux = connect()(Router);

export default class App extends Component {
    componentWillMount(){
        BackAndroid.addEventListener('hardwareBackPress', Actions.pop());
    }

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux scenes={scenes}/>
            </Provider>
        );
    }
}