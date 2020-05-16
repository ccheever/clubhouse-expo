import React, { ReactNode } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import users from "../assets/users.json";
import { RoomListItem } from "../components/RoomListItem";
import { colors } from "../styleguide";

export function Home() {
  const roomOneUsers = [...users].slice(0, 18);
  const roomTwoUsers = [...users].slice(18, 35);
  const roomThreeUsers = [...users].slice(35, 100);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <RoomListItem users={roomOneUsers} />
        <RoomListItem users={roomTwoUsers} />
        <RoomListItem users={roomThreeUsers} />
        <RoomListItem users={roomOneUsers} />
        <RoomListItem users={roomTwoUsers} />
        <RoomListItem users={roomThreeUsers} />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>☝🏼 Start a new room</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.addTopicText}>
              ✨ Add topic or pick speakers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
  },
  contentContainer: {
    backgroundColor: colors.beige,
    padding: 16,
  },
  bottomContainer: {
    bottom: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: colors.green,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Nunito_700Bold",
    fontSize: 22,
  },
  addTopicText: {
    color: colors.gray,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
    marginTop: 8,
  },
});
