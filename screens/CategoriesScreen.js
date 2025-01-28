import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data';
import CategoryComp from '../components/CategoryComp';

export default function CategoriesScreen({ navigation }) {


    // le component Categorycomp affiche les  data listes sur l'ecran
    // ici le categoryId est 1e propriete donc il p changer 
    function CategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('Food', {
                categoryId: itemData.item.id,
            });
        }

        // console.log(itemData.item);
        return (
            <CategoryComp title={itemData.item.title} color={itemData.item.color}
                pressFood={pressHandler} />
        )

    }
    return (
        <FlatList data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={CategoryItem}
            numColumns={2}

        />
    )
}

const styles = StyleSheet.create({})