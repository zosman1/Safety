import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { detailsData } from '../../data/details';

let images = [
    require('../../resources/learn.png'),
    require('../../resources/prevent.png'),
    require('../../resources/act.png'),
    require('../../resources/donate.png'),
];

export class HeaderButton extends Component {
    state = {};

    render() {
        return (
            <TouchableOpacity
                style={styles.headerButton}
                onPress={() => this.props.navigate('Details', { data: detailsData[this.props.data.name] })}>
                <Image style={{ width: 170, height: 170 }} source={images[this.props.data.key]} />
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    headerButton: {
        padding: 10,
    },
});
