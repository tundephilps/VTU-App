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
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Homepage: undefined;
  Signup2: undefined;
  // Add other screens here as needed
};

type NavigationProps = NavigationProp<RootStackParamList>;

const Signup1 = () => {
  const [selectedTab, setSelectedTab] = useState("SignUp");

  const navigation = useNavigation<NavigationProps>();

  const handleLogin = async () => {
    navigation.navigate("Login");
  };

  const handleSignup = async () => {
    navigation.navigate("Signup2");
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
          onPressIn={() => setSelectedTab("Login")}
          onPress={handleLogin}
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
          source={require("../assets/images/Frame.png")} // Replace with the path to your logo
        />
      </View>

      {/* Form Inputs */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="#20409a" />
          <TextInput style={styles.input} placeholder="First Name" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="#20409a" />
          <TextInput style={styles.input} placeholder="Last Name" />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="screen-smartphone" size={20} color="#20409a" />
          <TextInput style={styles.input} placeholder="Phone Number" />
        </View>
        <View style={styles.inputContainer}>
          <Octicons name="mail" size={20} color="#20409a" />
          <TextInput style={styles.input} placeholder="Email Address" />
        </View>
        <View style={styles.inputContainer}>
          <EvilIcons name="location" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="State" />
        </View>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <MaterialIcons
          name="keyboard-double-arrow-right"
          size={24}
          color="white"
        />
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f5",
    paddingHorizontal: 20,
    justifyContent: "center",
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

    alignItems: "center", // Align items to the center
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Signup1;
