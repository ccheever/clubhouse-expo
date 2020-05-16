import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import users from "../assets/users.json";
import { colors } from "../styleguide";

export function Activity() {
  const listData = users
    .map((user) => ({
      ...user,
      activityDate: Math.floor(Math.random() * 12) + 1,
    }))
    .sort((a, b) => a.activityDate - b.activityDate);
  return (
    <FlatList
      style={styles.container}
      data={listData}
      keyExtractor={(item) => item.bio}
      renderItem={({ item: user }) => (
        <TouchableOpacity style={styles.listItem} onPress={() => {}}>
          <View style={styles.user}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.activityText}>
              <Text style={styles.username}>
                {user.firstName} {user.lastName}
              </Text>{" "}
              followed you
            </Text>
          </View>
          <Text style={styles.date}>{user.activityDate}D AGO</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    padding: 16,
    flex: 1,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    alignItems: "center",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    color: colors.gray,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 10,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 12,
    backgroundColor: colors.gray,
    marginRight: 8,
  },
  activityText: {
    color: colors.black,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 15,
  },
  username: {
    color: colors.black,
    fontFamily: "Nunito_700Bold",
    fontSize: 15,
  },
});
