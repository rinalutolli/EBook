import {useDispatch} from "react-redux";
import Book from "../../components/Book";
import {addBook} from "../../store/slices/Book";
import React, {useEffect, useState} from "react";
import {FlatList, View, StyleSheet} from "react-native";
import {Searchbar, useTheme} from "react-native-paper";
import SearchBookSvg from "../../components/svg/SearchBookSvg";

const Search = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const {colors} = useTheme();
    const [isLoading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = React.useState("");

    useEffect(() => {
        searchQuery.length > 0 &&
        fetch("https://api.itbook.store/1.0/search/" + `${searchQuery}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        searchQuery.length === 0 && setLoading(true);
    }, [searchQuery]);

    const onChangeSearch = (query) => setSearchQuery(query);
    const onPress = (item) => {
        fetch("https://api.itbook.store/1.0/books/" + `${item.isbn13}`)
            .then((response) => response.json())
            .then((json) => dispatch(addBook(json)))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    };
    return (
        <View style={style(colors).container}>
            <Searchbar
                placeholderTextColor={"#132658"}
                placeholder="Search"
                iconColor={'#132638'}
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={style(colors).searchBar}
            />
            {isLoading ? (
                <View style={style(colors).imageWrapper}>
                    <SearchBookSvg/>
                </View>
            ) : (
                <View style={style(colors).resultsWrapper}>
                    <FlatList
                        data={data.books}
                        numColumns={2}
                        keyExtractor={({id}, index) => index}
                        renderItem={({item, index}) => (
                            <Book item={item} index={index} onPress={() => onPress(item)}/>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default Search;

const style = (colors) => StyleSheet.create({
    container: {
        backgroundColor: colors.screenBackground,
        paddingTop: 40,
        height: '100%',
        width: "100%"
    },
    searchBar: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#132638',
        borderRadius: 10,
        margin: 20,
        height: 40
    },
    imageWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: colors.screenBackground
    },
    resultsWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: colors.screenBackground
    },
    bookWrapper: {
        alignItems: "center",
        width: "50%",
        display: "flex",
        flexWrap: "wrap",
    },
});
