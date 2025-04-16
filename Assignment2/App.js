import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [inputText, setInputText] = useState('');

  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    if (inputText.trim()) {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Album Tracker</Text>

      <FlatList
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        data={items}
      />

      <TextInput style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter new item"
        placeholderTextColor="#999"
      />

      <Button style={styles.button}
        title="Add" 
        onPress={addItem} 
        color="#333"
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    color: 'white',
    paddingBottom: 5
  },
  item: {
    padding: 10,
    margin: 10,
    fontSize: 24,
    height: 60,
    color: 'white',
    width: '45%',
    textAlign: 'center',
    
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'dashed',
  },
  input: {
    fontSize: 20,
    padding: 20,
    color: 'white',
  },
  button: {
    paddingBottom: 50,
    paddingTop: 10,
  }
});