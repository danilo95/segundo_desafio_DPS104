import axios from "axios";
const baseUrl = "http://api.openweathermap.org/geo/1.0/direct";
const weatherBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "05fe9a6b1cc4c51e144c30cdc0ba788a";

export const getGeoValues = async (city) => {
  const url = `${baseUrl}?q=${city},sv&appid=${apiKey}`;
  const configurationObject = {
    method: "get",
    url,
  };
  const response = await axios(configurationObject);
  return response.data;
};

export const getWeather = async (lat, lon) => {
  const url = `${weatherBaseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es`;
  const configurationObject = {
    method: "get",
    url,
  };
  const response = await axios(configurationObject);
  return response.data;
};
