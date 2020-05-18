import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { YellowBox } from 'react-native';

import users from '../assets/users.json';
import { RoomListItem } from '../components/RoomListItem';
import { colors, AddUserIcon, images } from '../styleguide';
import { NavigationBar } from '../components/NavigationBar';
import { Button } from '../components/Button';
import Pusher from 'pusher-js/react-native';
import { PresenceItem } from '../components/PresenceItem';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

// Don't show annoying warning that isn't helpful
// https://stackoverflow.com/questions/44603362/setting-a-timer-for-a-long-period-of-time-i-e-multiple-minutes
YellowBox.ignoreWarnings(['Setting a timer']);

let pusher: any;
let channel: any;

export function Presence(props: any) {
  useEffect(() => {
    pusher = new Pusher('c8ecb3047849cea1c0a7', {
      cluster: 'us3',
    });
    channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data: any) => {
      console.log('Event from Pusher', data);
    });

    return function cleanup() {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.disconnect();
    };
  });

  const roomOneUsers = [...users].slice(0, 18);
  const roomTwoUsers = [...users].slice(19, 35);
  const roomThreeUsers = [...users].slice(35, 100);
  return (
    <View style={styles.container}>
      <NavigationBar
        title="Presence Demo"
        renderRight={() => (
          <View style={styles.navigationRight}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
              <Image
                source={{
                  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/mhudobivnik/128.jpg',
                }}
                style={styles.navAvatar}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <PresenceItem
          firstName="Arthur"
          lastName="Rudolph"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/mhudobivnik/128.jpg"
        />
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
