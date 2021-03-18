import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

const Header = () =>{
    return(
        <View>
            <Text style = {styles.textStyle}> Sleep Tracker </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 30,
    },
});


export default Header;