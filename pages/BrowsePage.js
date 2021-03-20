import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";

const BrowsePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>ListView hier</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        // TODO: background image?
    },

    box: {
        margin: 10,
    }
});



export default BrowsePage;
