import { StatusBar } from "expo-status-bar";
import { BottomNavigation } from "./src/stacks";
import {Provider, useSelector} from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { store } from "./src/store/store";
import {useColorScheme} from "react-native";
import PageWrapper from "./src/components/PageWrapper";

export default function App() {

  return (
    <>
      <Provider store={store}>
        <PageWrapper>
        <BottomNavigation />
        <StatusBar />
        </PageWrapper>
      </Provider>
    </>
  );
}
