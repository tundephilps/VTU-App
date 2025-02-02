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

import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Homepage: undefined;
  Signup1: undefined;
  ForgotPassword: undefined;
  // Add other screens here as needed
};

type NavigationProps = NavigationProp<RootStackParamList>;

const Login = () => {
  const [selectedTab, setSelectedTab] = useState("Login");

  const navigation = useNavigation<NavigationProps>();

  const handleLogin = async () => {
    navigation.navigate("Homepage");
  };

  const handleSignup = async () => {
    navigation.navigate("Signup1");
  };
  const handleForgotPassword = async () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "SignUp" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("SignUp")}
          onPressIn={handleSignup}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "SignUp" && styles.activeTabText,
            ]}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "Login" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Login")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Login" && styles.activeTabText,
            ]}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>

      {/* Profile Icon */}
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/images/Frame2.png")} // Replace with the path to your logo
        />
      </View>

      {/* Form Inputs */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="screen-smartphone" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="Phone Number" />
        </View>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Feather name="log-in" size={24} color="white" />
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
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

export default Login;
