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
import { Button } from "../components/Button";

export function Home(props: any) {
  const roomOneUsers = [...users].slice(0, 18);
  const roomTwoUsers = [...users].slice(19, 35);
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
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Activity")}
            >
              <Image
                source={images.notificationsOn}
                style={{ width: 27, height: 29 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Profile")}
            >
              <Image
                source={{
                  uri:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/mhudobivnik/128.jpg",
                }}
                style={styles.navAvatar}
              />
            </TouchableOpacity>
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
        <Button
          color="lightgreen"
          onPress={() => {}}
          label="☝🏼 Start a new room"
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 24,
          }}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.addTopicText}>✨ Add topic or pick speakers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
  },
  contentContainer: {
    backgroundColor: colors.beige,
    padding: 16,
  },
  bottomContainer: {
    bottom: 24,
    alignItems :'center',
    justifyContent: "center",
  },
  addTopicText: {
    color: colors.lightgray,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
    marginTop: 8,
  },
  navigationRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  navAvatar: {
    width: 30,
    height: 30,
    borderRadius: 13,
    resizeMode: "contain",
    marginLeft: 30,
    marginRight: 12,
  },
});
