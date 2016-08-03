/**
 * Created by new on 2016/8/2.
 */
import React, {Component} from 'react';
import {
    Text,
    View
}from 'react-native';
import styles from '../styles/styles';
import {connect} from 'react-redux';
import {homeUpdate} from '../actions/ActionCreators';

let count = 1;

const getData = ()=>{
    if(count == 1){
        count = 2;
        return "Home Data One Hello world";
    }else {
        count = 1;
        return "Wow, I can update this";
    }
};

class Home extends Component {
    render(){
        return (
            <View style={styles.gravityCenter}>
                <Text>This is home page</Text>
                <Text>{this.props.data}</Text>
                <Text onPress={()=>{this.props.update(getData())}}>Update</Text>
            </View>
        );
    }
}

export default connect(({home})=>{
    return {
        data : home.data
    }
}, (dispatch)=>{
    return {
        update : (data)=>{
            dispatch(homeUpdate(data));
        }
    }
})(Home);