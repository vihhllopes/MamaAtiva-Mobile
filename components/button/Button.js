import React from 'react'
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native'

const WhiteButton =()=>{
    return(
        <TouchableOpacity style={styles.buttonWhite}>
<Text style={styles.textButtonWhite}>Entrar</Text>
        </TouchableOpacity>
    )
}

export default WhiteButton 

const styles = StyleSheet.create({
    buttonWhite:{
        backgroundColor:'#E7E6E6',
        width: 241,
        height: 55,
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
     marginTop:268,
    },
    textButtonWhite:{
        family: 'Quicksand',
        fontSize:24,
    }
})