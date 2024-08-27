import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 6, backgroundColor: '#00000' }}>

      </View>
      <View style={{ flex: 4, backgroundColor: '#8BD2EC', borderWidth: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
        <View style={{ backgroundColor: '#00B1F1', height: 180, width: 180, alignSelf: 'center', marginTop: 20, borderRadius: 100, borderWidth: 5, borderColor: '#FFFFFF' }}>
          <Text style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 40, fontWeight: '500', marginTop: 50,fontFamily:'Itim_400Regular' }}>แปล</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,

  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
