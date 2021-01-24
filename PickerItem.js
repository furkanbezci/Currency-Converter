import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const PickerItem = ({ money, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <Text style={styles.Text}>{money}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Text: {
        padding: 20,
        fontSize: 18
    }
})

export default PickerItem
