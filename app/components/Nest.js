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
import {connect} from 'react-redux';
import {fetchNestData} from '../actions/ActionCreators';

class Nest extends Component {

    componentDidUpdate(){
        console.log(this.props.arg+' update');
    }

    componentWillUnmount(){
        console.log(this.props.arg+' unmount');
    }

    render(){
        return (
            <View style={styles.gravityCenter}>
                <Text>This is Nest page with {this.props.data}</Text>
                <Text onPress={()=>{this.props.fetch(this.props.arg)}}>Fetch this page's Data</Text>
                <Text onPress={()=>Actions.nest({arg : this.props.arg+"1"})}>show nest</Text>
            </View>
        );
    }
}

Nest.propsType = {
    arg : PropTypes.string.isRequired,
    data : PropTypes.string.isRequired,
    fetch : PropTypes.func.isRequired
};

export default connect(({nest}, ownProps)=>{
    let data = nest.data[ownProps.arg] || "no data";
    return {
        data
    }
}, (dispatch)=>{
    return {
        fetch : (arg)=>{dispatch(fetchNestData(arg))}
    }
})(Nest);

