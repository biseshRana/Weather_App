import React, {useState, useEffect} from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => 
  {
    const [loading, error, weather] = useGetWeather();  
    //lat and lon not used becuz they fetch API data and are only needed in useGetWeather. useGetWeather is a custom hook, it is destructured into 3 other hooks. Weather gets weather data from API

    if (weather && weather.list) // if weather data exists load this as a prop
      {
        return(
          <NavigationContainer>
            <Tabs weather={weather}/> 
          </NavigationContainer>
        )
      }

      return( //else show a loading sign
        <View style={styles.container}>
          {error ? (<ErrorItem/>) : (<ActivityIndicator size={'large'} color={'blue'}/>)}
        </View>
      )
      

    
  }

const styles = StyleSheet.create
({
  container: 
  {
    justifyContent: 'center',
    flex: 1
  }
});
  export default App