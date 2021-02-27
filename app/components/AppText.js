/*This Component Customize the Text of our App*/
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const AppText = ({children,style}) => {
    return (
        <Text style={[styles.text,style]}>{children}</Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:Platform.OS==="android" ? "Roboto" :"Avenir", //CHANGE HERE
    }
})
