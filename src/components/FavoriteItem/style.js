import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    favoriteItemWrapper: {
        backgroundColor: "white",
        borderRadius: 10,
        // borderColor: '#132638',
        // borderWidth: 0.5,
        height: 80,
        margin: 5,
        alignItems: "center",
        alignContent: "center",
        shadowColor: "rgb(19, 38, 56,1)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",

    },
    titleContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        width: "70%"
    },
    textContainer :{
        width: '60%'
    }
})