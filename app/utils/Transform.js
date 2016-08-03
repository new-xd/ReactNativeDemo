'use strict';
import React from 'react';
import {
    PixelRatio,
    Dimensions
} from 'react-native';

export default function p(n) {
    const deviceWidth = Dimensions.get('window').width;
    return Math.round((n / 3) * (PixelRatio.getPixelSizeForLayoutSize(deviceWidth) / PixelRatio.get()) / 360);
}