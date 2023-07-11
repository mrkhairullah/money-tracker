import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState(null);
  const db = SQLite.openDatabase("money_tracker.db");
  
  function getData() {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS trackers(id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL, type TEXT NOT NULL, currency INTEGER NOT NULL, date TEXT NOT NULL);"
        );
        tx.executeSql(
          "INSERT INTO trackers(id, title, type, currency, date) VALUES  ('002', 'Makan baso', 'spend', 10000, '2023-07-07 10:20:05');"
        )
      }
    )
    db.transaction(
      (tx) => {
        tx.executeSql(
          "SELECT * FROM trackers;",
          [],
          (transaction, resultSet) => console.log("Success", JSON.stringify(resultSet)),
          (transaction, error) => console.log("Error", JSON.stringify(error))
        )
      }
    );
  }

  useEffect(() => {
    // getData();
  },[]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
