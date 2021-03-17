import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style = {styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#152238',
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
