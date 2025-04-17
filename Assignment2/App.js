import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [inputText, setInputText] = useState('');

  const [items, setItems] = useState([
    {id: 1, text: 'Item 1'}, 
    {id: 2, text: 'Item 2'},
    {id: 3, text: 'Item 3'}
  ]);

  const [index, setIndex] = useState(4);

  const addItem = () => {
    if (inputText.trim()) {
      //setItems([...items.text, inputText]);
      //setItems([...items.id, 0]);
      const newItem = {id: index, text: inputText}
      setItems((prevItems) => [...prevItems, newItem]);

      setIndex(index+1);
      setInputText('');
    }
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grocery List</Text>
      <Text>--- Click an entry below to delete ---</Text>

      <FlatList
        renderItem={({item}) => 
        <Text style={styles.item} onPress={() => removeItem(item.id)}>
          {/*item.id*/}{item.text}
        </Text>}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        data={items}
      />

      <TextInput style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter items you need to remember!"
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