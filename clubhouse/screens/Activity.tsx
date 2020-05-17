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
import activity from "../assets/activity";
import { NavigationBar } from "../components/NavigationBar";
import { colors } from "../styleguide";

type User = typeof users[0];
type Item = User & { activityDate: number };

type RowProps = {
  item: Item;
  index: number;
};

function Row({ item, index }: RowProps) {
  const user = item;

  return (
    <TouchableOpacity
      style={[styles.listItem, index > 3 ? { opacity: 0.5 } : null]}
      onPress={() => {}}
    >
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
  );
}

export function Activity() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar title="Activity" />
      <FlatList
        style={styles.container}
        data={activity}
        keyExtractor={(item) => item.bio}
        renderItem={Row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    padding: 16,
    paddingVertical: 6,
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
    fontSize: 9,
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
    fontSize: 14,
  },
  username: {
    color: colors.black,
    fontFamily: "Nunito_700Bold",
    fontSize: 14,
  },
});
