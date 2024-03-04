import { Switch, Text, View} from "react-native";
import {IconButton} from "react-native-paper";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {changeTheme} from "../../store/slices/Book";
import style from "./style";


const SettingsItem = ({props}) => {
    const dispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
         isEnabled && dispatch(changeTheme("dark"));
        !isEnabled && dispatch(changeTheme("light"));
    }, [isEnabled])

    return (
        <View style={style.settingsItemContainer}>
            <View style={style.nameContainer}>
                <IconButton icon={props.iconName}/>
                <Text>{props.name}</Text>
            </View>
            <Text style={style.valueText}>{props.value}</Text>
            {props.appearance === true && <Switch
                trackColor={{false: "black", true: "#f4f3f4"}}
                thumbColor={isEnabled ? "black" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />}
        </View>
    )
}
export default SettingsItem;


