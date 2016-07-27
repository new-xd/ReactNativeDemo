import React,{Component, PropTypes} from 'react';
import styles from './styles/styles.js'

import {
    Text,
    View
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => {
                    alert("clicked");
                }}>This is loginPage</Text>
            </View>
        );
    }
}