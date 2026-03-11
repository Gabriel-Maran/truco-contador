import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Jogador from "./components/Jogador";

export default function App() {
  const [countP1, setCountP1] = useState(0);
  const [countP2, setCountP2] = useState(0);
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
      <View style={styles.playersDisplay}>
        <Jogador
          titulo={"Nós"}
          count={countP1}
          setCount={setCountP1}
          aumentarPlayer={aumentarPlayer}
          dimunuirPlayer={dimunuirPlayer}
        />
        <Jogador
          titulo={"Eles"}
          count={countP2}
          setCount={setCountP2}
          aumentarPlayer={aumentarPlayer}
          dimunuirPlayer={dimunuirPlayer}
        />
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
  playersDisplay: {
    marginTop: 35,
    flexDirection: "row",
    gap: 35,
  },
});
