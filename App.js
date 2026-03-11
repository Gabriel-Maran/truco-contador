import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [countP1, setCountP1] = useState(0);
  function aumentarPlayer(count, setCount) {
    if (count >= 12) setCount(0);
    else setCount(count + 1);
  }
  function dimunuirPlayer(count, setCount) {
    if (count <= 0) setCount(0);
    else setCount(count - 1);
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageUnipar}
        source={require("./assets/logoUnipar.png")}
      />
      <Text style={styles.title}>MARCADOR</Text>

      <View style={styles.contador}>
        <Text style={styles.textContador}>{countP1}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonIncrement}
            onPress={() => aumentarPlayer(countP1, setCountP1)}
          >
            <Text style={styles.textoButtons}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDecrement}
            onPress={() => dimunuirPlayer(countP1, setCountP1)}
          >
            <Text style={styles.textoButtons}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  imageUnipar: {
    width: 150,
    height: 80,
    marginTop: 55,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  contador: {
    justifyContent: "center",
  },
  textContador: {
    fontSize: 50,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    marginTop: 130,
  },
  buttonIncrement: {
    backgroundColor: "#125c46",
    width: 70,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonDecrement: {
    backgroundColor: "#8B0000",
    width: 70,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
  },
  textoButtons: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
});
