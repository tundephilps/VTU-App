import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "@/components/Settings/Settings";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#20409a" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Personal Details</Text>

        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="#20409a"
          style={{ opacity: 0 }}
        />
      </View>

      {/* Profile Info */}
      <ScrollView style={styles.profileContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.title}>Hello, Abiso!</Text>

            <View style={styles.accountType}>
              <Text style={styles.accountTypeText}>Account Type: Vendor</Text>
            </View>
          </View>

          <FontAwesome6 name="user-circle" size={44} color="#20409a" />
        </View>

        <TouchableOpacity style={styles.inviteButton}>
          <Ionicons name="person-add" size={20} color="white" />
          <Text style={styles.inviteText}>Invite</Text>
        </TouchableOpacity>

        {/* Personal Data Section */}

        <View style={styles.personalDataContainer}>
          <Text style={styles.sectionTitle}>Personal data</Text>

          <View style={styles.dataCard}>
            {/* Full Name */}
            <View style={styles.dataRow}>
              <Ionicons name="person-outline" size={24} color="#4169E1" />
              <View style={styles.dataInfo}>
                <Text style={styles.dataValue}>Abiso Khalifa</Text>
                <Text style={styles.dataLabel}>Full name</Text>
              </View>
            </View>

            {/* Phone Number */}
            <View style={styles.dataRow}>
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                color="#4169E1"
              />
              <View style={styles.dataInfo}>
                <Text style={styles.dataValue}>+23480****8006</Text>
                <Text style={styles.dataLabel}>Phone number</Text>
              </View>
            </View>

            {/* Email */}
            <View style={styles.dataRow}>
              <MaterialIcons name="mail-outline" size={24} color="#4169E1" />
              <View style={styles.dataInfo}>
                <Text style={styles.dataValue}>abisokhalifa@gmail.com</Text>
                <Text style={styles.dataLabel}>E-mail</Text>
              </View>
            </View>

            {/* State */}
            <View style={styles.dataRow}>
              <Ionicons name="location-outline" size={24} color="#4169E1" />
              <View style={styles.dataInfo}>
                <Text style={styles.dataValue}>Borno</Text>
                <Text style={styles.dataLabel}>State</Text>
              </View>
            </View>
          </View>
        </View>

        <SettingsScreen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 16,
  },
  profileContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  accountType: {
    backgroundColor: "#F5F5F5",
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  accountTypeText: {
    color: "#666",
  },
  inviteButton: {
    backgroundColor: "#20409a",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 24,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  inviteText: {
    color: "white",
    marginLeft: 8,
    fontWeight: "600",
  },
  personalDataContainer: {
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  dataCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dataRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dataInfo: {
    marginLeft: 12,
  },
  dataValue: {
    fontSize: 16,
    fontWeight: "500",
  },
  dataLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
});

export default ProfileScreen;
