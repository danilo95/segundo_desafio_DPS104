import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const weatherViewer = ({ data }) => {
  return (
    <View>
      <View style={styles.container}>
        <FontAwesome5 name="city" size={40} color="black" />
      </View>
      <View style={styles.container}>
        <FontAwesome5 name="temperature-high" size={50} color="black" />
        <Text style={styles.weather}>{`${data.main.temp}° `}</Text>
        <Text>{`${data.weather[0].description}`}</Text>
      </View>
      <View style={styles.container}>
        <Text>{`Minima: ${data.main.temp_min}°  Maxima: ${data.main.temp_max}°`}</Text>
      </View>
      <View style={styles.containerColumn}>
        <Text>{`Humedad: ${data.main.humidity}`}</Text>
        <Text>{`Viento: ${data.wind.speed}`}</Text>
      </View>
    </View>
  );
};

export default weatherViewer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  weather: {
    fontSize: 24,
    fontWeight: "bold",
  },
  containerColumn: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 10,
    width: 350,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
