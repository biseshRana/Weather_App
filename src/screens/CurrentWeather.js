import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
 
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData; // Destructures data from weatherData prop (which is only element idk how). Not the same as the data array at all. 
  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}> 
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="black" />
        <Text style={styles.tempStyles}>{temp}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`}</Text>

        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>{`High: ${temp_max}`}</Text>
          <Text style={styles.highLow}>{`   Low: ${temp_min}`}</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>{weather[0]?.description}</Text>
        <Text style={styles.message}>{weatherType[weatherCondition].message}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
});

export default CurrentWeather;
