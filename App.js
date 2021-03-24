import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

const navigator = createStackNavigator({
  Main,
  Chat,
});

export default navigator;
