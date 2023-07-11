import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Pressable, Text } from "react-native";
import HomeScreen from "./sources/screens/HomeScreen";
import FormScreen from "./sources/screens/FormScreen";
import HistoryScreen from "./sources/screens/HistoryScreen";
import { clearData } from "./sources/core/features";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 65,
            borderTopWidth: 0,
            backgroundColor: "#0f172a",
          },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "#38bdf8",
          tabBarInactiveTintColor: "white",
          headerStyle: {
            backgroundColor: "#0f172a",
            elevation: 0,
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Money Tracker",
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => <Ionicons name="grid" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="Form"
          component={FormScreen}
          options={{
            title: "Add Record",
            headerTitleAlign: "center",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  ...styles.tabBarMiddle,
                  backgroundColor: focused ? "#38bdf8" : "white",
                }}
              >
                <Ionicons name="add" size={40} />
              </View>
            ),
            tabBarIconStyle: {
              color: "#0f172a",
            },
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerRight: () => (
              <Pressable
                style={{
                  paddingHorizontal: 16,
                }}
                onPress={clearData}
              >
                <Text style={{
                  color: "#ef4444",
                  fontSize: 16
                }}>
                  Clear Data
                </Text>
              </Pressable>
            ),
            tabBarIcon: ({ color, size }) => <Ionicons name="albums" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarMiddle: {
    padding: 4,
    paddingLeft: 6,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
