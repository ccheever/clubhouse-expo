import React, { ReactNode, useEffect, useState, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: ReactNode;
  isLoading: boolean;
};

export function Loading(props: Props) {
  const { children, isLoading } = props;
  const [integer, setInteger] = useState(0);
  const visibility = useRef(new Animated.Value(0));

  useEffect(
    function setLoadingInterval() {
      let interval: any;

      if (isLoading) {
        Animated.timing(visibility.current, {
          toValue: 0.5,
          duration: 200,
        }).start();
        interval = setInterval(() => {
          if (integer < 2) {
            setInteger((integer) => integer + 1);
          } else {
            setInteger(0);
          }
        }, 300);
      } else {
        Animated.timing(visibility.current, {
          toValue: 0,
          duration: 200,
        }).start();
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    },
    [integer, isLoading]
  );

  return (
    <View style={{ flex: 1 }}>
      {children}
      <Animated.View
        style={[styles.container, { opacity: visibility.current }]}
        pointerEvents={isLoading ? "auto" : "none"}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.99)", "rgba(0,0,0,0.75)", "rgba(0,0,0,0.99)"]}
          style={styles.container}
        />
        <View style={styles.container}>
          <View style={[styles.circle, integer === 0 && styles.active]} />
          <View style={[styles.circle, integer === 1 && styles.active]} />
          <View style={[styles.circle, integer === 2 && styles.active]} />
        </View>
      </Animated.View>
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
