import {FlatList} from "react-native";
import Book from "../Book";
import React from "react";
import {addBook, makeFavorite, updateLastViewedBooks} from "../../store/slices/Book";
import {useDispatch} from "react-redux";

const BooksList = ({data,item,numColumns}) => {
    const  dispatch = useDispatch();


    const onPress = (item) => {
        dispatch(updateLastViewedBooks(item))
        fetch("https://api.itbook.store/1.0/books/" + `${item.isbn13}`)
            .then((response) => response.json())
            .then((json) => dispatch(addBook(json)))
            .catch((error) => console.error(error));
    };
    return <FlatList data={data} numColumns={numColumns} keyExtractor={(item,index) => index}  renderItem={({item, index}) => (
        <Book item={item} onPress={()=>onPress(item)}/>
    )} />
}
export default BooksList;