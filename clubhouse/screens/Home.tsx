import React from "react";
import { View, StyleSheet, Text } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
