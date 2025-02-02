import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import Toast from "react-native-toast-message";

import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  // Add other screens here as needed
};

type NavigationProps = NavigationProp<RootStackParamList>;

const ConfirmPassword = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleResetPassword = () => {
    // Show toast notification
    Toast.show({
      type: "success",
      text1: "Password Reset",
      text2: "Password reset successfully!",
    });

    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}

      {/* Profile Icon */}
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/images/Frame5.png")} // Replace with the path to your logo
        />
      </View>

      {/* Form Inputs */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="New Password" />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="Confirm Password" />
        </View>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Feather name="lock" size={24} color="#ffffff" />
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      {/* Toast Component */}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f5",
    padding: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#b3bdda",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#20409a",
  },
  activeTab: {
    backgroundColor: "#20409a",
  },
  tabText: {
    color: "#20409a",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#fff",
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#20409a",
    paddingVertical: 15,
    borderRadius: 50,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    gap: 6,
    alignItems: "center", // Align items to the center
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ConfirmPassword;
