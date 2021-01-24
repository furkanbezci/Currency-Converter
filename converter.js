import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidht } from './Dimensions'
import axios from 'axios'
import Picker from './Picker'

const Converter = () => {

    const [selectedItem, setSelectedItem] = useState('')


    const [rates, setRates] = useState([])
    const [baseCur, setBaseCur] = useState('euro')
    const [enteredVal, setEnteredVal] = useState('')
    const [tl, setTl] = useState('');
    const [usd, setUsd] = useState('');
    const [cad, setCad] = useState('');
    const [jpy, setJpy] = useState('');
    const [aud, setAud] = useState('');

    const [usd2, setUsd2] = useState('');






    const getRates = () => {
        axios.get('http://data.fixer.io/api/latest?access_key=868820d36d70f42454ba5d60aedd508f&format=1&symbols=EUR,TRY,CAD,AUD,JPY,USD')
            .then(response => {
                console.log(response);
                setRates(response.data.rates)
            })

    }

    useEffect(() => {
        console.log(useEffect);
        getRates();
    }, [])

    if (baseCur === 'euro') {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.baseCurText} >Base Currency {selectedItem === '' ? '🇪🇺 EURO' : null}</Text>
                        <Text style={{ width: '100%', paddingLeft: 5, marginBottom: 20, fontWeight: 'bold', fontSize: 18 }} >{selectedItem}</Text>
                    </View>
                    <Picker
                        placeholder='Choose Currency'
                        baseCur={baseCur}
                        setBaseCur={setBaseCur}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />

                    <TextInput style={styles.textInput}
                        placeholder='enter value...'

                        onChangeText={text => {
                            const i = parseFloat(text) || 0
                            setEnteredVal(text)
                            setTl((i * rates['TRY']).toFixed(3))
                            setCad((i * rates['CAD']).toFixed(3))
                            setUsd((i * rates['USD']).toFixed(3))
                            setJpy((i * rates['JPY']).toFixed(3))
                            setAud((i * rates['AUD']).toFixed(3))
                        }}
                        value={enteredVal}
                        keyboardType='numeric'

                    />
                </View>

                <Text style={styles.currencyTexts}> 🇹🇷 TRY: {tl} </Text>
                <Text style={styles.currencyTexts}> 🇺🇸 USD: {usd} </Text>
                <Text style={styles.currencyTexts}> 🇨🇦 CAD: {cad} </Text>
                <Text style={styles.currencyTexts}> 🇯🇵 JPY: {jpy} </Text>
                <Text style={styles.currencyTexts}> 🇦🇺 AUD: {aud} </Text>

                <Text style={styles.noteText}>Note: The datas above are hourly rates</Text>


            </View >
        )
    } if (baseCur === 'TRY') {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.baseCurText} >Base Currency</Text>
                        <Text style={{ width: '100%', paddingLeft: 5, marginBottom: 20, fontWeight: 'bold', fontSize: 18 }} >{selectedItem}</Text>
                    </View>
                    <Picker
                        placeholder='Choose Currency'
                        setBaseCur={setBaseCur}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}

                    />
                    <TouchableOpacity
                        onPress={() => setBaseCur('euro')}
                    >

                    </TouchableOpacity>
                    <TextInput style={styles.textInput}
                        placeholder='enter value...'

                        onChangeText={text => {
                            const i = parseFloat(text) || 0
                            setEnteredVal(text)
                            setCad((i * rates['CAD'] / rates['TRY']).toFixed(3))
                            setUsd((i * rates['USD'] / rates['TRY']).toFixed(3))
                            setJpy((i * rates['JPY'] / rates['TRY']).toFixed(3))
                            setAud((i * rates['AUD'] / rates['TRY']).toFixed(3))
                        }}
                        value={enteredVal}
                        keyboardType='numeric'

                    />
                </View>
                <Text style={styles.currencyTexts}> 🇺🇸 USD: {usd} </Text>
                <Text style={styles.currencyTexts}> 🇨🇦 CAD: {cad} </Text>
                <Text style={styles.currencyTexts}> 🇯🇵 JPY: {jpy} </Text>
                <Text style={styles.currencyTexts}> 🇦🇺 AUD: {aud} </Text>
                debugger;
                <Text style={styles.noteText}>Note: The datas above are hourly rates</Text>

            </View >
        )
    } if (baseCur === 'USD') {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.baseCurText} >Base Currency</Text>
                        <Text style={{ width: '100%', paddingLeft: 5, marginBottom: 20, fontWeight: 'bold', fontSize: 18 }} >{selectedItem}</Text>
                    </View>

                    <Picker
                        placeholder='Choose Currency'
                        setBaseCur={setBaseCur}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}

                    />
                    <TouchableOpacity
                        onPress={() => setBaseCur('euro')}
                    >

                    </TouchableOpacity>
                    <TextInput style={styles.textInput}
                        placeholder='enter value...'

                        onChangeText={text => {
                            const i = parseFloat(text) || 0
                            setEnteredVal(text)
                            setTl((i * rates['TRY'] / rates['USD']).toFixed(3))
                            setCad((i * rates['CAD'] / rates['USD']).toFixed(3))
                            setUsd((i * rates['USD'] / rates['USD']).toFixed(3))
                            setJpy((i * rates['JPY'] / rates['USD']).toFixed(3))
                            setAud((i * rates['AUD'] / rates['USD']).toFixed(3))
                        }}
                        value={enteredVal}
                        keyboardType='numeric'

                    />
                </View>
                <Text style={styles.currencyTexts}> 🇹🇷 TRY: {tl} </Text>
                <Text style={styles.currencyTexts}> 🇨🇦 CAD: {cad} </Text>
                <Text style={styles.currencyTexts}> 🇯🇵 JPY: {jpy} </Text>
                <Text style={styles.currencyTexts}> 🇦🇺 AUD: {aud} </Text>
                <Text style={styles.noteText}>Note: The datas above are hourly rates</Text>

            </View >
        )
    }


}



