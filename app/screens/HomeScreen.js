import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import colors from '../config/colors'

const HomeScreen = () => {
    return (
        <AppScreen>
            <View style={styles.tagContainer}>
                <Image 
                resizeMode='contain'
                width={70}
                height={70}
                source={require('../assets/DonutIcon.png')}
                style={styles.icon}
                />
                <Image 
                resizeMode='contain'
                width={70}
                height={70}
                source={require('../assets/Donut.png')}
                />

            </View>
            <View style={styles.headerContainer}>
                <AppText style={styles.text}>
                    One place for meeting everyone.
                </AppText>
            </View>
            <View style={styles.paragraph}>
                <AppText style={styles.text2}>
                    An Open Source Social networking bridge between Developers, Organisations and Open Source aspirants.
                </AppText>
            </View>
            <View style={styles.buttonContainer}>
            <AppButton title="Sign In" />
            </View>
        </AppScreen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    buttonContainer:{
        position:'absolute',
        width:180.8,
        height:50.06,
        left:86,
        top:510
    },
    headerContainer:{
        position:'absolute',
        top:201,
        left:29,
        width:315,
        height:96
    },
    icon:{
        marginRight:18,
    },
    paragraph:{
        position:'absolute',
        width:320,
        height:92,
        left:29,
        top:357,
    },
    tagContainer:{
        flexDirection:'row',
        alignItems:'center',
        top:102,
        left:29
    },
    text:{
        fontSize:36,
        fontWeight:'bold',
        lineHeight:48,
        //fontFamily:'Playfair'
    },
    text2:{
        color:colors.subTextColor,
        fontSize:18,
        lineHeight:25
    }
})
