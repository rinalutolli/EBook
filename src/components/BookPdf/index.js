import {Platform, SafeAreaView, TouchableOpacity} from "react-native";
import {IconButton} from "react-native-paper";
import WebView from "react-native-webview";
import React from "react";
import BookWebView from "../BookWebView";

const BookPdf = ({onClose}) => {
    const pdfViewer = () => {
        const platform = Platform.OS;
        const pdfLink = "https://itbook.store/files/9781617294136/chapter2.pdf";

        if (platform === "android") {
            return "http://docs.google.com/gview?embedded=true&url=" + `${pdfLink}`
        } else {
            return pdfLink;
        }
    }
        return <BookWebView onClose={onClose} url={pdfViewer()}/>

}

export default BookPdf;