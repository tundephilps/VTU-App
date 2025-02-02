import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const Investment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Feather name="lock" size={98} color="#20409a" />
        <Text style={styles.title}>Coming Soon</Text>
        <Text style={styles.description}>
          We are trying to make this feature available as soon as possible. Use
          our available cool features for now.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    maxWidth: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#20409a",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
    lineHeight: 24,
  },
});

export default Investment;
