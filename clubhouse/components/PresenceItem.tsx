import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors } from '../styleguide';

type Props = {
  firstName: string;
  lastName: string;
  avatar: string;
  isYou: boolean;
  isSpeaking: boolean;
};

export function PresenceItem(props: Props) {
  let user = props;
  return (
    <View style={styles.container}>
      <View style={styles.avatars}>
        {/* <Image source={{ uri: users[1].avatar }} style={[styles.image, styles.imageTwo]} /> */}
        {/* <Image source={{ uri: users[0].avatar }} style={styles.image} /> */}
        <Image source={{ uri: user.avatar }} style={styles.image} />
      </View>
      <View style={styles.body}>
        {/* <Text style={styles.join}>Join in</Text> */}
        <Text style={styles.user} key={user.avatar}>
          {user.firstName} {user.lastName} {user.isSpeaking && '💬'}
        </Text>
        {props.isYou ? <Text style={styles.join}>This is you</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    flexDirection: 'row',
    minHeight: 60,
    marginBottom: 20,
  },
  image: {
    height: 44,
    width: 44,
    borderRadius: 16,
    resizeMode: 'contain',
    backgroundColor: colors.gray,
  },
  imageTwo: {
    position: 'absolute',
    left: 30,
    top: 16,
    resizeMode: 'contain',
    backgroundColor: colors.gray,
  },
  avatars: {
    width: 74,
    marginRight: 16,
  },
  body: {},
  join: {
    color: colors.green,
    fontFamily: 'Nunito_700Bold',
    fontSize: 19,
  },
  user: {
    color: colors.black,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 18,
    lineHeight: 28,
  },
});
