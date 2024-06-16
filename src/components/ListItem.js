import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from "../utilities/weatherType";
import moment from 'moment';

//this entire function returns one object in the list formatted to have sun icon and display its date, min, and max with styling. Props is an object
const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props; //called destructuring. Same thing as const dt_txt = props.dt_txt; const min = props.min, etc. Idk what condition is. Sets everything equal to the prop allowing it to be passed to renderItem function.
    return (
        <View style={styles.item}>
            <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
            <View style={styles.dateTextWrapper}>
                <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={styles.temp}>{`${Math.round(min)} /${Math.round(max)}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row', // Corrected from flexDirect to flexDirection
        justifyContent: 'space-around', // item even distribution in row
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
});

export default ListItem;
