/**
 * Created by new on 2016/8/1.
 */
import React from 'react';
import {Actions, Scene, Modal, Switch, ActionConst} from 'react-native-router-flux';
import Splash from './components/Splash';
import Error from './components/Error';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Mine from './components/Mine';
import Other from './components/Other';
import Nest from './components/Nest';
import TabIcon from './components/TabIcon';
import {connect} from 'react-redux';
import styles from './styles/styles';


const HOME_NORMAL = require('./images/tabIcon/home.png');
const HOME_FOCUS = require('./images/tabIcon/home_in.png');
const CATEGORY_NORMAL = require('./images/tabIcon/class.png');
const CATEGORY_FOCUS = require('./images/tabIcon/class_in.png');
const PERSONAL_NORMAL = require('./images/tabIcon/user.png');
const PERSONAL_FOCUS = require('./images/tabIcon/user_in.png');

export default Actions.create(
    <Scene key='modal' component={Modal}>
        <Scene key="root">
            <Scene key="splash" component={Splash} hideNavBar/>
            <Scene key="loginSwitch" component={connect(state=>({login: state.user.user != ''}))(Switch)}
                   selector={(props)=> {
                       return props.login ? 'main' : 'login'
                   }} tabs unmountScenes type={ActionConst.REPLACE}>
                <Scene key="login" type={ActionConst.RESET}>
                    <Scene key="auth" component={Login} title="Login Page" passProps login={()=> {
                        Actions.refresh()
                    }}/>
                </Scene>
                <Scene key="main" type={ActionConst.RESET}>
                    <Scene key="tabs" tabs tabBarStyle={styles.tab}>
                        <Scene key="home" component={Home} title="首页" icon={TabIcon}
                        selectedImage={HOME_FOCUS} image={HOME_NORMAL}/>
                        <Scene key="other" component={Other} title="分类" icon={TabIcon}
                               selectedImage={CATEGORY_FOCUS} image={CATEGORY_NORMAL}/>
                        <Scene key="mine" component={Mine} title="我的" icon={TabIcon}
                               selectedImage={PERSONAL_FOCUS} image={PERSONAL_NORMAL}/>
                    </Scene>
                    <Scene key="logout" component={Logout} title="Logout Page" passProps logout={()=> {
                        Actions.refresh()
                    }}/>
                    <Scene key='nest' component={Nest}/>
                </Scene>
            </Scene>
        </Scene>
        <Scene key="error" component={Error} title="Error Page"/>
    </Scene>
);