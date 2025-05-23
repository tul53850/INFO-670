import { StatusBar } from 'expo-status-bar';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export default function App() {

  const [input, setInput] = useState('');
  const [data, setData] = useState('');
  /*useEffect(() => {fetchData();}, []);
  const fetchData = async() => {
    try{
      //const response = await axios.get('http://localhost:5000/api/data');
      const response = await axios.get(`${API_URL}/api/data`);
      setData(response.data.message);
    } catch (error) {console.log(error);}
  };*/
  const post = async () => {
    try {await axios.post(`${API_URL}/api/save`, {value: input});
    } catch (error) {console.error('Could not save!! ', error.message);}
    //load();
  };

  const load = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/data`);
      setData(response.data.values);
    } catch (error) { console.error('Could not load!! ', error.message); }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>☆ Back-End Bulletin ☆</Text>
      <FlatList
        renderItem={({item}) => 
        <Text style={styles.item} /*onPress={() => removeItem(item.id)}*/>
          {/*item.id*/}{item.value}
        </Text>}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        data={data}
      />
      <TextInput 
        placeholder='Add to board!'
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Button title="Post!" onPress={post} style={styles.button} color="#333"/>
      <Button title="Load Bulletin" onPress={load} style={styles.button} color="#333"/>
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
    fontSize: 14,
    height: 60,
    color: 'white',
    textAlign: 'center',
    
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dashed',
  },
  button: {
    paddingBottom: 50,
    paddingTop: 10,
    marginBottom: 10
  },
  input: {
    fontSize: 20,
    padding: 20,
    color: 'white',
  },
});
