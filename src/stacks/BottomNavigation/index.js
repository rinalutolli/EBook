import {
  Favorites,
  Search,
  Home,
  LastViewedBooks,
  Settings,
} from "../../screens";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsModal from "../../components/DetailsModal";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {IconButton, useTheme} from "react-native-paper";
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { book } = useSelector((state) => state.books);
  const {colors} =  useTheme()
  const navigatorProps = {
    tabBarPosition: "bottom",
    backBehavior: "none",
    screenOptions: {
      headerTitleAlign: 'center',
      tabBarActiveTintColor:colors.iconColor,

      headerStyle: {
        backgroundColor: colors.screenBackground,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1

      },
      headerTitleStyle: {
        fontWeight: '600',
        color: colors.myOwnColor,
        fontSize: 22,
      },
      tabBarStyle: {
        backgroundColor: colors.screenBackground,
        padding: 10,

      },
  }}
  const _screenIcon = (name, secondName) => {
    return {
      tabBarIcon: ({ focused, color }) => (
        <IconButton icon={focused ? name : secondName} size={30} iconColor={colors.iconColor}/>
      ),
    };
  };

  return (
    <NavigationContainer>
      <DetailsModal />
      <Tab.Navigator {...navigatorProps}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{..._screenIcon("home", "home-outline"),title:"Ebook"}}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{..._screenIcon("magnify", "magnify"),headerShown:false}}
        />
        <Tab.Screen
          name="LastViewedBooks"
          component={LastViewedBooks}
          options={_screenIcon(
            "book-open-page-variant-outline",
            "book-open-blank-variant"
          )}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={_screenIcon("cards-heart", "cards-heart-outline")}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={_screenIcon("cog", "cog-outline")}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
