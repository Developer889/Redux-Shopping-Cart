import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import HomeScreen from './HomeScreen'
import { Provider } from 'react-redux';
import store from './store';
export default function App() {
  return (
      <Provider store={store}>
        <HomeScreen/>
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   backgroundColor:'#fff'
  // }
});
