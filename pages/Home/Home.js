import { useStoreActions, useStoreState } from "easy-peasy";
import * as React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home({ navigation }) {
  const tema = useStoreState((state) => state.tema);
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/avatar.jpg")}
          style={styles.imagePerfil}
        />
        <Image source={require("../../assets/logo1.png")} style={styles.logo} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
          backgroundColor: tema,
        }}
      >
        <View
          style={{
            marginBottom: 30,
            margin: 10,
          }}
        >
          <Icon name="star-shooting" size={25} color="#B2DECD" />
          <Text style={styles.name}>
            Alice, você já ajudou a salvar a vida de 12 bebês!
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("StepOne")}
        >
          <Text style={styles.buttonText}>Como Doar?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Requisitos")}
        >
          <Text style={styles.buttonText}>Meus Registros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MilkBank")}
        >
          <Text style={styles.buttonText}>Bancos de Leite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Conquistas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mama Midia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 290,
    borderRadius: 8,
    backgroundColor: "#B2DECD",
    color: "#5A5959",
    margin: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
    color: "#273444",
  },
  name: {
    fontSize: 16,
    marginBottom: 12,
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
});
