import { StyleSheet, Text, View, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import CustomButton from "../components/CustomButton";
import historyTypes from "../constants/historyTypes";
import { saveHistory } from "../core/features";
import getDate from "../utils/getDate";
import React from "react";

export default function FormScreen() {
  const [history, setHistory] = React.useState({
    id: null,
    title: null,
    amount: null,
    date: getDate(),
    type: historyTypes[0],
  });
  
  function submitHandler() {
    if(history.title === null && history.amount === null) {
      console.log("Cannot empty: ", history);
      return;
    }
    saveHistory({ 
      ...history,
      id: `history@${Math.floor(Math.random() * 100)}-${history.amount}-${history.type}`
    });
    console.log(history);
    setHistory({
      ...history,
      id: null,
      title: null,
      amount: null,
      type: historyTypes[0]
    })
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          defaultValue={history.title}
          onChangeText={value => setHistory({ ...history, title: value })}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          defaultValue={history.amount}
          onChangeText={value => setHistory({ ...history, amount: value })}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          defaultValue={history.date}
          editable={false}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Type</Text>
        <SelectDropdown
          data={historyTypes}
          defaultValue={history.type}
          buttonStyle={styles.input}
          onSelect={value => setHistory({ ...history, type: value })}
          buttonTextStyle={{
            textAlign: "left",
            marginHorizontal: 0,
            color: styles.input.color,
            fontSize: styles.input.fontSize,
          }}
          dropdownStyle={{
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#334155",
            backgroundColor: "#1e293b",
          }}
          rowStyle={{
            borderBottomColor: "#334155",
          }}
          rowTextStyle={{
            fontSize: 14,
            color: "white",
          }}
        />
      </View>
      <View style={{ ...styles.container, paddingVertical: 32 }}>
        <CustomButton text="Submit" onPressHandler={submitHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
  container: {
    gap: 8,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "flex-start",
  },
  label: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
  input: {
    fontSize: 14,
    width: "100%",
    color: "white",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "#334155",
    backgroundColor: "#1e293b",
  }
});