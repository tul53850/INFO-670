import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {

  const [data, setData] = useState('');
  useEffect(() => {fetchData();}, []);
  const fetchData = async() => {
    try{
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data.message);
    } catch (error) {console.log(error);}
  };
  return (
    <View style={styles.container}>
      <Text>{data}</Text>
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
