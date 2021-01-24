import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, TouchableOpacity } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import PickerItem from './PickerItem'


const Picker = ({ setBaseCur, selectedItem, setSelectedItem, placeholder }) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <Text>{selectedItem ? selectedItem : placeholder} </Text>
                    <EvilIcons name="chevron-down" size={20} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='slide'>
                <TouchableOpacity onPress={() => {
                    setBaseCur('euro')
                    setModalVisible(false)
                    setSelectedItem('🇪🇺 EURO')

                }
                } >
                    <Text style={[styles.Text, { marginTop: 10 }]}>🇪🇺 EURO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setBaseCur('USD')
                    setModalVisible(false)
                    setSelectedItem('🇺🇸 USD')

                }} >
                    <Text style={styles.Text}>🇺🇸 USD</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setBaseCur('TRY')
                    setModalVisible(false)
                    setSelectedItem('🇹🇷 TRY')

                }} >
                    <Text style={styles.Text}>🇹🇷 TRY</Text>
                </TouchableOpacity>
                <Button onPress={() => setModalVisible(false)} title='close' />


                {/* <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => (
                        <PickerItem
                            money={item.money}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                                console.log(selectedItem)
                                // setBaseCur(selectedItem);
                            }
                            }
                        />)

                    } /> */}
            </Modal>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        padding: 10
    }
})
export default Picker
