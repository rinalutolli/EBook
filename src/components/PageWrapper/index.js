import {useSelector} from "react-redux";
import {Provider as PaperProvider} from "react-native-paper";
import {lightTheme,darkTheme} from "../../utils/theme";

const PageWrapper = (props) => {
    const {theme} = useSelector(state => state.books)


    return <PaperProvider theme={ theme === "light" ? lightTheme : darkTheme}>
        {props.children}
    </PaperProvider>
}

export default PageWrapper;