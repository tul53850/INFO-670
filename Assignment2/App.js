import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const [inputText, setInputText] = useState('');

const [items, setItems] = useState([
  'Item 1', 'Item 2', 'Item 3', 'Item 4'
]);

const addItem = () => {
  if (inputText.trim()) {
    setItems([...items, inputText]);
    setInputText('');
  }
};

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />

      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter new item"
        placeholderTextColor="#999"
      />

      <Button 
        title="Add" 
        onPress={addItem} 
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
