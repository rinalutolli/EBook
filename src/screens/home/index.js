import {useDispatch} from "react-redux";
import Book from "../../components/Book";
import {useTheme} from "react-native-paper";
import React, {useState, useEffect} from "react";
import { FlatList, View, StyleSheet} from "react-native";
import {addBook, updateLastViewedBooks} from "../../store/slices/Book";

const Home = () => {
    const {colors} = useTheme()
    const dispatch = useDispatch();
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/new")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);

    const onPress = (item) => {
        dispatch(updateLastViewedBooks(item))
        fetch("https://api.itbook.store/1.0/books/" + `${item.isbn13}`)
            .then((response) => response.json())
            .then((json) => dispatch(addBook(json)))
            .catch((error) => console.error(error));
    };
    return (
        <View style={style(colors).container}>
            <View style={style.innerContainer}>
                <FlatList data={data?.books} numColumns={2} keyExtractor={(item,index) => index}
                    renderItem={({item, index}) => (
                        <Book item={item} index={index} onPress={()=>onPress(item)}/>
                    )}
                />
            </View>
        </View>
    );
};

export default Home;
const style = (colors) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.screenBackground,
        justifyContent: "center"
    },
    innerContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
});
