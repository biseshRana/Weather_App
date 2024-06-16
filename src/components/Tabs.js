import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'lightblue',
                tabBarStyle: {
                    backgroundColor: 'darkgray'
                },
                headerStyle: {
                    backgroundColor: 'darkgray'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'black'
                }
            }}
        >
            <Tab.Screen
                // used to define a tab in tab navigator
                name={'Current'} // name of tab is current
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={'droplet'} size={25} color={focused ? 'white' : 'lightblue'} />
                    )
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>

            <Tab.Screen
                name={'Upcoming'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={'clock'} size={25} color={focused ? 'white' : 'lightblue'} />
                    )
                }}
            >
                {() => <UpcomingWeather weatherData={weather.list.slice(1)} />}
            </Tab.Screen>

            <Tab.Screen
                name={'City'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={'home'} size={25} color={focused ? 'white' : 'lightblue'} />
                    )
                }}
            >
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>

        </Tab.Navigator>
    );
};
// city component will be rendered when city tab is clicked. Will receive weather.city as the prop of weatherData 
// weather is an object fetched from the API. weatherData is the name of the prop and it passes the first element (0) of weather.list. Chances are it's a forecast. .slice(1) creates a new array duplicate of the original array from index one to the end of the array. List doesn't generate without it. 
export default Tabs;
