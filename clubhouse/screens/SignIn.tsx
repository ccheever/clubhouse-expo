import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Loading } from "./Loading";
import { useDimensions } from "@react-native-community/hooks";
import { images } from "../styleguide";

export function SignIn({ navigation }: { navigation: any }) {
  const [loading, setLoading] = useState(false);

  function fakeLoading(onComplete: Function) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 600);
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
          source={images.onboardingStart}
          style={{
            height: 300,
            width: 300,
            marginBottom: 240,
          }}
        />

        <TouchableOpacity
          onPress={() => fakeLoading(() => navigation.replace("Home"))}
          style={{ zIndex: 100 }}
        >
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
