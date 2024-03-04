import {Platform, StyleSheet} from "react-native";

export const style = (colors) => StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.screenBackground
    },
    innerContainer: {
        height: '64%',
        backgroundColor: "rgba(250, 0, 0 ,0.7)",
        paddingTop: Platform.OS === "ios" ? 60 : 30,
        borderBottomRightRadius: 37,
        borderBottomLeftRadius: 37,
        justifyContent: "space-between"
    },
    closeButtonContainer: {
        top: 0, right: 0, position: "absolute",
        flexDirection: "row",
        paddingBottom: 20,
        justifyContent: "flex-end",
    },
    iconsWrapper: {
        backgroundColor: "white",
        top: '60%',
        position: 'absolute',
        width: "30%",
        left: '35%',
        borderRadius: 10,
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'lightgray',
        alignItems: "center",
        shadowOpacity: 1,
        flexDirection: "row",
        justifyContent: "center",
        elevation: 5, height: 70
    },
    detailsWrapper: {
        alignItems: "center",
        justifyContent: "space-between",

    },

    boxContainer: {
        margin: 2,
        height: "35%",
        paddingTop: 40,
        paddingLeft: 10,
        shadowColor: "gray",
        alignItems: "flex-start"
    },
    title: {
        fontWeight: "bold",
        paddingVertical: 5,
        fontSize: 18,
        color: "white"
    },
    image: {
        width: 320,
        height: 300,
        margin: 20,
        paddingTop: 0,
    },
    subtitle: {
        fontWeight: "bold",
        padding: 20,
        paddingTop: 0,
        color: "white"
    },
});
