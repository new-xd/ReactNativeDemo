/**
 * Created by new on 2016/8/2.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from '../styles/styles';

export default class TabIcon extends Component {
    render() {
        return (
            <View>
                <Image style={styles.imageTab}
                       source={this.props.selected ? this.props.selectedImage : this.props.image}/>
                <Text style={this.props.selected ? styles.titleTabSelect : styles.titleTab}>{this.props.title}</Text>
            </View>
        );
    }
}