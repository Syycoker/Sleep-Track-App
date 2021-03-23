import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const Stack = createStackNavigator();

function LoginScreen({navigation}){
  return (
    <View style = {styles.container}>
      <Header />
      <LoginForm />
      <TouchableOpacity style = {styles.buttonContainer}>
        <Button title = "LOGIN"  onPress = {() => navigation.navigate('Home')}/>
      </TouchableOpacity>
    </View>
  )
}

function HomeScreen(){
  return (
    <View style = {styles.homeContainer}>
      <Home />
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator intitialRouteName = "Login">
        <Stack.Screen name ="Login" component = {LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name ="Home" component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152238',
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeContainer: {
    flex: 1,
    backgroundColor: '#152238',
    alignItems: 'center',
  },

  buttonContainer: {
    paddingVertical: 10,
  },
});

export default App;
