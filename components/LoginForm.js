import React from 'react';
import { View, TextInput , StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar} from 'react-native';

const LoginForm = () =>{
    return(
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <View style = {styles.container}>
                <StatusBar barStyle = "light-content" />
                <TextInput style = {styles.input} placeholder = "Username" placeholderTextColor = 'rgba(255,255,255,0.7)' returnKeyType="next" onSubmitEditing={() => this.passwordInput.focus()} keyboardType="email-address" autoCorrect={false} autoCapitalize="none"/>

                <TextInput style = {styles.input}  placeholder = "Password" placeholderTextColor = 'rgba(255,255,255,0.7)' secureTextEntry returnKeyType="go" />

                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    input: {
        width: 200,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
    },

    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
    },

    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
    },
});


export default LoginForm;