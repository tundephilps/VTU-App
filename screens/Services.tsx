import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Service = () => {
  const navigation = useNavigation();

  const services = [
    { id: 1, name: "Buy Airtime", icon: "signal", type: "FontAwesome5" },
    { id: 2, name: "Buy Data", icon: "wifi", type: "FontAwesome5" },
    { id: 3, name: "Electric Bill Payment", icon: "flash", type: "Ionicons" },
    { id: 4, name: "TV Subscriptions", icon: "tv", type: "FontAwesome5" },
    {
      id: 5,
      name: "Buy Exams PIN",
      icon: "school-outline",
      type: "MaterialCommunityIcons",
    },
    {
      id: 6,
      name: "Airtime to Cash",
      icon: "exchange-alt",
      type: "FontAwesome5",
    },
    {
      id: 7,
      name: "Internet Subscription",
      icon: "globe",
      type: "FontAwesome5",
    },
  ];

  const renderIcon = (service) => {
    switch (service.type) {
      case "FontAwesome5":
        return <FontAwesome5 name={service.icon} size={20} color="#4169E1" />;
      case "Ionicons":
        return <Ionicons name={service.icon} size={20} color="#4169E1" />;

      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name="school-outline"
            size={20}
            color="#4169E1"
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#20409a" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Services</Text>

        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="#20409a"
          style={{ opacity: 0 }}
        />
      </View>

      {/* Services List */}
      <View style={styles.servicesList}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceItem}
            onPress={() => {
              /* Handle service selection */
            }}
          >
            <View style={styles.iconContainer}>{renderIcon(service)}</View>
            <Text style={styles.serviceName}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1f2f5",
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
  servicesList: {
    padding: 16,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#E8EEFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#20409a",
  },
  serviceName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});

export default Service;
