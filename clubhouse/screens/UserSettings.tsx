import * as React from "react";
import { StatusBar, StyleSheet, View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";

import { colors } from "../styleguide";
import { NavigationBar } from "../components/NavigationBar";

// TODO: better types for navigation screens, if we care for this demo
export function UserSettings(props: {
  navigation: any;
  route: {
    params: {
      user: { username: string; avatar: string };
    };
  };
}) {
  const insets = useSafeArea();

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.titleText}>Change your photo</Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {/* TODO: probably need to handle no avatar also */}
          <Image
            source={{ uri: props.route.params.user.avatar }}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={{ marginBottom: insets.bottom || 10 }}>
        <RectButton
          style={styles.doneButton}
          onPress={() => props.navigation.goBack()}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </RectButton>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 26,
  },
  avatar: {
    width: 175,
    height: 175,
    borderRadius: 0.4 * 175,
  },
  doneButton: {
    alignSelf: "center",
    width: 230,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 30,
  },
  doneButtonText: {
    color: "#fff",
    fontFamily: "Nunito_600SemiBold",
    fontSize: 22,
  },
});
