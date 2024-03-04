import { FlatList, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {useTheme} from "react-native-paper";
import {removeViewedBooks} from "../../store/slices/Book";
import ReadBookSvg from "../../components/svg/ReadBookSvg";
import LastViewedBook from "../../components/lastViewedBook";
import BookWebView from "../../components/BookWebView";

const LastViewedBooks = () => {
    const {colors} = useTheme();
    const dispatch = useDispatch();
    const [lastBooks, setLastBooks] = useState([]);
    const {lastViewedBooks} = useSelector((state) => state.books);
    const [openWeb, setOpenWeb] = useState(false);

    useEffect(() => {
        const oldBooks = [...lastViewedBooks]
        oldBooks.reverse()
        setLastBooks(oldBooks);
    }, [lastViewedBooks])

    if(openWeb) return <BookWebView url={openWeb} onClose={()=>setOpenWeb(null)}/>

    return (
        <View style={style(colors).container}>
            {lastBooks.length > 0 ?
                <FlatList
                    data={lastBooks}
                    numColumns={1}
                    keyExtractor={(item) => item.isbn13}
                    renderItem={({item}) => (
                    <LastViewedBook item={item} onClose={() => dispatch(removeViewedBooks(item.isbn13))} onUrlPress={()=>setOpenWeb(item.url)}/>
                    )}
                /> :
                <View style={style(colors).svgWrapper}>
                    <ReadBookSvg/>
                </View>
            }

        </View>

    )
}

export default LastViewedBooks;


const style = ( colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground
    },
    svgWrapper :{
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        alignContent: "center"
    },

});
