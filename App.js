import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState('');

const speak = () => {
  Speech.speak(text);
}

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput}
        value={text}
        onChangeText={text => setText(text)} />
      <Button title='PRESS TO HEAR TEXT' onPress={speak} />
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 5,
    width: 150
  }
});
