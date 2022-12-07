import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SelectList from "./SelectList";
import CardMB from "./CardMB";
import { useStoreState } from "easy-peasy";

export default function MilkBank({ navigation }) {
  const tema = useStoreState((state) => state.tema);
  const [service, setService] = React.useState("");
  return (
    <ScrollView backgroundColor={tema}>
      <View style={[styles.container, { backgroundColor: tema }]}>
        <Image
          source={require("../../assets/avatar.jpg")}
          style={styles.imagePerfil}
        />
        <Image source={require("../../assets/logo1.png")} style={styles.logo} />
      </View>
      <View style={styles.containerTitle}>
        <Text style={tema == "#FFFFFF" ? styles.title : styles.titleBlack}>
          Bancos de Leite
        </Text>
      </View>
      <View>
        <SelectList />
      </View>
      <View>
        <CardMB />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    color: "#F1F1F1",
    flexDirection: "row",
  },

  text: {
    marginTop: 20,
    textAlign: "center",
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
  titleBlack: {
    padding: 10,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Quicksand",
    fontWeight: "650",
    backgroundColor: "white",
  },
  containerTitle: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#D9D9D9",
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
    textAlign: "center",
  },
  ajuda: {
    marginTop: 20,
    textAlign: "center",
  },
  rm: {
    marginTop: 20,
    textAlign: "center",
  },
  icons: {
    alignSelf: "center",
    marginTop: 10,
  },
});
