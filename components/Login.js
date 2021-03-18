import React from 'react';
import { View, Text , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

const Login = () =>{
    return(
        <View style = {styles.container}>
            <TextInput style = {styles.input}>

            </TextInput>

            <TextInput style = {styles.input}>

            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    input: {
        height: 40,
    }
});


export default Login;