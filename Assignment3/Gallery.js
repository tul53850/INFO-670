import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, Pressable } from 'react-native';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / numColumns /1.2; //1.2 for spacing

export function Gallery({images, onSelect}) {

  const renderItem = ({ item }) => (
    <Pressable onPress={() => onSelect(item)}>
      <Image source={item} style={styles.image}/>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    paddingTop: 25,
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 1,
  },
});