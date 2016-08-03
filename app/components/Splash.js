/**
 * Created by new on 2016/8/2.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/styles';
import {connect} from 'react-redux';
import {appStart} from '../actions/ActionCreators';

class Splash extends Component {

    componentDidMount(){
        this.props.start();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.go){
            setTimeout(()=>{
                Actions.loginSwitch();
            }, 200);
        }
    }

    render(){
        return (
            <View style={styles.gravityCenter}>

                <Text>This is splash screen</Text>

            </View>
        )
    }
}

export default connect((state)=>{
    return {
        go : state.splash.go
    }
}, (dispatch)=>{
    return {
        start : ()=>{dispatch(appStart())}
    }
})(Splash);

