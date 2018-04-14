import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export class HeaderButton extends Component {
    state = {};
    render() {
        return (
            <TouchableOpacity style={styles.headerButton}>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                        uri: 'https://picsum.photos/g/200/300',
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
