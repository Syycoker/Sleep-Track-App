import React from 'react';
import { View, Text , StyleSheet, TextInput} from 'react-native';

const Qpage2 = () =>{
    return(
        <View>
            <View className = "Q4">
                <Text style = {[styles.textStyle, {paddingTop: 40}]}>What's your height?</Text>
                <TextInput style = {styles.input}  
                    placeholder = "Type Here" 
                    placeholderTextColor = 'rgba(255,255,255,0.7)' 
                    returnKeyType="go"
                    />
            </View>
            <View className = "Q5">
                <Text style = {[styles.textStyle, {paddingTop: 20}]}>What's your weight?</Text>
                <TextInput style = {styles.input}  
                    placeholder = "Type Here" 
                    placeholderTextColor = 'rgba(255,255,255,0.7)' 
                    returnKeyType="go"
                    />
            </View> 
            <View className = "Q6">
                <Text style = {[styles.textStyle, {paddingTop: 20}]}>What's your gender?</Text>
                <TextInput style = {styles.input}  
                    placeholder = "Type Here" 
                    placeholderTextColor = 'rgba(255,255,255,0.7)' 
                    returnKeyType="go"
                    />
            </View> 
        </View>
        
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignItems: 'center',
        fontSize: 22,
        color: '#FFFFFF',
    },

    input: {
        width: 200,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#fff',
    },
});


export default Qpage2;