import { View, StyleSheet,Image } from "react-native";



export default function StepOne (){
    return(
        <View style={styles.container} >
            <Image source={require('../../assets/perfil.png')} style={styles.imagePerfil} />
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
         
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        color: '#F1F1F1',
        flexDirection: "row",
        
    },
    imagePerfil:{
        width: 70,
        height: 70,
        marginTop:90,
        left:20,

    },
    logo:{
        width: 160,
        height: 72,
        marginTop: 85,
        left:45,
    }


})