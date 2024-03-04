import {View} from "react-native";
import SettingsItem from "../../components/SettingsItem";
import {useTheme} from "react-native-paper";

const Settings = () => {
    const { colors } = useTheme()

    return (
        <View style={{padding: 20,backgroundColor:colors.screenBackground,height:"100%"}}>
            <SettingsItem props={{iconName:"web",name:"Language",value:"English"}}/>
            <SettingsItem  props={{iconName:"theme-light-dark",name:"Apperance",appearance:true}}/>
        </View>
    )
}

export default Settings;