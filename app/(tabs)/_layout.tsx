import { StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#789",
        tabBarInactiveTintColor: "#234",
        tabBarStyle: {
          backgroundColor: "#cdcde0"
        }
      }}
    ></Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
