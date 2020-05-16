import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";

import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import { useDimensions } from "@react-native-community/hooks";
import { AppLoading } from "expo";
import { Loading } from "./screens/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <SigninScreen />;
}

function SigninScreen() {
  let { height, width } = useDimensions().window;
  const [loading, setLoading] = useState(false);

  function fakeLoading() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <Loading isLoading={loading}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#F1EFE5",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 60,
        }}
      >
        <Image
          source={require("./assets/onboarding_start.png")}
          style={{
            height: 300,
            width: 300,
            marginBottom: 240,
          }}
        />

        <TouchableOpacity onPress={() => fakeLoading()} style={{ zIndex: 100 }}>
          <View
            style={{
              height: 60,
              width: 240,
              borderRadius: 30,
              backgroundColor: "#5C75A8",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito_600SemiBold",
                fontSize: 20,
                color: "white",
              }}
            >
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Loading>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
