import React from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import Colors from "../constants/Colors";
import { Icon } from "native-base";

const { width } = Dimensions.get("screen");

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        style: {
          backgroundColor: "#20242F",
          borderTopWidth: 0,
          paddingTop: 4,
          alignSelf: "center",
          borderRadius: 18,
          position: "absolute",
          bottom: 20,
          left: 30,
          right: 30,
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type="Entypo" name="home" style={{ color, fontSize: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              type="FontAwesome5"
              name="user"
              style={{ color, fontSize: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};