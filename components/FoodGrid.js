import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodGrid({ data }) {

    return data.map((dataIng) => (
        <View key={dataIng} style={styles.dataContainer}>
            <Text style={styles.dataText}>{dataIng} </Text>
        </View>
    ))
}

const styles = StyleSheet.create({
    dataContainer: {
        backgroundColor: 'orange',
        marginVertical: 5,
        marginHorizontal: 3,
        paddingVertical: 5,
        borderRadius: 10,

    },
    dataText: {
        textAlign: 'center',
    },
})