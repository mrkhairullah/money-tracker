import { StyleSheet, Text, View, ScrollView } from "react-native";
import OverviewCard from "../components/OverviewCard";
import HistoryCard from "../components/HistoryCard";
import { getHistories } from "../core/features";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function HomeScreen() {
  const [histories, setHistories] = React.useState([]);
  const [recentHistories, setRecentHistories] = React.useState([]);
  const [totalIncome, setTotalIncome] = React.useState(0);
  const [totalSpend, setTotalSpend] = React.useState(0);
  const [totalMoney, setTotalMoney] = React.useState(0);
  
  useFocusEffect(
    React.useCallback(() => getHistories(setHistories), [])
  );

  useFocusEffect(
    React.useCallback(() => {
      if(histories.length > 0) {
        setRecentHistories(histories.slice(0, 2));
        
        const incomeData = histories.filter(data => data.type === "Income");
        setTotalIncome(incomeData.reduce((total, data) => total + data.amount, 0));
        
        const spendData = histories.filter(data => data.type === "Spend");
        setTotalSpend(spendData.reduce((total, data) => total + data.amount, 0));
      }
    }, [histories])
  );

  React.useEffect(() => setTotalMoney(totalIncome - totalSpend), [totalIncome, totalSpend]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>Overview</Text>
        <OverviewCard amount={totalMoney} />
        <View style={styles.rowContainer}>
          <OverviewCard size="small" type="income" amount={totalIncome} />
          <OverviewCard size="small" type="spend" amount={totalSpend} />
        </View>
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>Recent history</Text>
        <View style={{ gap: 16 }}>
          {
            recentHistories.length > 0
            ? recentHistories.map(data => {
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  overviewContainer: {
    gap: 16,
    padding: 16,
  },
  rowContainer: {
    gap: 16,
    flexDirection: "row",
  }
});