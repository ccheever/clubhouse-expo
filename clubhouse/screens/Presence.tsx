import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { YellowBox } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';

import { RoomListItem } from '../components/RoomListItem';
import { colors, AddUserIcon, images } from '../styleguide';
import { NavigationBar } from '../components/NavigationBar';
import { Button } from '../components/Button';
import Pusher from 'pusher-js/react-native';
import { PresenceItem } from '../components/PresenceItem';

import { users, randomUsername } from '../assets/presence-data.tsx';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = false; // true;

// Don't show annoying warning that isn't helpful
// https://stackoverflow.com/questions/44603362/setting-a-timer-for-a-long-period-of-time-i-e-multiple-minutes
YellowBox.ignoreWarnings(['Setting a timer']);
console._warn = console.warn;
console.warn = (message) => {
  if (message.indexOf('Setting a timer') <= -1) {
    console._warn(message);
  }
};

let pusher: any;
let channel: any;

export function Presence(props: any) {
  let [username, setUsername] = useState(null);

  let { showActionSheetWithOptions } = useActionSheet();

  useEffect(() => {
    initPusher(username);
    return function cleanup() {
      cleanupPusher();
    };
  }, []);

  let user = username ? users[username] : null;

  let [memberCount, setMemberCount] = useState();
  let [members, setMembers] = useState([]);
  let [me, setMe] = useState(null);

  let updateMembers = () => {
    let data = channel.members;
    let members = Object.entries(data.members).map(([username, user]: any) => ({
      ...user,
      username,
    }));
    let me = { ...data.me.info, username: data.me.id };
    let memberCount = data.count;
    setMembers(members);
    setMe(me);
    setMemberCount(memberCount);
  };

  let cleanupPusher = () => {
    if (channel) {
      channel.unbind_all();
      channel.unsubscribe();
    }
    channel = undefined;

    if (pusher) {
      pusher.disconnect();
    }
    pusher = undefined;
  };

  let initPusher = (username: string) => {
    cleanupPusher();
    if (!username) {
      return;
    }

    pusher = new Pusher('c8ecb3047849cea1c0a7', {
      cluster: 'us3',

      // This is just a server running the code in this repository under the demo-server directory
      // https://github.com/ccheever/clubhouse-expo/tree/master/demo-server
      authEndpoint: `https://clubhouse-presence-demo-server.onrender.com/pusher/auth?username=${username}`,

      // authEndpoint: `http://192.168.1.221:5000/pusher/auth?username=${username}`,
    });
    channel = pusher.subscribe('presence-demo');

    for (let eventName of [
      'pusher:subscription_succeeded',
      'pusher:member_added',
      'pusher:member_removed',
    ]) {
      channel.bind(eventName, (data: any) => {
        updateMembers();
      });
    }
  };

  let switchUser = () => {
    let usernames = Object.entries(users).map(([_, x]) => `${x.firstName} ${x.lastName}`);
    showActionSheetWithOptions(
      {
        options: ['Leave', ...usernames, 'Cancel'],
        destructiveButtonIndex: 0,
        cancelButtonIndex: usernames.length + 1,
      },
      (selectedIndex) => {
        if (selectedIndex === 0) {
          setUsername(null);
          setMe(null);
          setMemberCount(null);
          setMembers([]);
          cleanupPusher();
          return;
        }

        if (selectedIndex === usernames.length + 1) {
          return;
        }

        // alert(`Selected index ${selectedIndex}`);
        let username = Object.keys(users)[selectedIndex - 1];
        initPusher(username);
        setUsername(username);
      }
    );
  };

  let usersToShow = [...members.filter((x: any) => x.username !== me?.username)];
  if (me) {
    usersToShow.unshift(me);
  }

  return (
    <View style={styles.container}>
      <NavigationBar
        title="Presence Demo"
        renderRight={() => (
          <View style={styles.navigationRight}>
            <TouchableOpacity
              onPress={() => {
                switchUser();
              }}>
              {username ? (
                <Image
                  source={{
                    uri: user.avatar,
                  }}
                  style={styles.navAvatar}
                />
              ) : (
                <Text>🔄 </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {usersToShow.map((user: any, i: number) => (
          <PresenceItem key={user.username} {...user} isYou={i === 0} />
        ))}
      </ScrollView>
      <View style={styles.bottomContainer}>
        {typeof memberCount === 'number' ? (
          <Text style={styles.membersInfoText}>There are {memberCount} people here</Text>
        ) : (
          <Text style={[styles.membersInfoText, { color: colors.lightgray }]}>
            You aren't in the room
          </Text>
        )}
        <Button
          color="blue"
          onPress={switchUser}
          label={username ? `You are ${user.firstName}` : "You aren't present"}
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 24,
          }}
        />
        <TouchableOpacity onPress={switchUser}>
          <Text style={styles.membersInfoText}>🔄 Switch to being someone else</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTopicText: {
    color: colors.lightgray,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    marginTop: 8,
  },
  membersInfoText: {
    color: colors.gray,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    marginBottom: 8,
  },
  navigationRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navAvatar: {
    width: 30,
    height: 30,
    borderRadius: 13,
    resizeMode: 'contain',
    marginLeft: 30,
    marginRight: 12,
  },
});
