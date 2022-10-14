import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Card } from '@rneui/themed';

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
            <ScrollView>
                <View>
                    <Image
                        source={require('../../assets/saude.png')}
                        style={styles.icons}
                    />
                </View>
                <Text style={styles.text}>Estar saudavel</Text>
                <View>
                    <Image
                        source={require('../../assets/milk.png')}
                        style={styles.icons}
                    />
                </View>
                <Text style={styles.leite}>Produzir leite materno excendente</Text>

                <View>
                    <Image
                        source={require('../../assets/remedios.png')}
                        style={styles.icons}
                    />
                </View>
                <Text style={styles.rm}>Produzir leite materno excendente</Text>
                <View>
                    <Image
                        source={require('../../assets/mao.png')}
                        style={styles.icons}
                    />
                </View>
                <Text style={styles.ajuda}>
                    Se dispor a ordenhar e doar o excedente a um banco de leite humano.
                </Text>
            </ScrollView>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/botaoVoltar.png')}
                        style={styles.buttonImageBackStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('StepTwo')}>
                    <Image
                        source={require('../../assets/botaoAvancar.png')}
                        style={styles.buttonImageIconStyle}
                    />
                </TouchableOpacity>
            </View>
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
        textAlign: 'center',
        fontSize: 20,

        color: '#000',
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