import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Item({ title, data }) {
    const info = Object.keys(data)
    const caracteristics = info.filter((animal) => {
        if (animal === "breed") {
            return false
        }
        return true
    }).map((animal) => {
        return (
            <Text style={styles.text}>{animal}: {data[animal]}</Text>
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
  });