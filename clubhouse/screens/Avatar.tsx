import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { colors } from "../styleguide";
import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { StatusBar } from "../components/StatusBar";

type Props = {
  navigation: any;
  route: {
    params: {
      user: { username: string; avatar: string };
    };
  };
};

export function Avatar({ navigation, route }: Props) {
  const insets = useSafeArea();

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar title="Change your photo" isInsideModal={true} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={{ uri: route.params.user.avatar }}
            style={styles.avatar}
          />
        </View>
      </View>
      <View style={{ marginBottom: insets.bottom || 30 }}>
        <Button
          color="blue"
          onPress={() => navigation.goBack()}
          style={styles.doneButton}
          label="Done"
        />
      </View>
      <StatusBar style="inverted" />
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
});
