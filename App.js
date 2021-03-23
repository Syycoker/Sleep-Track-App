import React from 'react';
import { View, Text , StyleSheet, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import Qpage1 from './components/Qpage1';
import Qpage2 from './components/Qpage2';

const Stack = createStackNavigator();

function LoginScreen({navigation}){
  return (
    <View style = {styles.container}>
      <Header />
      <LoginForm />
      <TouchableOpacity style = {styles.buttonContainer}>
        <Button title = "LOGIN"  onPress = {() => navigation.navigate('QuestionOne')}/>
      </TouchableOpacity>
    </View>
  )
}

function QuestionPageOne({navigation}){
  return (
    <View style = {styles.container}>
      <Qpage1 />
      <TouchableOpacity style = {styles.buttonContainer}>
        <Button title = "Next"  onPress = {() => navigation.navigate('Question Two')}/>
      </TouchableOpacity>
    </View>
  )
}

function QuestionPage1(){
  return (
    <View style = {styles.Q1Container}>
      <Qpage1 />
    </View>
  )
}

function QuestionPage2(){
  return (
    <View style = {styles.Q1Container}>
      <Qpage2 />
    </View>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator intitialRouteName = "Login">
        <Stack.Screen name ="Login" component = {LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name ="QuestionOne" component = {QuestionPageOne} options={{headerShown:false}}/>
        <Stack.Screen name ="Question Two" component = {QuestionPage2}/>
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

  Q1Container: {
    flex: 1,
    backgroundColor: '#152238',
    alignItems: 'center',
  },

  buttonContainer: {
    paddingVertical: 10,
  },
});

export default App;
