import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import Jogador from "./components/Jogador";

export default function App() {
  const [countP1, setCountP1] = useState(0);
  const [countP2, setCountP2] = useState(0);
  const [matchValue, setMatchValue] = useState(1);
  const [isP1Truco, setIsP1Truco] = useState(false);
  function aumentaValorTruco(player) {
    if (player == "NÓS") {
      if (matchValue != 1 && isP1Truco) return;
      setMatchValue(() => (matchValue == 1 ? 3 : matchValue + 3));
      setIsP1Truco(true);
    } else if (player == "ELES") {
      if (matchValue != 1 && !isP1Truco) return;
      setMatchValue(() => (matchValue == 1 ? 3 : matchValue + 3));
      setIsP1Truco(false);
    }
  }
  function aumentarPlayer(count, setCount, matchValue) {
    setCount((count) => count + matchValue);
    setMatchValue(1);
    setIsP1Truco(false);
    if (count >= 12) {
      setCountP1(0);
      setCountP2(0);
    }
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
          titulo={"NÓS"}
          /*(O ultimo truco não pode ser do player 1 || valor atual == 1) && O valor atual tem que ser menor que doze*/
          canIncrease={(!isP1Truco || matchValue == 1) && matchValue < 10}
          count={countP1}
          aumentaValorTruco={aumentaValorTruco}
          matchValue={matchValue}
          setCount={setCountP1}
          aumentarPlayer={aumentarPlayer}
          dimunuirPlayer={dimunuirPlayer}
        />
        <Jogador
          titulo={"ELES"}
          /*(O ultimo truco do player 1 || valor atual == 1) && O valor atual tem que ser menor que doze*/
          canIncrease={(isP1Truco || matchValue == 1) && matchValue < 10}
          count={countP2}
          aumentaValorTruco={aumentaValorTruco}
          matchValue={matchValue}
          setCount={setCountP2}
          aumentarPlayer={aumentarPlayer}
          dimunuirPlayer={dimunuirPlayer}
        />
      </View>
      <View style={styles.pontuacaoAtual}>
        <Text style={styles.textMatchValue}>{matchValue}</Text>
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
  textMatchValue: {
    textAlign: "center",
    fontSize: 40,
    gap: 35,
  },
  pontuacaoAtual: {
    position: "absolute",
    top: 550,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 35,
    backgroundColor: "#9ab1df",
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
