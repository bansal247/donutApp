/* This Component is Custom Button Used in Screens 
    This Button Fills 100% of its container size*/
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const AppButton = ({title, onPress, color=colors.buttonBgColor}) => {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:color}]} onPress={onPress}>
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        borderRadius:25,
        justifyContent:'center',
        marginVertical:5,
        padding:13,
        width:'100%',
    },
    text:{
        color:colors.buttonTextColor,
        fontSize: 20,
        textTransform:'capitalize',
        fontWeight:'400',
    }
})
