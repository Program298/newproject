import React,{ useEffect, useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet,TextInput,ScrollView,Image,FlatList} from 'react-native';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Screen3() {
 const [data, setData] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    try { 
      const querySnapshot = await getDocs(collection(db, "data"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      
      }));
      setData(data);
    } catch
    (error) {
      console.error("Error fetching data: ",error);

    }
  };
  fetchData();
 }, []);

 const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <Image 
      source={{ uri: item.imgae }} 
      style={styles.image} 
    />
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);



  return (  
  
  <View style={{flexDirection:'column',flex: 10}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <TextInput style={{backgroundColor:'#D9D9D9',width:'65%',margin:30,height: 30,borderWidth:1,borderRadius:30,padding:5}}>
    
    </TextInput>
    <TouchableOpacity>
   <Image  source={require('../assets/icon/search.png')}  style={styles.icon}></Image>
   </TouchableOpacity>
   </View>
   <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
     {/* <View  style={styles.item}>
      <View style={styles.image}> 
      </View> 
      <Text style={styles.title}>ชื่อท่าทาง</Text>
     </View> */}
     
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    
   
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  icon:{
    width: 40,
    height:40
  },
  item:{
    width:'85%',
    height:350,
    backgroundColor:'#8BD2EC',
    alignSelf:'center',
    borderRadius:5,
    marginTop: 20

  },  
  image:{
    width:280,
    height: 240,
    // backgroundColor:'#FFFF',
    alignItems:'center',
    alignSelf:'center',
    marginTop:30,
    borderRadius:10
  },
  title:{
    fontSize:20,
    textAlign:'center',
    marginTop:20,
    color:'#696969'
  }
});
