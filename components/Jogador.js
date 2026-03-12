import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Trucar from "./Trucar";

export default function Jogador({
  canIncrease,
  aumentaValorTruco,
  titulo,
  matchValue,
  count,
  setCount,
  aumentarPlayer,
  dimunuirPlayer,
}) {
  return (
    <View>
      <View style={styles.contador}>
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.textContador}>{count}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonIncrement}
            onPress={() => aumentarPlayer(count, setCount, matchValue)}
          >
            <Text style={styles.textoButtons}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDecrement}
            onPress={() => dimunuirPlayer(count, setCount)}
          >
            <Text style={styles.textoButtons}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      {canIncrease && (
        <Trucar
          canIncrease={canIncrease}
          actualValue={matchValue}
          aumentaValorTruco={aumentaValorTruco}
          player={titulo}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
    textAlign: "center",
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
