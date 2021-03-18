import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import Header from './components/Header';
import Login from './components/Login';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <View style = {styles.container}>
      <Header />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152238',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
