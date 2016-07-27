import React,{Component, PropTypes} from 'react';

import {
    Text,
    View
} from 'react-native';

export default class Splash extends Component {

    render() {
        return (
            <View>
                <Text onPress={() => {
                    alert("clicked");
                }}>This is SplashPage</Text>
            </View>
        );
    }
}