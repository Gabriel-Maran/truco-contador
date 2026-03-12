import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Trucar({
  canIncrease,
  actualValue,
  aumentaValorTruco,
  player,
}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonTrucar}
        onPress={() => aumentaValorTruco(player)}
      >
        <Text style={styles.textButton}>
          {{
            1: "TRUCO",
            3: "SEIS",
            6: "NOVE",
            9: "DOZE",
          }[actualValue] || "Valor Inválido"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTrucar: {
    backgroundColor: "#2c49a8",
    width: 155,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 15,
  },
  textButton: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "semibold",
  },
});
