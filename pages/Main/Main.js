import { StyleSheet, Text, View, ImageBackground,Button } from 'react-native';
import WhiteButton from '../../components/button/Button';


export default function Main() {

  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('../../assets/backgroundT1.png')}
    style={styles.img}>
     
      <WhiteButton
        />
        <Text>Deseja Cadastra-se?</Text>
      </ImageBackground>

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    flexDirection: "column"

    
    
  },
  img:{
 flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
});