import { StyleSheet, Text, View, ImageBackground,Button } from 'react-native';
import WhiteButton from '../../components/button/Button';


const Main = ({ navigation }) =>(

  
    <View style={styles.container}>
      <ImageBackground
      source={require('../../assets/backgroundT1.png')}
    style={styles.imageBackground}>
      
      <WhiteButton
      
         />
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
});
export default Main;