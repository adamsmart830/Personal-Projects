import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../assets/temp-logo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const LoginScreen = () => {
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    }
    const onForgtPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} 
                   style={[styles.logo, {height: height * 0.3}]} 
                   resizeMode="contain" 
            />
            <CustomInput
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
                secureTextEntry={false}
            />
            
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
            />
            
            <CustomButton
                text="Sign In"
                onpress={onSignInPressed}
            />

            <CustomButton
                text="Forgot Password?"
                onpress={onForgtPasswordPressed}
                type = "TERTIARY"
            />
            
        </View>


    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        maxWidth: 100,
        height: 100,
        maxHeight: 200,
    },

});

export default LoginScreen