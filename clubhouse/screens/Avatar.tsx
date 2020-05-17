import React, { useCallback } from "react";
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";
import { useActionSheet } from "@expo/react-native-action-sheet";
import * as ImagePicker from "expo-image-picker";

import { colors } from "../styleguide";
import { Button } from "../components/Button";
import { NavigationBar } from "../components/NavigationBar";
import { StatusBar } from "../components/StatusBar";

type Props = {
  navigation: any;
  route: {
    params: {
      user: { username: string; avatar: string };
    };
  };
};

// Use BorderlessButton on iOS so it behaves better in modal
// @ts-ignore
const TouchableComponent = Platform.select({
  ios: BorderlessButton,
  default: TouchableOpacity,
});

export function Avatar({ navigation, route }: Props) {
  const insets = useSafeArea();
  const { showActionSheetWithOptions } = useActionSheet();

  const onPressAvatar = useCallback(() => {
    showActionSheetWithOptions(
      {
        options: ["Pick from Library", "Take a Photo", "Cancel"],
        cancelButtonIndex: 2,
      },
      (selectedIndex) => {
        if (selectedIndex === 0) {
          launchImagePickerAsync();
        } else if (selectedIndex === 1) {
          launchCameraPickerAsync();
        }
      }
    );
  }, [showActionSheetWithOptions]);

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar title="Change your photo" isInsideModal={true} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.avatarButtonContainer}>
            <TouchableComponent activeOpacity={0.7} onPress={onPressAvatar}>
              <Image
                source={{ uri: route.params.user.avatar }}
                style={styles.avatar}
              />
            </TouchableComponent>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: insets.bottom || 30 }}>
        <Button
          color="blue"
          onPress={() => navigation.goBack()}
          style={styles.doneButton}
          label="Done"
        />
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

async function launchImagePickerAsync() {
  try {
    let { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== "granted") {
      alert(
        "Camera roll permissions are necessary to pick a new photo for your profile"
      );
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });
    if (!result.cancelled) {
      alert(`You picked ${result.uri}`);
    }
  } catch(e) {
    alert(e.message);
  }
}

async function launchCameraPickerAsync() {
  try {
    let { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      alert(
        "Camera permissions are necessary to take a new photo for your profile"
      );
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });
    if (!result.cancelled) {
      alert(`You picked ${result.uri}`);
    }
  } catch(e) {
    alert(e.message);
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Nunito_400Regular",
    fontSize: 26,
  },
  avatarButtonContainer: {
    width: 175,
    height: 175,
    borderRadius: 0.4 * 175,
    backgroundColor: Platform.select({
      ios: "#000",
      default: "#ccc",
    }),
  },
  avatar: {
    width: 175,
    height: 175,
    borderRadius: 0.4 * 175,
  },
  doneButton: {
    alignSelf: "center",
    width: 230,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 30,
  },
});
