/**
 * Created by new on 2016/8/2.
 */
import React, {Component, PropTypes} from 'react';
import {
    Text,
    View
}from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../actions/ActionCreators';
import styles from '../styles/styles';
import {Actions} from 'react-native-router-flux';

class Logout extends Component {
    render(){
        return (
            <View style={styles.gravityCenter}>
                <Text>This is Logout page</Text>
                <Text onPress={this.props.logout}>Logout</Text>
                <Text onPress={Actions.pop}>Back</Text>
            </View>
        );
    }
}

Logout.propTypes = {
    logout : PropTypes.func.isRequired
};
export default connect(null, (dispatch)=>{
    return {
        logout : ()=>{
            dispatch(logout());
        }
    }
})(Logout);