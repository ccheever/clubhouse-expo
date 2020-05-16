import * as React from "react";
import {
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { colors, icons } from "../styleguide";
import { useNavigation } from "@react-navigation/core";

const NAVIGATION_BAR_HEIGHT = 50;

type Props = {
  isInsideModal?: boolean;
  backButtonText?: string;
  renderLeft?: () => any;
  renderRight?: () => any;
  title?: string;
};

function BackButton(props: { label?: string }) {
  const navigation = useNavigation();

  // maybe?
  // if (!navigation.canGoBack && !props.onPressBackButton) {
  //   return;
  // }

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.canGoBack() && navigation.goBack()}
      hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
    >
      <Image source={icons.backButtonBlack} style={styles.backButtonIcon} />
    </TouchableWithoutFeedback>
  );
}

export function NavigationBar(props: Props) {
  const insets = useSafeArea();

  return (
    <View
      style={[
        styles.container,
        !props.isInsideModal && { marginTop: insets.top },
      ]}
    >
      <View style={styles.left}>
        {props.renderLeft ? (
          props.renderLeft()
        ) : (
          <BackButton label={props.backButtonText} />
        )}
      </View>

      <View style={styles.center}>
        <Text style={styles.title}>{props.title?.toUpperCase()}</Text>
      </View>

      <View style={styles.right}>{props.renderRight?.()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: NAVIGATION_BAR_HEIGHT,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    paddingLeft: 15,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Nunito_700Bold",
    color: colors.black,
    fontSize: 18,
  },
  right: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    paddingRight: 15,
    justifyContent: "center",
  },
  backButtonIcon: {
    width: 28,
    height: 28,
  },
});
