import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    //StyleSheet,
    Text,
    //View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";

export default function NewScreen () {

  function newTask (values) {
	if (!values.title) {
      Toast.show({
        type: 'error',
        text1: 'Title is required',
        position: 'top'
      });
      return;
    }
    //get todo array from storage
    getItem()
      .then((todoJSON) => {
        let todo = todoJSON ? JSON.parse(todoJSON) : [];
        //add a new item to the list
        todo.push({
          id: uuid.v4(),
          title: values.title
        });

        //set item in storage again
        setItem(JSON.stringify(todo))
          .then(() => {
            //navigate back to home screen
            navigation.goBack();
          }).catch((err) => {
            console.error(err);
            Toast.show({
              type: 'error',
              text1: 'An error occurred and a new item could not be saved',
              position: 'top'
            });
          });
      })
      .catch((err) => {
        console.error(err);
        Toast.show({
          type: 'error',
          text1: 'An error occurred and a new item could not be saved',
          position: 'bottom'
        });
      });
  }
  const { getItem, setItem } = useAsyncStorage('todo');
  return (
    <Formik
      initialValues={{title: ''}}
      onSubmit={newTask}
    >
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={style.container}>
          <Text h4>New Todo Item</Text>
          <TextInput 
            placeholder="Example: Cook, Clean, etc..." 
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            style={style.input}
          />
          <Button title="Add" onPress={handleSubmit} style={style.button} />
        </View>
      )}
    </Formik>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10
  },
  input: {
    marginTop: 10
  },
  button: {
    backgroundColor: '#228CDB'
  }
})
