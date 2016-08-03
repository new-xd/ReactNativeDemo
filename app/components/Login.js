/**
 * Created by new on 2016/8/2.
 */
import React, {Component, PropTypes} from 'react';
import {
    Text,
    View
}from 'react-native';
import styles from '../styles/styles';
import {connect} from 'react-redux';
import {tryLogin} from '../actions/ActionCreators';
import {Actions} from 'react-native-router-flux';

class Login extends Component {
    render(){
        return (
            <View style={styles.gravityCenter}>
                <Text>This is Login page</Text>
                <Text onPress={this.props.login}>Login</Text>
                <Text onPress={Actions.pop}>Back</Text>
            </View>
        );
    }
}

Login.propTypes = {
    login : PropTypes.func.isRequired
};

export default connect(null, (dispatch)=>{
    return {
        login: ()=>{
            dispatch(tryLogin());
        }
    };
})(Login);