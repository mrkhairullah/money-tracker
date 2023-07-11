import { StyleSheet, Text, Pressable } from "react-native";

export default function CustomButton({ text, onPressHandler, parentStyle = {}, childrenStyle = {} }) {
  return (
    <Pressable onPress={onPressHandler} style={{ ...styles.parent, ...parentStyle }}>
      <Text style={{ ...styles.children, ...childrenStyle }} >{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: "100%",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#38bdf8"
  },
  children: {
    fontSize: 14,
    color: "#0f172a",
    fontWeight: "bold",
  },
});