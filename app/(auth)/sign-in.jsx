import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import FormField from "../../components/navigation/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className={"bg-primary h-full"}>
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl text-white text-semibold font-psemibold">
            SignIn
          </Text>
          <FormField
            title={"Username"}
            placeholder="Type here your username"
            otherStyles="mt-10"
          />
          <FormField
            title={"Password"}
            placeholder="Type here your password"
            otherStyles="mt-10"
          />
          <CustomButton title="SignUp" containerStyles="mt-7" />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don-t have an acoount?
            </Text>
            <Link
              className="text-lg font-psemibold text-secondary-100"
              href="sign-up"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
