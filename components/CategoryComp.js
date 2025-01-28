import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryComp({ title, color, pressFood }) {
    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={pressFood}>
                <View style={[styles.insideView, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                    {/* <Text style={styles.title}>{color}</Text> ceci met 
                    noms des colors en bas du title  */}
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        margin: 15,
        borderRadius: 20,
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white',

    },
    button: {
        flex: 1,
    },
    insideView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonPressed: {
        opacity: 0.5,// met opacite sur lors du clique sur les titles
    },

})