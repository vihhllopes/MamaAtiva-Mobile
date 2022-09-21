import { StyleSheet, Text, View, ImageBackground } from 'react-native';



export default function App({}) {

  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('./assets/backgroundT1.png')}
    style={styles.img}>
     
      <Button
        title="Go to Profile"
        
      />
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