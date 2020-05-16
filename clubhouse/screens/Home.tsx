import React, { ReactNode } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import users from "../assets/users.json";
import { RoomListItem } from "../components/RoomListItem";
import { colors, AddUserIcon, images } from "../styleguide";
import { NavigationBar } from "../components/NavigationBar";

export function Home() {
  const roomOneUsers = [...users].slice(0, 18);
  const roomTwoUsers = [...users].slice(18, 35);
  const roomThreeUsers = [...users].slice(35, 100);
  return (
    <View style={styles.container}>
      <NavigationBar
        renderLeft={() => (
          <View style={{ marginLeft: 8 }}>
            <AddUserIcon />
          </View>
        )}
        renderRight={() => (
          <View style={styles.navigationRight}>
            <Image
              source={images.notificationsOn}
              style={{ width: 27, height: 29 }}
            />
            <Image
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/mhudobivnik/128.jpg",
              }}
              style={styles.navAvatar}
            />
          </View>
        )}
      />
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
  navigationRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  navAvatar: {
    width: 33,
    height: 33,
    borderRadius: 13,
    resizeMode: "contain",
    marginLeft: 30,
    marginRight: 12,
  },
});
