import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { detailsData } from '../../data/details';

export class HeaderButton extends Component {
    state = {};
    render() {
        return (
            <TouchableOpacity
                style={styles.headerButton}
                onPress={() => this.props.navigate('Details', { data: detailsData[this.props.data.name] })}>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                        uri: 'https://picsum.photos/200/300/?gravity=east',
                    }}
                />
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    headerButton: {
        padding: 10,
    },
});
