import { StyleSheet, View, ScrollView } from "react-native";
import HistoryCard from "../components/HistoryCard";
import { getHistories } from "../core/features";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function HistoryScreen() {
  const [histories, setHistories] = React.useState(null);
  
  useFocusEffect(
    React.useCallback(() => getHistories(setHistories), [])
  );
  
  console.log("his: ", histories)
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        {
          histories?.length > 0
          ? histories.map(data => {
            return (
              <HistoryCard
                key={data.id}
                type={data.type}
                title={data.title}
                amount={data.amount}
                date={data.date}
              />
            )
          })
          : null
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  container: {
    gap: 16,
    padding: 16,
  },
});
