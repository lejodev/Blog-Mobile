import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import FormField from "../../components/navigation/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { createUser } from "../../lib/Strapi";

const SignIn = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  async function handleSubmit() {
    console.log("THIS IS THA FORM", form);
    const user = await createUser(form);
    console.log(user);
  }
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
            handleChangeText={(e) => {
              setForm({ ...form, username: e });
            }}
          />
          <FormField
            title={"Email"}
            placeholder="Type here your username"
            otherStyles="mt-10"
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
          />
          <FormField
            title={"Password"}
            placeholder="Type here your password"
            otherStyles="mt-10"
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
          />
          <CustomButton
            title="SignIn"
            containerStyles="mt-7"
            handlePress={handleSubmit}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account
            </Text>
            <Link
              className="text-lg font-psemibold text-secondary-100"
              href="sign-in"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
