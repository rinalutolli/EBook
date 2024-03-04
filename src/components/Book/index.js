import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import { useTheme} from "react-native-paper";
import React from "react";
import {style} from "./style";

const Book = ({item,onPress}) => {
    const {colors} = useTheme();
    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width / 2 -20;

    return<TouchableOpacity style={style(colors).bookWrapper} onPress={onPress}>
        <Image source={{uri: item.image}} style={{width: imageWidth, height:imageWidth,borderTopRightRadius: imageWidth/ 2,borderBottomRightRadius:imageWidth/2}} />
        <View style={style(colors).bookBackground}>
        </View>
    </TouchableOpacity>

}

export default Book;
