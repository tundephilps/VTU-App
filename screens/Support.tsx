import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Support = () => {
  const navigation = useNavigation();
  const supportOptions = [
    { id: 1, title: "WhatsApp\nSupport", icon: "whatsapp" },
    { id: 2, title: "WhatsApp\nCommunity", icon: "whatsapp" },
    { id: 3, title: "Direct\nPhone Call", icon: "phone" },
  ];

  const socialNetworks = [
    { id: 1, icon: "facebook", color: "#4267B2" },
    { id: 2, icon: "instagram", color: "#E1306C" },
    { id: 3, icon: "twitter", color: "#1DA1F2" },
    { id: 4, icon: "youtube-play", color: "#FF0000" },
    { id: 5, icon: "globe", color: "#666666" },
    { id: 6, icon: "google-plus", color: "#DB4437" },
  ];

  const handleSupportPress = () => {
    // Handle support option press
    console.log(``);
  };

  const handleSocialPress = () => {
    // Handle social network press
    console.log(``);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#20409a" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Support</Text>

        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="#20409a"
          style={{ opacity: 0 }}
        />
      </View>
      <Text style={styles.helpTitle}>Do You Need Help?</Text>

      {/* Support Options */}
      <View style={styles.supportContainer}>
        {supportOptions.map((option) => (
          <TouchableOpacity key={option.id} style={styles.supportButton}>
            <FontAwesome name={option.icon} size={24} color="#4267B2" />
            <Text style={styles.supportText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Social Networks Section */}
      <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>Our Social Networks</Text>
        <Text style={styles.socialSubtitle}>You can follow us here</Text>

        <View style={styles.socialIconsContainer}>
          {socialNetworks.map((network) => (
            <TouchableOpacity key={network.id} style={styles.socialIcon}>
              <FontAwesome
                name={network.icon}
                size={20}
                color={network.color}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1f2f5",
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    backgroundColor: "#F1f2f5",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 16,
  },
  helpTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    padding: 20,
  },
  supportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,

    paddingHorizontal: 20,
  },
  supportButton: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "30%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  supportText: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 12,
    color: "#333",
  },
  socialSection: {
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  socialSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 15,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Support;
