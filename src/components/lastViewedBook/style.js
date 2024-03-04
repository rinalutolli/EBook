import {StyleSheet} from "react-native";

export const style = (colors) => StyleSheet.create({
    bookWrapper: {
        alignItems: "center",
        width: "100%",
        display: "flex",
        shadowOffset: { width: 0, height: 10 },
        shadowColor: 'white',
        shadowOpacity: 0.25,
        elevation: 3,
        paddingBottom:30,
        backgroundColor:colors.screenBackground,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    titleContainer: {
        width: '40%',
        height: 200,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: 'space-around'
    },
    buttonWrapper: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10
    },
    closeButtonWrapper: {
        width: '10%',
        alignItems: "flex-start",
        height: '100%',
        paddingRight: 35
    }
});