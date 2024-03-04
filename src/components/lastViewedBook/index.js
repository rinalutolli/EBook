import React from "react";
import {style} from "./style";
import {IconButton, useTheme} from "react-native-paper";
import {Image, Text, TouchableOpacity, View} from "react-native";

const lastViewedBook = ({item, onClose,onUrlPress}) => {
    const {colors} = useTheme();
    return <TouchableOpacity style={style(colors).bookWrapper}>
        <Image source={{uri: item.image}} style={{width: '50%', height: 300}}/>
        <View style={style(colors).titleContainer}>
            <Text style={{color: colors.myOwnColor}}>{item.title}</Text>
            <Text style={{color: colors.myOwnColor}}>{item.subtitle}</Text>
            <TouchableOpacity style={style(colors).buttonWrapper} onPress={onUrlPress}>
                <Text style={{color: 'white'}}>See Online</Text>
            </TouchableOpacity>
        </View>
        <View style={{width: '10%', alignItems: "flex-start", height: '100%', paddingRight: 35}}>
            <IconButton icon={"close"} size={20} iconColor={colors.myOwnColor} onPress={onClose}/>
        </View>
    </TouchableOpacity>
}

export default lastViewedBook;

