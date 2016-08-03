/**
 * Created by new on 2016/8/2.
 */
import React, {Component, PropTypes} from 'react';
import {
    Text,
    View
}from 'react-native';
import styles from '../styles/styles';
import {Actions} from 'react-native-router-flux';

export default class Mine extends Component {
    render(){
        return (
            <View style={styles.gravityCenter}>
                <Text>This is Mine page</Text>
                <Text onPress={Actions.logout}>go to Logout</Text>
            </View>
        );
    }
}