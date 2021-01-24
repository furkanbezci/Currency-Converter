import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './Header'
import Converter from './converter'

const App = () => {
  return (
    <View style={styles.container}>
      <Header headerText='Currency Converter' bcgColor='pink' />
      <Converter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});

export default App;
