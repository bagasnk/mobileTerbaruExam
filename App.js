import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./src/navigators/AuthStack";
import * as SplashScreen from "expo-splash-screen";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducers from "./src/redux/reducers";
import AsyncStorage from "@react-native-community/async-storage";
import RootNavigator from "./src/navigators/RootNavigator";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// SplashScreen.hideAsync();

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <StatusBar style="light" /> */}
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});