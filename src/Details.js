import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native';
import { H1, H2, H3, H4 } from './Components/Headers';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = ({ navigation }) => ({
        // header: null,
        title: `${navigation.state.params.data.name}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        // console.warn(params.data.paragraph);
        // console.warn(params.data.h1);
        return (
            <SafeAreaView>
                <ScrollView>
                    <H1 h1={params.data.h1} />
                    <H2 h2={params.data.h2} />
                    <H2 h3={params.data.h3} />

                    <View style={styles.paragraph}>
                        <Text style={styles.paragraphText}>{params.data.paragraph}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    paragraph: { paddingLeft: 20, paddingRight: 20 },
    h1: {
        fontSize: 50,
    },
    h2: {
        fontSize: 25,
    },
    paragraphText: {
        fontSize: 18,
    },
});
