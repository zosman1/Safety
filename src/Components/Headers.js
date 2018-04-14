export function H1(props) {
    if (props.h1) {
        return (
            <View>
                <Text style={styles.h1}>{props.h1}</Text>
            </View>
        );
    }
    return;
}
export function H2(props) {
    if (props.h2) {
        return (
            <View>
                <Text style={styles.h2}>{props.h2}</Text>
            </View>
        );
    }
    return;
}
export function H3(props) {
    if (props.h3) {
        return (
            <View>
                <Text style={styles.h3}>{props.h3}</Text>
            </View>
        );
    }
    return;
}
export function H4(props) {
    if (props.h4) {
        return (
            <View>
                <Text style={styles.h4}>{props.h4}</Text>
            </View>
        );
    }
    return;
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 50,
    },
    h2: {
        fontSize: 25,
    },
    h3: {
        fontSize: 18,
    },
    h4: {
        fontSize: 10,
    },
});
