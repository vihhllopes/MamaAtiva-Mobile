import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const HomeList = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 40,
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
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.buttonText}>Como Doar?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.buttonText}>Meus Registros</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.buttonText}>Bancos de Leite</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.buttonText}>Conquistas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.buttonText}>Mama Midia</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeList;

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
  buttonText: {
    fontSize: 20,
    fontWeight: 300,
    textAlign: "center",
    marginTop: 8,
    color: "#273444",
  },
  name: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: "center",
  },
});
