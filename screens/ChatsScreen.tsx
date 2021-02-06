import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem  chatRoom={{lastMessage: {content: "Hello Ed"}}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
