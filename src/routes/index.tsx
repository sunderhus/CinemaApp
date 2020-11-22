import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "purple",
          inactiveTintColor: "gray",
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={22} style={{ color: color }} />
            ),
          }}
        />
        <Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Feather name="star" size={22} style={{ color: color }} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
