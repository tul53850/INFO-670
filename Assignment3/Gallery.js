import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Gallery() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      {/* You can render images or a FlatList here later */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});