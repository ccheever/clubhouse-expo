import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from "react-native-screens";

import { colors } from "../styleguide";
import { Home } from "../screens/Home";
import { Loading } from "../screens/Loading";
import { Rooms } from "../screens/Rooms";
import { Activity } from "../screens/Activity";
import { Profile } from "../screens/Profile";
import { UserSettings } from "../screens/UserSettings";

enableScreens();

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.beige },
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="UserSettings"
        component={UserSettings}
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
