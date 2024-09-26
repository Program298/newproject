
import { View, Text, Button, StyleSheet,TouchableOpacity ,Image} from 'react-native';

import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import React, { useState, useEffect,useRef } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


export default function Screen2({navigation}) {
  const [image, setImage] = useState(null);
  const [objects, setObjects] = useState([]); 
  const [socket, setSocket] = useState(null);

  const [connectionError, setConnectionError] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://172.20.10.2:8888');
  
    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };
  
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.objects) {
        console.log('Objects detected:', data.objects);
        setObjects(data.objects); 
      } else if (data.error) {
        console.log('Error:', data.error);
      }
    };
  
    ws.onerror = (error) => {
      console.log('WebSocket error:', error.message);
      setConnectionError('WebSocket connection failed'); 
    };
  
    setSocket(ws);
  
    return () => {
      ws.close(); 
    };
  }, []);
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri); 
    }
  };

  const uploadImage = async (uri) => {
    let base64Img = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
    console.log(base64Img);

    if (socket && socket.readyState === WebSocket.OPEN) {
     
      socket.send(JSON.stringify({ image: base64Img }));
    } else {
      console.log('WebSocket is not open');
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={{ flex: 6}}>
      {objects.length > 0 && (
        <View>
          {objects.map((obj, index) => (
            <Text key={index} style={{fontSize: 50 , textAlign:'center'}}>{obj}</Text>
          ))}
        </View>
      )}
      </View>
      <View style={{ flex: 4, backgroundColor: '#8BD2EC', borderWidth: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
        <TouchableOpacity  onPress={() => navigation.navigate('Camerav')}  style={{ backgroundColor: '#00B1F1', height: 180, width: 180, alignSelf: 'center', marginTop: 20, borderRadius: 100, borderWidth: 5, borderColor: '#FFFFFF' }}>
          <Text style={{ alignSelf: 'center', justifyContent: 'center', fontSize: 40, fontWeight: '500', marginTop: 50,fontFamily:'Itim_400Regular' }}>แปล</Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={{marginLeft: 20}} onPress={pickImage}>
      <Image  source={require('../assets/icon/image.png')}  style={{height:'50%',width:'20%'}}></Image>
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
