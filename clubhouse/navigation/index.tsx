import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from "react-native-screens";

import { colors } from "../styleguide";
import { Home } from "../screens/Home";
import { Activity } from "../screens/Activity";
import { Profile } from "../screens/Profile";
import { SignIn } from "../screens/SignIn";
import { Avatar } from "../screens/Avatar";

enableScreens();

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.beige },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ stackAnimation: "fade" }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen
        name="Avatar"
        component={Avatar}
        options={{ stackPresentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
