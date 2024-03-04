import {SafeAreaView, TouchableOpacity} from "react-native";
import {IconButton} from "react-native-paper";
import WebView from "react-native-webview";
import React from "react";

const BookWebView = ({url,onClose}) => {
    return  <SafeAreaView style={{ flex: 1,height:'100%',width:"100%" }}>
        <TouchableOpacity style={{ alignItems: "flex-end" }}>
            <IconButton icon={"close"} onPress={onClose}/>
        </TouchableOpacity>
        <WebView style={{ flex: 1 }} startInLoadingState={false} source={{ uri: url }} />
    </SafeAreaView>
}

export default BookWebView;