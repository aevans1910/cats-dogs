import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Stars(v) {
    const starsArray = []
    for (let i = 0; i < v; i++) {
        starsArray.push(<Icon name="star" size={10} key={`star-${i}`} />)
    }
    return starsArray
}

export default function Item({ title, data }) {
    const info = Object.keys(data)
    const caracteristics = info.filter((animal) => {
        if (animal === "breed") {
            return false
        }
        return true
    }).map((animal) => {
        return (
            <View key={animal} style={styles.row}>
                <Text style={styles.text}>{animal}:</Text>
                <Text>{Stars(data[animal])}</Text>
            </View>
        )
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {caracteristics}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 10,
      backgroundColor: '#dff0f0',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      margin: 20,
      padding: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 7,
    },

    text: {
        margin: 1,
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1,
        width: "100%",
        margin: 1,
    },
  });