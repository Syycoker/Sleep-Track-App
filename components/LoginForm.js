import React from 'react';
import { View, TextInput , StyleSheet, KeyboardAvoidingView, StatusBar, Button} from 'react-native';

const LoginForm = () =>{
    return(
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <View style = {styles.container}>
                <StatusBar barStyle = "light-content" />

                <TextInput style = {styles.input} 
                placeholder = "Username" 
                placeholderTextColor = 'rgba(255,255,255,0.7)' 
                returnKeyType="next" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                keyboardType="email-address" 
                autoCorrect={false} 
                autoCapitalize="none"/>

                <TextInput style = {styles.input}  
                placeholder = "Password" 
                placeholderTextColor = 'rgba(255,255,255,0.7)' 
                secureTextEntry
                returnKeyType="go"
                />
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
});


export default LoginForm;