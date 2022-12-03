
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
                    <Image source={require('../../assets/two.png')} style={styles.step} ></Image>

                    <Text style={styles.stepText}>A doadora deve estar de cabelos presos e idealmente máscara no rosto. Massageie as mamas em movimentos circulares para que o leite seja retirado de todas as regiões do peito.
                        Inicie a coleta no frasco previamente esterelizado.</Text>
                    </Center>
                </CardBase>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                 onPress={() => navigation.navigate('StepOne')}
                >
                    <Image
                        source={require('../../assets/botaoVoltar.png')}
                        style={styles.buttonImageBackStyle}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StepThree')} >
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

    }, imagePerfil: {
        width: 70,
        height: 70,
        marginTop: 90,
        left: 20,
        borderRadius: 100,
    },
    logo: {
        width: 200,
        height: 90,
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
        marginTop: 30,
    },
    buttonImageBackStyle: {
        marginLeft: 50,
        marginTop: 30,
    }


})