//     return (
//         <View style={styles.container}>
//             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                 <Text style={{ width: '100%', paddingLeft: 5, marginBottom: 20, fontWeight: 'bold', fontSize: 18 }} >Currency: EURO 🇪🇺</Text>
//                 <TextInput style={styles.textInput}
//                     placeholder='enter EUR value...'

//                     onChangeText={text => {
//                         const i = parseFloat(text) || 0
//                         setEnteredVal(text)
//                         setTl((i * rates['TRY']).toFixed(3))
//                         setCad((i * rates['CAD']).toFixed(3))
//                         setUsd((i * rates['USD']).toFixed(3))
//                         setJpy((i * rates['JPY']).toFixed(3))
//                         setAud((i * rates['AUD']).toFixed(3))
//                     }}
//                     value={enteredVal}
//                     keyboardType='numeric'

//                 />
//             </View>
//             <Text style={styles.currencyTexts}> 🇹🇷 TRY: {tl} </Text>
//             <Text style={styles.currencyTexts}> 🇺🇸 USD: {usd} </Text>
//             <Text style={styles.currencyTexts}> 🇨🇦 CAD: {cad} </Text>
//             <Text style={styles.currencyTexts}> 🇯🇵 JPY: {jpy} </Text>
//             <Text style={styles.currencyTexts}> 🇦🇺 AUD: {aud} </Text>
//             <Text style={styles.noteText}>Note: These datas above are hourly rates</Text>

//         </View >
//     )
// }

export default Converter

const styles = StyleSheet.create({
    container: {
        padding: 10


    },
    textInput: {
        width: windowWidht * 0.96,
        borderWidth: 0.1,
        borderStyle: 'dotted',
        borderRadius: 2,
        height: 45,
        marginBottom: 20
    },
    currencyTexts: {
        fontWeight: 'bold',
        marginVertical: 7

    },
    noteText: {
        color: '#909090',
        marginTop: 10,
        fontStyle: 'italic',
    },
    baseCurText: {
        width: '100%',
        paddingLeft: 5,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 18

    }
})
