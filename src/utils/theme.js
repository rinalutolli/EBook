import {DefaultTheme} from "react-native-paper";

const lightTheme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
        screenBackground:'white',
        myOwnColor: 'black',
        iconColor: 'black',
        bookWrapper: 'white',
        shadowColor: '#132638'
    }
};
const darkTheme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
        screenBackground:'#132638',
        myOwnColor: 'white',
        iconColor: 'white',
        bookWrapper: '#132638',
        shadowColor: '#fff'
    }
}

export {lightTheme,darkTheme};