import React from 'react';
import {Button, StyleSheet, View} from "react-native";

const Header = ({ onPress, label, labelStyle }) => {
    return (
        <View style={styles.alignHorizontal}>
            <View style={styles.container}>
                <Button style={styles.button} title={'Filters'} />
                <Button style={styles.button} title={'Login'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    alignHorizontal: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
    },

    button: {
        color: '#000',
        background: '#Fff'
    }
});

export default Header;
