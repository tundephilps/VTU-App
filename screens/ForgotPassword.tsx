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
  ConfirmPassword: undefined;
  // Add other screens here as needed
};

type NavigationProps = NavigationProp<RootStackParamList>;

const ForgotPassword = () => {
  const [selectedTab, setSelectedTab] = useState("Login");

  const navigation = useNavigation<NavigationProps>();

  const handleConfirmPassword = async () => {
    navigation.navigate("ConfirmPassword");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/images/Frame3.png")} // Replace with the path to your logo
        />
      </View>

      <View style={styles.formContainer}>
        <View style={{ position: "relative" }}>
          <View style={styles.inputContainer}>
            <Octicons name="mail" size={20} color="#20409a" />
            <TextInput style={styles.input} placeholder="Email Address" />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#20409a",
              paddingHorizontal: 4,
              paddingVertical: 8,
              borderRadius: 8,
              position: "absolute",
              right: 12,
              top: 9,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", padding: 4 }}>Send </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#20409a" />
          <TextInput style={styles.input} placeholder="Code" />
        </View>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button} onPress={handleConfirmPassword}>
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

export default ForgotPassword;
