import {Image, StyleSheet, Text, View} from "react-native";
import {removeFavoriteBook} from "../../store/slices/Book";
import {IconButton} from "react-native-paper";
import {useDispatch} from "react-redux";
import {style} from "./style";
import React from "react";

const FavoriteItem = ({props,onPress}) => {
    const dispatch = useDispatch();
    const item = props;

    return <View style={style.favoriteItemWrapper}>
             <View style={style.titleContainer}>
            <Image source={{uri: item.image}} style={{width: 60, height: 50}}/>
            <Text style={style.textContainer}>{item.title}</Text>
            </View>
            <IconButton icon={"book-open-page-variant-outline"} iconColor={"red"} onPress={onPress}/>
            <IconButton icon={"close"} iconColor={"red"} onPress={() => dispatch(removeFavoriteBook(item.isbn13))}/>
    </View>
}

export default FavoriteItem;

