import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    settingsItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    valueText: {
        color: "red",
        fontWeight: "bold",
        alignItems: "flex-start"
    }
});

export default style;