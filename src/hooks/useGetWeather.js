import React, {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => 
    {
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [weather, setWeather] = useState([]) //initialize as an empty array
        const [lat, setLat] = useState([])
        const [lon, setLon] = useState([])

        const fetchWeatherData = async () => 
            {
              try
              {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)  
                const data = await res.json()
                setWeather(data)
                //res requests data from the API, which returns as a JSON. data parses the JSON data to usable code. setWeather will add info from the API into the array. After setLoading is set to false we won't see the loading screen anymore and see the actual app complete with all the data.Kinda weird how fetch is calling lat and lon before they are assigned values in useEffect but it must somehow work. 
              } 
              catch (e) //if weather not avialable at location
              {
                setError('Could not fetch weather')
              }
              finally //used to execute sum after try catch has been completed
              {
                setLoading(false)
              }
              
            }
      
          useEffect(() => 
            {
              (
                async() => //using async because we are fetching data which takes time. Takes time is it uses await. Async function returns a promise.
                  {
                    let {status} = await Location.requestForegroundPermissionsAsync() //let {status} declares a nameless object where status is a property. It is part of an object becuz RFPA returns an object promise. Status is a property because it is destructing the RFPA to only extract the status property. However, let location is storing the entire object instead of destructuring in let. 
                    if(status !== 'granted')
                      {//if permission denied
                        setError('permission to access location was denied')
                        return //causes an early exit of the function
                      }
                      let location = await Location.getCurrentPositionAsync({})
                      setLat(location.coords.latitude)
                      setLon(location.coords.longitude)//the reason GCPA is taking in an empty parameter is because normally it takes in paramters of accuracy and timeout. However we don't need nun of this so we declare an empy object which uses the default options
                      await fetchWeatherData()
                  }
              )() //invokes set location at the end of the function
            }, [lat, lon]) //rerenders component only when lat or lon change
        return [loading, error, weather]
    }