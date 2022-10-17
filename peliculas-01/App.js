import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Movies from "./components/Movies";
import Series from "./components/Series";
import NewMedia from "./components/NewMedia";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Peliculas"
        component={Movies}
        options={{
          tabBarLabel: "Peliculas",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-movies" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: "Series",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-open-play"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Estrenos"
        component={NewMedia}
        options={{
          tabBarLabel: "Estrenos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-filter"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
