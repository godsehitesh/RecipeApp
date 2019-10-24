/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';


class StartScreen extends React.Component{

  render(){
    return (
      <View style = {styles.container}>
        <TouchableOpacity style = {styles.button} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style = {{color: 'white'}}>Click here</Text>
        </TouchableOpacity>
      </View>
    );
  }

}



const MainNavigator = createStackNavigator({
  Start: {screen: StartScreen},
  Home: {screen: MainScreen},
  
},
{
  initialRouteName: 'Start',
});

const App = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  button:{
    width: '50%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
});

export default App;

