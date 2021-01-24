import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header({ headerText, bcgColor }) {
    return (
        <View backgroundColor={bcgColor} style={styles.container}>
            <Text style={styles.headerText} >{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginBottom: 15,

    },
    headerText: {
        fontSize: 24,

    }

});
