import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import { useNavigation } from '@react-navigation/native';

import pugImage from "../assets/pugImage.png";

export default function MessageComponent(props) {

    let backgroundColor = ''
    let textColor = ''
    let flexDirection = 'row-reverse'
    let timestampFlexDirection = 'row-reverse'
    let leftBottomCorner = '20'
    let rightBottomCorner = '0'

    if(props.type === 'self'){
      backgroundColor = '#00A619' 
    } else if(props.type === 'other'){
      backgroundColor = '#E9E9E9'
    } else {
      backgroundColor = '#006CA6'
    }

    if(props.type === 'other'){
      textColor = '#505050' 
    } else {
      textColor = '#FFFFFF'
    } 

    if(props.type === 'self'){
      flexDirection = 'row'
    }

    if(props.type === 'self'){
      timestampFlexDirection = 'row'
    }

    if(props.type === 'self'){
      leftBottomCorner = 0
    }

    if(props.type === 'self'){
      rightBottomCorner = 20
    }



    return (
      <View style={[styles.container, {flexDirection: flexDirection}]}>
        <View style={styles.profilePictureContainer}>
            <Image source={props.image} style={{height: '100%', width: '100%', borderRadius: 100}}/>
        </View>
        <View style={styles.messageAndTimestampContainer}>
          <View style={
            [
              styles.messageContainer, 
              {
                backgroundColor: backgroundColor, 
                borderBottomLeftRadius: leftBottomCorner, 
                borderBottomRightRadius: rightBottomCorner
              }
            ]
          }>
            <Text style={[styles.message, {color: textColor}]}>{props.messageText} {props.type}</Text>
          </View>
          <View style={[styles.timestampContainer, {flexDirection: flexDirection}]}>
            <Text style={styles.timestamp}>{props.messageTimestamp}</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: '100%',
    paddingLeft: 15,
    paddingVertical: 2,
    gap: 7,
  },
  profilePictureContainer: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
  messageAndTimestampContainer: {
    width: '60%'
  },
  messageContainer: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 20,
    backgroundColor: '#00A619',
    marginBottom: 2,
  },
  timestampContainer: {
  },
  timestamp: {
    color: '#BFBFBF'
  },
  message: {
    color: 'white'
  }
});


