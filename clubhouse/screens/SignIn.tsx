import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Loading } from "./Loading";
import { Profile } from "./Profile";
import { useDimensions } from "@react-native-community/hooks";
import { images } from "../styleguide";

export default function SigninScreen() {
  let { height, width } = useDimensions().window;
  const [loading, setLoading] = useState(false);

  function fakeLoading() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }

  // return <Activity />;
  return (
    <Profile
      user={{
        firstName: "Scarlett",
        lastName: "Zemlak",
        username: "Dereck_Klocko2",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/mhudobivnik/128.jpg",
        followers: 109,
        following: 169,
        bio:
          "Nostrum dolorum aut fugit recusandae sint. Dignissimos earum dolores omnis et ex voluptas. Omnis et odit ea harum repudiandae quasi reiciendis. Et saepe ipsa repellendus dolores consequatur quas.",
      }}
    />
  );

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
