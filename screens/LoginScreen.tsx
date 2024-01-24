import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

import pugImage from "../assets/pugImage.png";
import googleIcon from "../assets/google-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import appleIcon from "../assets/apple-icon.png";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigation = useNavigation()

    const HandleOnClick = (screenName:string) => {
        Alert.alert(`Navigate to ${screenName} screen`)
        
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={pugImage} style={{ width: 80.25, height: 146 }} />
        </View>

        <Text style={styles.title}>pug</Text>

        <TextInput 
            placeholder="Email Address" 
            style={styles.textInput}
            value={email}
            onChangeText={(value) => {setEmail(value)}} />

        <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={[styles.textInput, { marginBottom: "3%" }]}
            value={password}
            onChangeText={(value) => {setPassword(value)}}
        />

        <TouchableOpacity
            style={[styles.button, { backgroundColor: "#00A619" }]}
            onPress={() => navigation.navigate('Test Chat' as never)}
            // onPress={() => HandleOnClick('Splash')}
        >
            <Text style={[styles.buttonText, { color: "white" }]}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[
            styles.button,
            { backgroundColor: "white", borderWidth: 1, borderColor: "#00A619" },
            ]}
            onPress={() => navigation.navigate('Create Account' as never)}
        >
            <Text style={[styles.buttonText, { color: "#00A619" }]}>
            Create an Account
            </Text>
        </TouchableOpacity>

        <Text style={[styles.title, { fontSize: 16 }]}>or</Text>

        <TouchableOpacity
            style={[styles.otherSocialsLogin, { backgroundColor: "#F2EFF2" }]}
            onPress={() => HandleOnClick('Google Login')}
        >
            <View style={{ flex: 1, height: "100%", justifyContent: "center" }}>
            <Image source={googleIcon} style={{ height: 20, width: 20 }} />
            </View>
            <Text
            style={[
                styles.buttonText,
                { color: "#525657", fontSize: 14, flex: 3 },
            ]}
            >
            Continue with Google
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.otherSocialsLogin, { backgroundColor: "#0866FF" }]}
            onPress={() => HandleOnClick('Facebook Login')}
        >
            <View style={{ flex: 1, height: "100%", justifyContent: "center" }}>
            <Image source={facebookIcon} style={{ height: 20, width: 20 }} />
            </View>
            <Text
            style={[styles.buttonText, { color: "white", fontSize: 14, flex: 3 }]}
            >
            Continue with Facebook
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.otherSocialsLogin, { backgroundColor: "#020002" }]}
            onPress={() => HandleOnClick('Apple Login')}
        >
            <View style={{ flex: 1, height: "100%", justifyContent: "center" }}>
            <Image source={appleIcon} style={{ height: 21, width: 18 }} />
            </View>
            <Text
            style={[styles.buttonText, { color: "white", fontSize: 14, flex: 3 }]}
            >
            Continue with Apple
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => HandleOnClick('Forgot Password')}
        >
            <Text style={{ color: "#144AD2", fontSize: 14, marginVertical: 20 }}>
            Forgot Password
            </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
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
    paddingTop: "15%",
  },
  title: {
    color: "#00A619",
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 10,
  },
  textInput: {
    width: "85%",
    borderWidth: 1,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderBottomColor: "#00A619",
    paddingVertical: 5,
    marginTop: 20,
  },
  button: {
    width: "85%",
    height: "5.5%",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  otherSocialsLogin: {
    flexDirection: "row",
    width: "85%",
    height: "5%",
    paddingHorizontal: "5%",
    borderRadius: 22,
    alignItems: "center",
    marginTop: "2%",
  },
});
