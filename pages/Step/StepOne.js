import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, Center, Box, Text } from "native-base";
import { useStoreState } from "easy-peasy";

export default function StepOne({ navigation }) {
  const tema = useStoreState((state) => state.tema);
  return (
    <View style={{ backgroundColor: tema }}>
      <View style={[styles.container, { backgroundColor: tema }]}>
        <Image
          source={require("../../assets/perfil.png")}
          style={styles.imagePerfil}
        />
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.containerTitle}>
        <Box color="whiteSnow" maxWidth="100%">
          <Text style={styles.title}>Coletando o leite de forma correta</Text>
        </Box>
      </View>
      <View>
        <View>
          <Center>
            <Box
              bg="#ffff"
              padding={50}
              shadow={2}
              rounded="lg"
              maxWidth="95%"
              marginTop={10}
            >
              <Center>
                <Image
                  source={require("../../assets/one.png")}
                  style={styles.step}
                ></Image>

                <Text style={styles.stepText}>
                  O frasco que armazenará o leite deve ser de vidro com tampa de
                  plástico, como os de café solúvel. Antes de utilizá-lo,
                  esterelize-o em água fervente por 15 minutos.
                </Text>
              </Center>
            </Box>
          </Center>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("StepTwo")}>
          <Image
            source={require("../../assets/botaoAvancar.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    color: "#F1F1F1",
    flexDirection: "row",
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
    padding: 10,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Quicksand",
    fontWeight: "650",
  },
  containerTitle: {
    marginTop: 50,
    backgroundColor: "#D9D9D9",
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
    fontFamily: "Quicksand",
  },
  buttonImageIconStyle: {
    marginLeft: 180,
    marginTop: 50,
  },
  buttonImageBackStyle: {
    marginLeft: 50,
    marginTop: 50,
  },
});
