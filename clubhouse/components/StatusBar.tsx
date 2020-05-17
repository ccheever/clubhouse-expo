import * as React from 'react';
import { Platform, StatusBar as BaseStatusBar } from "react-native";

type Props = {
  style: "inverted" | "default";
};

export function StatusBar(props: Props) {
  if (Platform.OS === "android") {
    return null;
  }

  const barStyle =
    props.style === "inverted" ? "light-content" : "dark-content";

  return <BaseStatusBar barStyle={barStyle} animated={true} />;
}
