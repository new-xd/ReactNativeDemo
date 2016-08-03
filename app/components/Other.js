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

export default class Other extends Component {
    render(){
        return (
            <View style={styles.gravityCenter}>
                <Text>This is Other page</Text>
                <Text onPress={()=>Actions.error({message:'sample error message', back:Actions.pop})}>show error</Text>
                <Text onPress={()=>Actions.nest({arg : "1"})}>show nest</Text>
            </View>
        );
    }
}