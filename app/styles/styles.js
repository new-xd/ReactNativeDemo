/**
 * Created by new on 2016/8/1.
 */
import {
    StyleSheet
} from 'react-native';
import p from '../utils/Transform';

export default StyleSheet.create({
    gravityCenter : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    tab: {
        flex: 1,
        height: p(146),
        backgroundColor: '#ffffff',
        marginBottom: p(10)
    },
    titleTab: {
        color: '#858585',
        fontSize: p(36),
        marginTop: p(10)
    },
    titleTabSelect: {
        color: '#ff3333',
        fontSize: p(36),
        marginTop: p(10)
    },
    imageTab: {
        marginTop: p(30),
        height: p(60),
        width: p(60)
    }
});