import React from "react"
import {SafeAreaView, StyleSheet, FlatList, StatusBar,  ImageBackground} from 'react-native'
import ListItem from "../components/ListItem"
//removed beccause this is just dummy data. Keeping it to give you an idea of the data structure 
/*const DATA=[//array of data for the flatlist
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main:{
        //not the same main as the one with clouds. Just a variable name nothing more. 
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather:[ 
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
] */

const UpcomingWeather = ({weatherData}) => //this is the weather.list[0] from tabs.js. This data gets generated into a flatlist, so idk how they are using only one element.
{
    //You can directly destructure condition in Item as well and pass it directly to renderItem in the flatlist as a prop. Idk why she doesn't do this. The reason this outside the return statement is so that the function isn't remade everytime UpcomingWeather is called, however it can be made to be within the return statement. 
    const renderItem = ({ item }) => //item is an object
        ( 
            //destructures again but with condition equaling the weather condition. PUrpose of this one is just to displays what will be within the icon
            <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
        )
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/sky.jpg')} style={styles.image}>
                <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item) => {item.dt_txt}}/>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create
({
    container:
    {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'lightblue'
    },
    image:
    {
        flex: 1
    }
})

export default UpcomingWeather