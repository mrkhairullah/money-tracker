import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import convertToRupiah from "../utils/convertCurrency";

export default function OverviewCard({ size = "default", type = null, amount }) {
  let icon = { name: "card", size: 80, color: "#38bdf8" }
  let nonHighlightedText = "Money";
  switch (type) {
    case "income":
      icon = { name: "trending-up", size: 50, color: "#22c55e" };
      nonHighlightedText = "Income";
      break;
    case "spend":
      icon = { name: "trending-down", size: 50, color: "#ef4444" };
      nonHighlightedText = "Spend";
      break;
  }
  return (
    <View style={styles.card }>
      <Ionicons name={icon.name} size={icon.size} color={icon.color} />
      <View style={styles.container}>
        <Text style={size === "default" ? contentStyles.default.nonHighlighted : contentStyles.small.nonHighlighted }>
          Total {nonHighlightedText}
        </Text>
        <Text style={size === "default" ? contentStyles.default.highlighted : contentStyles.small.highlighted }>{convertToRupiah(amount)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 16,
    flexGrow: 1,
    borderRadius: 16,
    paddingVertical: 32,
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#1e293b",
  },
  container: {
    gap: 4,
    alignItems: "center",
  },
})

const contentStyles = {
  default: StyleSheet.create({
    highlighted: {
      fontSize: 32,
      color: "white",
      fontWeight: "bold",
    },
    nonHighlighted: {
      fontSize: 16,
      color: "#94a3b8",
    },
  }),
  small: StyleSheet.create({
    highlighted: {
      fontSize: 16,
      color: "white",
      fontWeight: "bold",
    },
    nonHighlighted: {
      fontSize: 12,
      color: "#94a3b8",
    },
  }),
}