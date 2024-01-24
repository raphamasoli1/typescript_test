import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { useNavigation } from '@react-navigation/native';


import pugImage from "../assets/pugImage.png";

export default function CreateAccountUsername() {

  const [username, setUsername] = useState<string | undefined>()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
        <TouchableOpacity style={{position: 'absolute', left: '5%', top: '40%'}} onPress={navigation.goBack}>
          <Text style={{fontWeight: 'bold'}}>Back Button</Text>
        </TouchableOpacity>
        <Image source={pugImage} style={{ width: 26.75, height: 48.67 }} />
    </View>

    <Text style={styles.title}>Let's pick a username</Text>

    <Text style={{textAlign: 'center', paddingHorizontal: '3%', fontSize: 14}}> This will be the name others see when they view your account and posts. <Text style={{fontWeight: 'bold'}}>You'll still use your email to sign in</Text></Text>

    <TextInput 
        placeholder="Enter a Username" 
        style={styles.textInput}
        value={username}
        onChangeText={(value) => {setUsername(value)}} />

    <TouchableOpacity
        style={[styles.button, { backgroundColor: "#00A619" }]}
        onPress={() => ''}
    >
        <Text style={[styles.buttonText, { color: "white" }]}>Continue</Text>
    </TouchableOpacity>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === 'ios' ? "20%" : "30%",
  },
  title: {
    color: "#00A619",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: '2%',
  },
  textInput: {
    width: "85%",
    borderWidth: 1,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderBottomColor: "#00A619",
    paddingVertical: "1%",
    marginTop: '5%',
    marginBottom: '2%'
  },
  button: {
    width: "85%",
    height: 40,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  }
});
