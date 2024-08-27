import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen6() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome toss the Home Screen!</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
