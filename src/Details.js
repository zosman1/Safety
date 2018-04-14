import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

export class Details extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView>
                <Text> Hi! </Text>
            </SafeAreaView>
        );
    }
}
