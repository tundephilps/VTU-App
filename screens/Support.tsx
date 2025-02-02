import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Support = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Support Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Align items to the center
    justifyContent: "center", // Center the content vertically
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Support;
