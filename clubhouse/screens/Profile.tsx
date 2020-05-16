import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { colors } from "../styleguide";

type Props = {
  user: {
    firstName: string;
    lastName: string;
    avatar: string;
    followers: number;
    following: number;
    bio: string;
    username: string;
  };
};

export function Profile(props: Props) {
  const { avatar, firstName, lastName, followers, following, bio } = props.user;

  return (
    <ScrollView style={styles.container}>
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
});
