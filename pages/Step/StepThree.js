import { View, StyleSheet, Image,  TouchableOpacity } from "react-native";

import {  Card, Center,Text} from "native-base";
import { CardBase } from "@rneui/base/dist/Card/Card";

export default function StepOne({ navigation }) {
    return (
        <Center w="100%" >
        <View  >
            <View style={styles.container}>
                <Image source={require('../../assets/perfil.png')} style={styles.imagePerfil} />
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.title} >Coletando o leite
                    de forma correta</Text>
            </View>
            <View
            >
                <CardBase containerStyle={{ marginTop: 50,  elevation: 5, borderRadius: 5, padding:50, }}>
                    <Center>
                    <Image source={require('../../assets/three.png')} style={styles.step} ></Image>

                    <Text style={styles.stepText}>Após o fim da coleta, tampe o frasco, armazene-o no congelador e entre em contato com o banco
                        de leite que desejar.
                        O leite pode ficar armazenado por até 15 dias.</Text>
                    </Center>
                </CardBase>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.navigate('StepTwo')}
                >
                    <Image
                        source={require('../../assets/botaoVoltar.png')}
                        style={styles.buttonImageBackStyle}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MilkBank')} >
                    <Image
                        source={require('../../assets/botaoAvancar.png')}
                        style={styles.buttonImageIconStyle}
                    />

                </TouchableOpacity>                
               
            </View>
        </View>
        </Center>
    );
}
const styles = StyleSheet.create({
    container: {
        color: '#F1F1F1',
        flexDirection: "row",

    },
    imagePerfil: {
        width: 70,
        height: 70,
        marginTop: 90,
        left: 20,

    },
    logo: {
        width: 160,
        height: 72,
        marginTop: 85,
        left: 45,
    },
    title: {
       padding:10,
        textAlign: "center",
        fontSize: 25,
         fontFamily:"Quicksand",
         fontWeight:"650",
    },
    containerTitle: {
        marginTop: 50,
        backgroundColor: '#D9D9D9',
        padding: 10,
        elevation: 10,
    },
   
    step: {
        width: 170,
        height: 150,
    },
    stepText: {
        marginTop: 20,
        fontSize: 17,
        textAlign: "center",
        fontFamily:"Quicksand",
    
        
    },
    buttonImageIconStyle: {
        marginLeft: 180,
        marginTop: 50,
    },
    buttonImageBackStyle: {
        marginLeft: 50,
        marginTop: 50,
    }


})