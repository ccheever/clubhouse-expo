import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { colors } from "../styleguide";

type Props = {
  onPress: any;
  label: string;
  style?: any;
  labelStyle?: any;
  color: keyof typeof colors;
};

export function Button(props: Props) {
  return (
    <RectButton
      style={[
        styles.button,
        { backgroundColor: props.color ? colors[props.color] : colors.blue },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, props.labelStyle]}>{props.label}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Nunito_600SemiBold",
    fontSize: 22,
  },
});
