import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';


export default function Requisitos({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/perfil.png')}
                    style={styles.imagePerfil}
                />
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>o que eu preciso para ser doadora?</Text>
            </View>
            <ScrollView style={{padding: 30}}>
                <View style={styles.layout} >
                    <Image
                        source={require('../../assets/saude.png')}
                        style={styles.icons}
                    />
                     <Text style={styles.text}>Estar saudavel</Text>
                </View>
               
                <View>
                    <Image
                        source={require('../../assets/milk.png')}
                        style={styles.icons}
                        
                    />
                     <Text style={styles.text}>Produzir leite materno excendente</Text>
                </View>
               

                <View>
                    <Image
                        source={require('../../assets/remedios.png')}
                        style={styles.icons}
                    />
                    <Text style={styles.text}>Produzir leite materno excendente</Text>
                </View>
                
                <View>
                    <Image
                        source={require('../../assets/mao.png')}
                        style={styles.icons}
                    />
                    <Text style={styles.text}>
                    Se dispor a ordenhar e doar o excedente a um banco de leite humano.
                </Text>
                </View>
                
            </ScrollView>
          
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        color: '#F1F1F1',
        flexDirection: 'row',
        
    },

    text: {
        marginTop: 20,
        textAlign: 'center',
        fontFamily:"Quicksand",
    },

    imagePerfil: {
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
    buttonImageIconStyle: {
        marginLeft: 180,
        marginTop: 50,
    },
    buttonImageBackStyle: {
        marginLeft: 50,
        marginTop: 50,
    },
    leite: {
        marginTop: 20,
        textAlign: 'center',
    },
    ajuda: {
        marginTop: 20,
        textAlign: 'center',
    },
    rm: {
        marginTop: 20,
        textAlign: 'center',
    },
    icons: {
        alignSelf: 'center',
        marginTop: 10,
    },
});