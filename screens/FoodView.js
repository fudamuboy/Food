import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS, CATEGORIES } from '../data/dummy-data'
import FoodItem from '../components/FoodItem'


// la methode find attrape chacun sa part pour repartir chacuna sa partie 
export default function FoodView({ route, navigation }) {
    const categoryId = route.params.categoryId

    const displayFoods = FOODS.filter((foodItem) => {
        return foodItem.categoryIds.indexOf(categoryId) >= 0
    })
    useLayoutEffect(() => {

        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle
        })

    }, [navigation, categoryId])



    // console.log(displayFoods);
    // le props affiche chak element avec ces donnes kil contient car ceratins 
    // comporte plusieurs 3 a 2 values
    function renderFoodItem(itemData) {
        console.log(itemData)

        const foodItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,

        }
        return <FoodItem {...foodItemProps} /> // importation du props
    }


    return (
        <FlatList data={displayFoods}
            keyExtractor={(item) => item.id}
            renderItem={renderFoodItem} />
    )
}

const styles = StyleSheet.create({})