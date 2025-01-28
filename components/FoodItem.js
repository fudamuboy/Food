import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FoodItem({
    id, title, imageUrl, affordability, complexity
}) {
    const navigation = useNavigation()
    const FoodItemHandler = () => {
        navigation.navigate('FoodDetail', {
            foodId: id,
        })
    }
    return (
        <View style={styles.foodItem}>
            <Pressable style={({ pressed }) => (pressed ? styles.buttonPressed : null)

            } onPress={FoodItemHandler}>
                <View style={styles.innerView}>
                    <View>
                        <Image source={{ uri: imageUrl }}
                            style={styles.img} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.detailItem}>{affordability} </Text>
                        <Text style={styles.detailItem}>{complexity} </Text>
                    </View>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    foodItem: {
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,


    },
    innerView: {},
    img: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8,
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8


    },
    detailItem: {
        fontSize: 12,
        marginHorizontal: 9,
    },
    buttonPressed: {
        opacity: 0.5,
    },
})