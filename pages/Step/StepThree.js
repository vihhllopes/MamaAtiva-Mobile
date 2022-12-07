import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Card, Center, Text } from "native-base";
import { CardBase } from "@rneui/base/dist/Card/Card";
import { useStoreState } from "easy-peasy";

export default function StepOne({ navigation }) {
  const tema = useStoreState((state) => state.tema);
  return (
    <Center w="100%">
      <View style={{ backgroundColor: tema }}>
        <View style={[styles.container, { backgroundColor: tema }]}>
          <Image
            source={require("../../assets/perfil.png")}
            style={styles.imagePerfil}
          />
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Coletando o leite de forma correta</Text>
        </View>
        <View>
          <CardBase
            containerStyle={{
              marginTop: 50,
              elevation: 5,
              borderRadius: 5,
              padding: 50,
            }}
          >
            <Center>
              <Image
                source={require("../../assets/three.png")}
                style={styles.step}
              ></Image>

              <Text style={styles.stepText}>
                Após o fim da coleta, tampe o frasco, armazene-o no congelador e
                entre em contato com o banco de leite que desejar. O leite pode
                ficar armazenado por até 15 dias.
              </Text>
            </Center>
          </CardBase>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("StepTwo")}>
            <Image
              source={require("../../assets/botaoVoltar.png")}
              style={styles.buttonImageBackStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Center>
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
