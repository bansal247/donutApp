/*This Component sets the screen settings for the app*/
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants  from 'expo-constants'
const AppScreen = ({children,style}) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view,style]}>{children}</View>
        </SafeAreaView>
    )
}

export default AppScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        flex:1,
    },
    view:{
        flex:1,
    }
})
