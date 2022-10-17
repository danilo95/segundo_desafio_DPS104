import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { cityArray } from "./const/city";
import { getGeoValues, getWeather } from "./api/api";
import WeatherViewer from "./weatherViewer/WeatherViewer";

export default function App() {
  const [city, setCity] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [loading, setLoading] = useState(false);

  const handleCity = async (newCity) => {
    setLoading(true);
    setCity(newCity);
    const geoInfo = await getGeoValues(newCity);
    const weather = await getWeather(geoInfo[0]?.lat, geoInfo[0]?.lon);
    setCurrentWeather(weather);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Picker
        selectedValue={city}
        onValueChange={(itemValue) => handleCity(itemValue)}
        style={styles.dropdown}
      >
        {cityArray.map((value) => (
          <Picker.Item
            label={value.label}
            value={value.value}
            key={value.label}
          />
        ))}
      </Picker>
      <Text style={styles.title}>
        {city ? city : "SELECIONA UNA CIUDAD PARA COMENZAR"}
      </Text>
      {loading && (
        <ActivityIndicator color={"blue"} size="large" style={styles.loading} />
      )}
      {currentWeather && !loading && <WeatherViewer data={currentWeather} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    width: "60%",
    height: 40,
  },
  title: {
    fontWeight: "bold",
  },
  loading: {
    paddingTop: 20,
  },
});
