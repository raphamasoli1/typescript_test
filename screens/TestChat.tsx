import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text,
  StatusBar,
  Platform
} from "react-native";
import MessageComponent from '../components/MessageComponent'
import rapha from '../assets/rapha-pp.png'

import { useNavigation } from '@react-navigation/native';

import pugImage from "../assets/pugImage.png";

// Function to format timestamp as HH:MM
function formatTimestamp() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export default function TestChat() {

  const data = [1, 2, 3, 4, 5, 6];

  const renderItem = ({ item }) => {
    const text = `Hi, this is message number: ${item} on this component. How exciting!`;
    const timestamp = formatTimestamp();
    let type = ''

    if(item % 2 === 0){
      type = 'self'
    } else if(item % 3 === 0){
      type = 'host'
    } else {
      type = 'other'
    }

    return <MessageComponent key={item} messageText={text} messageTimestamp={timestamp} type={type} image={rapha} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, borderWidth: 1, borderColor: 'red', width: '100%', margin: 10}}></View>
      <View style={{flex: 6, width: '100%'}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          style={{ backgroundColor: 'white'}}
        />
      </View>
      <View style={{flex: 1, borderWidth: 1, borderColor: 'green', width: '100%', margin: 10}}></View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    alignItems: "center",
  }
});
