import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data'
import FoodGrid from '../components/FoodGrid'
import { useLayoutEffect } from 'react'
import Entypo from '@expo/vector-icons/Entypo';

export default function FoodDetailScreen({ route, navigation }) {
    const foodId = route.params.foodId
    const selectedFood = FOODS.find((food) => food.id === foodId)
    // console.log(selectedFood);

    const pressHandler = () => {
        console.log('Tiklandi');

    }
    useLayoutEffect(() => {
        navigation.setOptions({

            headerRight: () => {
                return (
                    <Pressable onPress={pressHandler} style={({ pressed }) => (pressed ? styles.Iconpressed : null)
                    }
                    >
                        <Entypo name="star-outlined" size={24} color="orange" />
                    </Pressable >
                )
            }
        })

    }, [navigation])

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: selectedFood.imageUrl }} style={styles.img} />
            <Text style={styles.title}>{selectedFood.title} </Text>
            <View style={styles.detail}>
                <Text style={styles.detailItem}>{selectedFood.affordability} </Text>
                <Text style={styles.detailItem}>{selectedFood.complexity} </Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.SubTitle}>
                    <Text style={styles.inside}>Icindekiler</Text>
                </View>
                <FoodGrid data={selectedFood.ingredients} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    img: {
        width: '100%',
        height: 300,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,

    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,

    },
    detailItem: {
        color: 'red',
        fontSize: 16,
        marginHorizontal: 4,
        marginBottom: 8,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    SubTitle: {},
    inside: {
        color: 'orange',
        textAlign: 'center',
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
    },
    Iconpressed: {
        opacity: 0.5,
    },
})