import React from "react";
import { SafeAreaView, StyleSheet, Text, ImageBackground, StatusBar, View } from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => { 
    const { name, country, population, sunrise, sunset } = weatherData; 
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.image}>
                
                <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
                <Text style={[styles.countryName, styles.cityText]}>{country}</Text>

                <View style={styles.populationWrapper}>
                    <IconText 
                        iconName={'user'} 
                        iconColor={'black'} 
                        bodyText={`Population: ${population}`} 
                        bodyTextStyles={styles.populationText}
                    />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText 
                        iconName={'sunrise'} 
                        iconColor={'black'} 
                        bodyText={moment(sunrise).format('h:mm:ss ') + 'AM'} 
                        bodyTextStyles={styles.riseSetText}
                    />
                    <IconText 
                        iconName={'sunset'} 
                        iconColor={'black'} 
                        bodyText={moment(sunset).format('h:mm:ss A')} 
                        bodyTextStyles={styles.riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5, 
        color: 'black'
    },
    riseSetWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: "black"
    },
    rowLayout: {
        flexDirection: 'center',
        alignItems: 'center'
    }
});

export default City;
