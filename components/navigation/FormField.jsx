import { View, Text, TextInput, Image } from "react-native";
import { useState } from "react";
import { Touchable } from "react-native";
import { icons, images } from "../../constants";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-100 items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold"
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
