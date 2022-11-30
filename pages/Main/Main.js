import { StyleSheet, Text, View, ImageBackground,TouchableOpacity } from 'react-native';
import WhiteButton from '../../components/button/Button';


const Main = ({ navigation }) =>(

  
    <View style={styles.container}>
      <ImageBackground
      source={require('../../assets/backgroundT1.png')}
    style={styles.imageBackground}>

      <TouchableOpacity style={styles.buttonWhite}  onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textButtonWhite} >Entrar</Text>
        </TouchableOpacity>
     
      <Text style={styles.Text} onPress={() => navigation.navigate('StepOne')} >Deseja Cadastra-se?</Text>
      </ImageBackground>

    </View>
  
  );


const styles = StyleSheet.create({
  container: {
  flex: 1,
    flexDirection: "column",

    
    
  },
  imageBackground:{
 flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  Text:{
    color:'#E0E6ED',
    fontSize:14,
  marginTop:32,
  fontWeight: "bold",
  },
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

});
export default Main;