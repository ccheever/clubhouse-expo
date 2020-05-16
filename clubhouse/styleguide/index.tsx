import React from "react";
import { Circle, Path, Svg } from "react-native-svg";

export const colors = {
  beige: "#F1EFE5",
  blue: "#5C75A8",
  white: "#FFFFFF",
  green: "#56AC68",
  black: "#343434",
  gray: "#73706B",
};

export const icons = {
  backButtonBlack: require("../assets/images/button_back_black.png"),
  backButtonWhite: require("../assets/images/button_back_white.png"),
  gear: require("../assets/images/button_settings_black.png"),
};

export const images = {
  onboardingStart: require("../assets/images/onboarding_start.png"),
  notificationsOn: require("../assets/images/button_notifications_on.png"),
};

export const AddUserIcon = () => (
  <Svg width={32} height={25} viewBox="0 0 32 25" fill="none">
    <Path
      d="M27 2v8M23 6h8M24 24c0-6.075-5.149-11-11.5-11S1 17.925 1 24"
      stroke={colors.black}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Circle cx="12.5" cy="6.5" r="5.5" stroke={colors.black} strokeWidth="2" />
  </Svg>
);
