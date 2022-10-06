import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

const WhiteButton =()=>{
    return(
        <TouchableOpacity style={styles.buttonWhite} >
            <Text style={styles.textButtonWhite} >Entrar</Text>
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
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    },
    textButtonWhite:{
        family: 'Quicksand-Regular',
        fontSize:24,
    }
})