import React from 'react';
import { View, Text , StyleSheet, TextInput} from 'react-native';

const Qpage1 = () =>{
    return(
        <View>
            <View className = "Q1">
                <Text style = {[styles.textStyle, {paddingTop: 40}]}>Initial sleep time?</Text>
                <TextInput style = {styles.input}  
                    placeholder = "Type Here" 
                    placeholderTextColor = 'rgba(255,255,255,0.7)' 
                    returnKeyType="go"
                    />
            </View>
            <View className = "Q2">
                <Text style = {[styles.textStyle, {paddingTop: 20}]}>Wake up time?</Text>
                <TextInput style = {styles.input}  
                    placeholder = "Type Here" 
                    placeholderTextColor = 'rgba(255,255,255,0.7)' 
                    returnKeyType="go"
                    />
            </View>
            <View className = "Q3">
                <Text style = {[styles.textStyle, {paddingTop: 20}, {fontSize: 17}]}>Days a week you get less than 7 hours sleep?</Text>
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


export default Qpage1;