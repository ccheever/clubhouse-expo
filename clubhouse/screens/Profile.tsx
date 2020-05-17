import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { NavigationBar } from "../components/NavigationBar";
import { colors, icons } from "../styleguide";

type User = {
  firstName: string;
  lastName: string;
  avatar: string;
  followers: number;
  following: number;
  bio: string;
  username: string;
};

type Props = {
  user: User;
  navigation: any;
};

const DEFAULT_USER = {
  firstName: "Scarlett",
  lastName: "Zemlak",
  username: "Dereck_Klocko2",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mhudobivnik/128.jpg",
  followers: 109,
  following: 169,
  bio:
    "Nostrum dolorum aut fugit recusandae sint. Dignissimos earum dolores omnis et ex voluptas. Omnis et odit ea harum repudiandae quasi reiciendis. Et saepe ipsa repellendus dolores consequatur quas.",
};

export function Profile(props: Props) {
  const user = props.user ?? DEFAULT_USER;
  const {
    avatar,
    firstName,
    lastName,
    followers,
    following,
    bio,
    username,
  } = user;

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar
        title={`@${username}`}
        renderRight={() => <SettingsButton />}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.userInfoContainer}>
          <View style={styles.avatarButtonContainer}>
            <BorderlessButton
              activeOpacity={0.7}
              onPress={() => props.navigation.navigate("Avatar", { user })}
            >
              <Image source={{ uri: avatar }} style={styles.avatar} />
            </BorderlessButton>
          </View>
          <View style={styles.statCotainer}>
            <Text style={styles.statText}>{followers}</Text>
            <Text style={styles.statText}>followers</Text>
          </View>
          <View style={styles.statCotainer}>
            <Text style={styles.statText}>{following}</Text>
            <Text style={styles.statText}>following</Text>
          </View>
        </View>
        <Text style={styles.username}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.bio}>{bio}</Text>
      </ScrollView>
    </View>
  );
}

function SettingsButton() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        /* todo show action sheet */
      }}
      hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
    >
      <Image source={icons.gear} style={styles.settingsButtonIcon} />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    padding: 16,
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: "row",
  },
  avatarButtonContainer: {
    height: 70,
    width: 70,
    borderRadius: 28,
    backgroundColor: "black",
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 28,
  },
  statCotainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  statText: {
    color: colors.black,
    fontFamily: "Nunito_400Regular",
    fontSize: 19,
  },
  username: {
    color: colors.black,
    fontFamily: "Nunito_700Bold",
    fontSize: 19,
    marginTop: 20,
  },
  bio: {
    color: colors.black,
    fontFamily: "Nunito_400Regular",
    fontSize: 17,
    marginTop: 4,
    lineHeight: 24,
  },
  settingsButtonIcon: {
    width: 25,
    height: 25,
  },
});
