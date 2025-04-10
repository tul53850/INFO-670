import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';



export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
      />

      <TextInput
        //style={styles.input}
        //value={inputText}
        //onChangeText={setInputText}
        placeholder="Enter new item"
        placeholderTextColor="#999"
      />

      <Button 
        title="Add" 
        //onPress={addItem} 
        color="#007bff"
      />


      <StatusBar style="auto" />
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
});
