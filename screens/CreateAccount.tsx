import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

import { useNavigation } from '@react-navigation/native';

import pugImage from "../assets/pugImage.png";
import googleIcon from "../assets/google-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import appleIcon from "../assets/apple-icon.png";

export default function CreateAccount() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const navigation = useNavigation()

  const HandlePress = (screenName:string) => {
      Alert.alert(`Navigate to ${screenName} screen`)
      
  };

  const HandleSignUp = () => {

      if(email === '' || password === '' || confirmPassword === ''){

        Alert.alert('Please enter fill out fields')

      } else if (confirmPassword === password){

        navigation.navigate('Create Account Username' as never)
        setEmail('')
        setPassword('')
        setConfirmPassword('')

      } else {

        Alert.alert(
          `Listen here reet boi: \n\n The first time you typed: ${password} \n\n The second time you typed: ${confirmPassword} \n\n Sort it out 🤬`
        )

      }

  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
        <Image source={pugImage} style={{ width: 26.75, height: 48.67 }} />
    </View>

    <Text style={styles.title}>Create an account</Text>

    <TextInput 
        placeholder="Email Address" 
        style={styles.textInput}
        value={email}
        onChangeText={(value) => {setEmail(value)}} />

    <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={[styles.textInput, {}]}
        value={password}
        onChangeText={(value) => {setPassword(value)}}
    />

    <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={[styles.textInput, { marginBottom: "3%" }]}
        value={confirmPassword}
        onChangeText={(value) => {setConfirmPassword(value)}}
    />

    <TouchableOpacity
        style={[styles.button, { backgroundColor: "#00A619" }]}
        onPress={HandleSignUp}
    >
        <Text style={[styles.buttonText, { color: "white" }]}>Sign Up</Text>
    </TouchableOpacity>

    <Text style={[styles.title, { fontSize: 16 }]}>or</Text>

    <TouchableOpacity
        style={[styles.otherSocialsLogin, { backgroundColor: "#F2EFF2" }]}
        onPress={() => HandlePress('Google Login')}
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
        onPress={() => HandlePress('Facebook Login')}
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
        onPress={() => HandlePress('Apple Login')}
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
        onPress={() => HandlePress('Policies')}
    >
        <Text style={{ color: "#505050", fontSize: 14, marginVertical: '5%', textAlign: 'center', paddingHorizontal: '10%' }}>
        By registering, you confirm that you accept our 
          <Text style={{fontWeight: 'bold', color: '#144AD2'}}> Terms of Service </Text>
          and
          <Text style={{fontWeight: 'bold', color: '#144AD2'}}> Privacy Policy </Text>
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={() => navigation.navigate('Login' as never)}
    >
        <Text style={{ color: "#144AD2", fontSize: 14, marginVertical: 20 }}>
        Have an Account? <Text style={{fontWeight: 'bold'}}>Sign In</Text>
        </Text>
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
    paddingTop: "20%",
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
