import {StyleSheet} from "react-native";

export const style = (colors) =>  StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    innerContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    bookWrapper: {
        margin:10,
        alignItems: "center",
        width: "45%",
        borderRadius: 10,
        display: "flex",
        flexWrap: "wrap",
        paddingBottom:20,
        backgroundSize: '50%',


    },
    bookBackground:{
        backgroundColor:"rgba(255,0,0,0.7)",
        width:"100%",
        height:"70%",
        top:'30%',
        position:"absolute",
        zIndex:-1,
        borderRadius:10
    },
    title:{
        width: "70%",
        color: colors.myOwnColor,
        fontWeight:"bold",
        paddingLeft:10
    },
    titleContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "flex-start",
    },
});