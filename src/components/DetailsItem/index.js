import {StyleSheet, Text} from "react-native";
import React from "react";
import {useTheme} from "react-native-paper";

const DetailsItem =  ({name,value}) => {
    const {colors} = useTheme()
    return <Text style={style(colors).title}><Text style={style(colors).label}>{name}</Text>: {value}</Text>
}
const style = (colors) => StyleSheet.create({
    title: {
        paddingBottom: 10,
        lineHeight: 20,
        color: colors.myOwnColor
    },
    label:{
        fontWeight: "bold"
    }
})
export default DetailsItem;
