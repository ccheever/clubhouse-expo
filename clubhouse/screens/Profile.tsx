import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { NavigationBar } from "../components/NavigationBar";
import { useNavigation } from "@react-navigation/core";
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
        renderRight={() => <SettingsButton user={user} />}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.userInfoContainer}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
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

function SettingsButton({ user }: { user: User }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("UserSettings", { user })}
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
  avatar: {
    height: 80,
    width: 80,
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
    fontSize: 20,
  },
  username: {
    color: colors.black,
    fontFamily: "Nunito_700Bold",
    fontSize: 20,
    marginTop: 20,
  },
  bio: {
    color: colors.black,
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
    marginTop: 8,
  },
  settingsButtonIcon: {
    width: 28,
    height: 28,
  },
});
