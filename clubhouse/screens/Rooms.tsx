import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import users from "../assets/users.json";
import { RoomListItem } from "../components/RoomListItem";
import { colors } from "../styleguide";

export function Rooms() {
  const roomOneUsers = [...users].slice(0, 15);
  const roomTwoUsers = [...users].slice(15, 35);
  const roomThreeUsers = [...users].slice(35, 100);
  return (
    <ScrollView style={styles.container}>
      <RoomListItem users={roomOneUsers} />
      <RoomListItem users={roomTwoUsers} />
      <RoomListItem users={roomThreeUsers} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    padding: 16,
    flex: 1,
  },
});
