import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";

import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View>
      <Text>BlogIT</Text>
      <CustomButton
        title="Register"
        handlePress={() => {
          router.push("/sign-in");
        }}
      />
      <CustomButton
        title={"BLOGS"}
        handlePress={() => router.push("all-blogs")}
      />
      <StatusBar backgroundColor="#000"></StatusBar>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
