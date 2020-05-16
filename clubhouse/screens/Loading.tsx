import React, { ReactNode, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: ReactNode;
  isLoading: boolean;
};

export function Loading(props: Props) {
  const { children, isLoading } = props;
  const [integer, setInteger] = useState(0);
  useEffect(
    function setLoadingInterval() {
      let interval: any;

      if (isLoading) {
        interval = setInterval(() => {
          if (integer < 2) {
            setInteger((integer) => integer + 1);
          } else {
            setInteger(0);
          }
        }, 300);
      } else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    },
    [integer, isLoading]
  );
  return (
    <View style={{ flex: 1 }}>
      {children}
      {isLoading && (
        <>
          <LinearGradient
            colors={["rgba(0,0,0,0.75)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.75)"]}
            style={styles.container}
          />
          <View style={styles.container}>
            <View style={[styles.circle, integer === 0 && styles.active]} />
            <View style={[styles.circle, integer === 1 && styles.active]} />
            <View style={[styles.circle, integer === 2 && styles.active]} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: "white",
    marginHorizontal: 4,
  },
  active: {
    backgroundColor: "black",
  },
});
