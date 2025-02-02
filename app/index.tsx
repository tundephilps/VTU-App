import Login from "@/screens/Login";
import { Platform, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "@/screens/SplashScreen";
import Homepage from "@/screens/Homepage";
import Services from "@/screens/Services";
import Support from "@/screens/Support";
import Investment from "@/screens/Investment";
import Profile from "@/screens/Profile";
import { Feather } from "@expo/vector-icons";
import ForgotPassword from "@/screens/ForgotPassword";
import Signup1 from "@/screens/Signup1";
import SignupScreen2 from "@/screens/SignUp2";
import ConfirmPassword from "@/screens/ConfirmPassword";

// Importing icons
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

type RootStackParamList = {
  SplashScreen: undefined;
  Signup1: undefined;
  Signup2: undefined;
  Support: undefined;
  Services: undefined;
  Profile: undefined;
  Login: undefined;
  Investment: undefined;
  Homepage: undefined;
  ForgotPassword: undefined;
  ConfirmPassword: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let IconComponent;
        let iconName;

        // Assign icons based on the route name
        if (route.name === "Homepage") {
          IconComponent = FontAwesome;
          iconName = "home";
        } else if (route.name === "Services") {
          IconComponent = Ionicons;
          iconName = "layers";
        } else if (route.name === "Support") {
          IconComponent = MaterialCommunityIcons;
          iconName = "headset";
        } else if (route.name === "Investment") {
          IconComponent = MaterialIcons;
          iconName = "insert-chart";
        } else if (route.name === "Profile") {
          IconComponent = FontAwesome5;
          iconName = "user-alt";
        }

        // Render the icon component
        return (
          <IconComponent
            name={iconName}
            size={24}
            color={focused ? "#20409a" : "gray"}
          />
        );
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: "700",
      },
      tabBarStyle: {
        height: Platform.OS === "ios" ? 89 : 55,
      },
      tabBarActiveTintColor: "#20409a",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Homepage" component={Homepage} />
    <Tab.Screen name="Services" component={Services} />
    <Tab.Screen name="Support" component={Support} />
    <Tab.Screen name="Investment" component={Investment} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup1" component={Signup1} />
      <Stack.Screen name="Signup2" component={SignupScreen2} />
      <Stack.Screen name="Homepage" component={TabNavigator} />
    </Stack.Navigator>
  );
}
