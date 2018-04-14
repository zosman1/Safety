import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native';

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
        // console.error(params.data.paragraphs);

        return (
            <SafeAreaView>
                <ScrollView style={styles.container}>
                    <Border />
                    <Paragraph data={params.data.paragraphs[0]} />
                    <Border />
                    <Paragraph data={params.data.paragraphs[1]} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
function Paragraph(props) {
    return (
        <View style={styles.paragraph}>
            <Text style={styles.header}>{props.data.h1}</Text>
            <Text style={styles.paragraphText}>{props.data.p}</Text>
        </View>
    );
}
function Border(props) {
    return <View style={{ height: 1, backgroundColor: 'lightgray' }} />;
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    paragraph: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        fontSize: 30,
    },
    paragraphText: {
        fontSize: 18,
    },
});
