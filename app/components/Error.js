/**
 * Created by new on 2016/8/1.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from '../styles/styles';

const propTypes = {
    message : PropTypes.string.isRequired,
    back : PropTypes.func.isRequired
};


export default class Error extends Component {

    render(){
        return (
            <View style={styles.gravityCenter}>

                <Text>{this.props.message}</Text>

                <Text onPress={this.props.back}>Got it</Text>
            </View>
        )
    }
}

Error.propTypes = propTypes;