import { useNavigation } from '@react-navigation/native'

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Notes = () => {
  const navigation = useNavigation();  
  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('NewScreen')}>
          <Text style={styles.buttonText}>Add Notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    height: 50,
    width: 90,
    backgroundColor: "green",
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
});
