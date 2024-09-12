import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity ,Image} from 'react-native';
import {useCameraDevice,Camera} from 'react-native-vision-camera';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';



export default function Screen2({navigation}) {
 

  return (
    <View style={styles.container}>
      <View style={{ flex: 6, backgroundColor: '#00000' }}>

      </View>
      <View style={{ flex: 4, backgroundColor: '#8BD2EC', borderWidth: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
        <TouchableOpacity  onPress={() => navigation.navigate('Camerav')}  style={{ backgroundColor: '#00B1F1', height: 180, width: 180, alignSelf: 'center', marginTop: 20, borderRadius: 100, borderWidth: 5, borderColor: '#FFFFFF' }}>
          <Text style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 40, fontWeight: '500', marginTop: 50,fontFamily:'Itim_400Regular' }}>แปล</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}







const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
    
  }, button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  containers: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }, camera: {
    flex: 1,
  },
  container: {
    flex: 10,

  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
