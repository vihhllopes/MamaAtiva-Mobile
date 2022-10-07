import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Card } from '@rneui/themed';


export default function StepTwo({navigation}) {
    return (
        <View  >
            <View style={styles.container}>
                <Image source={require('../../assets/perfil.png')} style={styles.imagePerfil} />
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.containerTitle}>
                <Card.Title style={styles.title} >Coletando o leite
                    de forma correta</Card.Title>
            </View>
            <View
            >
                <Card containerStyle={{ marginTop: 50, textAlign: 'center', elevation: 5, borderRadius: 5, padding: 50, }}>
                    <Card.Image source={require('../../assets/two.png')} style={styles.step} ></Card.Image>

                    <Text style={styles.stepText}>A doadora deve estar de cabelos presos e idealmente máscara no rosto. Massageie as mamas em movimentos circulares para que o leite seja retirado de todas as regiões do peito.
                        Inicie a coleta no frasco previamente esterelizado.</Text>
                </Card>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StepOne')}>
                    <Image
                        source={require('../../assets/botaoVoltar.png')}
                        style={styles.buttonImageBackStyle}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StepThree')}>
                    <Image
                        source={require('../../assets/botaoAvancar.png')}
                        style={styles.buttonImageIconStyle}
                    />

                </TouchableOpacity>
            </View>
        </View>
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
        marginTop: 20,
        textAlign: "center",
        fontSize: 20,
        color: '#000',

    },
    containerTitle: {
        marginTop: 50,
        backgroundColor: '#D9D9D9',
        padding: 10,
        elevation: 10,
    },
    card: {

        justifyContent: 'center',
        borderRadius: 20,
    },
    step: {
        width: 170,
        height: 150,
        marginLeft: 45,
    },
    stepText: {
        marginTop: 20,
        fontSize: 17,
        textAlign: "center",
        fontWeight: "bold",
    },
    buttonImageIconStyle: {
        marginLeft: 195,
        marginTop: 35,
    },
    buttonImageBackStyle: {
        marginLeft: 50,
        marginTop: 35,
    }


})