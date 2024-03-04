import {Image, Modal, Text, View, StatusBar} from "react-native";
import {IconButton, useTheme} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {addBook, makeFavorite} from "../../store/slices/Book"
import DetailsItem from "../DetailsItem";
import {style} from "./style";
import React from "react";

const DetailsModal = () => {
    const dispatch = useDispatch();
    const {colors} = useTheme()
    const {book,favoriteBooks} = useSelector((state) => state.books);

    return (
        <Modal animationType="slide" transparent={false} visible={book !== null}>
            <StatusBar hidden={true}/>
            <View style={style(colors).container}>
                <View style={style(colors).innerContainer}>
                    <View style={style(colors).closeButtonContainer}>
                        <IconButton icon={"close"} iconColor={"white"} background={"rgba(255,255,255,0.8)"}
                                    onPress={() => dispatch(addBook(null))}/>
                    </View>
                    <View style={style(colors).detailsWrapper}>
                        <Text style={style(colors).title}>{book && book.title}</Text>
                        <Image source={{uri: book && book.image,}} style={style(colors).image}/>
                        <Text style={style(colors).subtitle}>{book && book.subtitle}</Text>
                    </View>
                </View>
                <View style={style(colors).iconsWrapper}>

                    <IconButton icon={(book && favoriteBooks.some(item => item.isbn13 === book.isbn13)) ? "cards-heart" : "cards-heart-outline"}
                      iconColor={"red"} onPress={()=>dispatch(makeFavorite(book))} size={30}/>

                </View>
                <View style={style(colors).boxContainer}>
                    <DetailsItem name={"Authors"} value={book && book.authors}/>
                    <DetailsItem name={"Isbn"} value={book &&book.isbn13}/>
                    <DetailsItem name={"Year"} value={book && book.year}/>
                    <DetailsItem name={"Description"} value={book && book.desc}/>
                </View>
            </View>
        </Modal>
    );
};
export default DetailsModal;



