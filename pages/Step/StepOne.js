import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Card } from '@rneui/themed';
import {   Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Modal, NativeBaseProvider } from "native-base";

export default function StepOne({ navigation }) {
    return (
        <Center w="100%" h="100%">
            
        <View  >
            <View style={styles.container}>
                <Image source={require('../../assets/perfil.png')} style={styles.imagePerfil} />
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.containerTitle}>
                <Card.Title style={styles.title}>Coletando o leite
                    de forma correta</Card.Title>
            </View>
            <View
            >
                <Card containerStyle={{ marginTop: 50, textAlign: 'center', elevation: 5, borderRadius: 5, padding: 50, }}>
                    <Card.Image source={require('../../assets/one.png')} style={styles.step} ></Card.Image>

                    <Text style={styles.stepText}>O frasco que armazenará o leite deve ser de vidro com tampa de plástico, como os de café solúvel. Antes de utilizá-lo, esterelize-o em água fervente por 15 minutos.</Text>
                </Card>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                >
                    <Image
                        source={require('../../assets/botaoVoltar.png')}
                        style={styles.buttonImageBackStyle}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StepTwo')} >
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
        marginTop: 20,
        textAlign: "center",
        fontSize: 20,
       
        color:"primary",
         fontFamily:"Quicksand",
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
        fontFamily:"Quicksand",
        color:"primary",
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