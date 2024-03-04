import {
    FlatList,
    Platform,
    StatusBar,
    StyleSheet,
    View
} from "react-native";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {useTheme} from "react-native-paper";
import FavoriteBookSvg from "../../components/svg/FavoriteBookSvg";
import FavoriteItem from "../../components/FavoriteItem";
import BookPdf from "../../components/BookPdf";

const Favorites = ({navigation}) => {
    const {colors} = useTheme();
    const [favBooks, setFavBooks] = useState([]);
    const {favoriteBooks} = useSelector((state) => state.books);
    const [openWeb, setOpenWeb] = useState(false)


    useEffect(() => {
        const oldBooks = [...favoriteBooks]
        oldBooks.reverse()
        setFavBooks(oldBooks);
    }, [favoriteBooks])
     const readBook = () =>{
         navigation.setOptions({headerShown:false})
         setOpenWeb(true)
     }
     const closeBook = () => {
         navigation.setOptions({headerShown:true})
         setOpenWeb(false)
     }


    if (openWeb) {
        return <BookPdf  onClose={() => closeBook()}/>
    }


    return (
        <View style={style(colors).container}>
            {favoriteBooks.length > 0 ?
                <FlatList
                    contentContainerStyle={style(colors).contentContainer}
                    data={favBooks}
                    numColumns={1}
                    keyExtractor={(item,index) => index}
                    renderItem={({item}) => (
                        <FavoriteItem props={item} onPress={() => readBook()}/>
                    )}
                />
                :
                <View style={style(colors).svgWrapper}>
                    <FavoriteBookSvg/>
                </View>
            }
        </View>
    )}

export default Favorites;


const style = (colors) => StyleSheet.create({
    contentContainer: {
        padding: 10,
        paddingTop: StatusBar.currentHeight || 42
    },
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground
    },
    svgWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        alignContent: "center"
    },
});
