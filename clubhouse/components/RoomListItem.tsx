import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { colors } from "../styleguide";

type Props = {
  users: {
    firstName: string;
    lastName: string;
    avatar: string;
  }[];
};

export function RoomListItem(props: Props) {
  const { users } = props;
  const usersToDisplay = [...users].slice(0, 5);
  return (
    <View style={styles.container}>
      <View style={styles.avatars}>
        <Image
          source={{ uri: users[1].avatar }}
          style={[styles.image, styles.imageTwo]}
        />
        <Image source={{ uri: users[0].avatar }} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.join}>Join in</Text>
        {usersToDisplay
          .map((user) => ({
            ...user,
            isSpeaking: Math.random() > 0.5,
          }))
          .sort((a, b) => {
            if (a.isSpeaking) return -1;
            if (b.isSpeaking) return 1;
            return -1;
          })
          .map((user) => (
            <Text style={styles.user} key={user.avatar}>
              {user.firstName} {user.lastName} {user.isSpeaking && "💬"}
            </Text>
          ))}
        <Text style={styles.user}>+{users.length - 5} others</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    flexDirection: "row",
    minHeight: 100,
    marginBottom: 20,
  },
  image: {
    height: 44,
    width: 44,
    borderRadius: 16,
    resizeMode: "contain",
    backgroundColor: colors.gray,
  },
  imageTwo: {
    position: "absolute",
    left: 30,
    top: 16,
    resizeMode: "contain",
    backgroundColor: colors.gray,
  },
  avatars: {
    width: 74,
    marginRight: 16,
  },
  body: {},
  join: {
    color: colors.green,
    fontFamily: "Nunito_700Bold",
    fontSize: 19,
  },
  user: {
    color: colors.black,
    fontFamily: "Nunito_700Bold",
    fontSize: 19,
    lineHeight: 28,
  },
});
