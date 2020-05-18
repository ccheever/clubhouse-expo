import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  PermissionStatus,
  PermissionType,
  PermissionResponse,
  NOTIFICATIONS,
} from "expo-permissions";
import { usePermissions } from "@use-expo/permissions";
import { Button } from "./Button";
import Pusher from "pusher-js/react-native";
import { RoomListItem } from "../components/RoomListItem";
import users from "../assets/users.json";

export function PusherPresenceList() {
  let [message, setMessage] = useState("");

  let subscription = useEffect(() => {
    let pusher = new Pusher("c8ecb3047849cea1c0a7", {
      cluster: "us3",
    });
    let channel = pusher.subscribe("my-channel");

    channel.bind("my-event", function (data: any) {
      console.log("pusher:my-event", data);
      if (data.message) {
        setMessage(data.message);
      }
    });

    return function cleanup() {
      channel.unsubscribe();
      pusher.disconnect();
    };
  }, []);

  return (
    <View>
      <Text
        style={{
          fontFamily: "Nunito_600SemiBold",
          fontSize: 30,
        }}
      >
        {message}
      </Text>
    </View>
  );
}

export function PusherButton() {
  let [permission, askPermission, getPermission] = usePermissions(
    NOTIFICATIONS,
    { ask: true }
  );

  return (
    <View>
      <Button
        onPress={() => {
          console.log("pushed button");
        }}
        color="blue"
        label="Pusher Button"
      />
    </View>
  );
}
