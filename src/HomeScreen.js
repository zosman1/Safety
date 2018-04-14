import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { HeaderButton } from './Components/HeaderButton';
import { data } from '../data/buttons';

export class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <HeaderButton navigate={navigate} data={data.one} />
                    <HeaderButton navigate={navigate} data={data.two} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <HeaderButton navigate={navigate} data={data.three} />
                    <HeaderButton navigate={navigate} data={data.four} />
                </View>
            </SafeAreaView>
        );
    }
}
// <Button
//   title="Go to Jane's profile - this button will error. i dare you to press it."
//   // onPress={() => navigate("Profile", { name: "Jane" })}
// />
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
});
