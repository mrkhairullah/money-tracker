import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import convertToRupiah from "../utils/convertCurrency";

export default function HistoryCard({ type = "Income", title, amount, date }) {
  return (
    <View style={styles.card }>
      <View style={styles.iconBox}>
        <Ionicons
          name={type === "Income" ? "trending-up" : "trending-down"}
          size={32}
          color={type === "Income" ? "#22c55e" : "#ef4444"} />
      </View>
      <View style={{ ...styles.container, flexGrow: 1, alignItems: "flex-start" }}>
        <Text style={{ ...styles.nonHighlight, color: "#94a3b8"}}>
          {type}
        </Text>
        <Text style={{ ...styles.highlight, color: "white"}}>
          {title}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={{ ...styles.highlight, color: "white"}}>
          {convertToRupiah(amount)}
        </Text>
        <Text style={{ ...styles.nonHighlight, color: "#94a3b8"}}>
          {date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 16,
    padding: 16,
    flexGrow: 1,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#1e293b",
  },
  iconBox: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#334155",
  },
  container: {
    gap: 4,
    alignItems: "flex-end",
  },
  highlight: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  nonHighlight: {
    fontSize: 12,
    textTransform: "capitalize",
  }
});