import React from 'react';
import { View, Text, Button, StyleSheet,Image,TouchableOpacity} from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
     <View style={styles.section2}>
        <TouchableOpacity style={styles.item}  onPress={() => navigation.navigate('Screen2')}>
        <Image  source={require('../assets/icon/interpreter.png')} style={styles.image}></Image>
        <Text style={styles.texticon}>แปลภาษามือ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Screen3')}>
        <Image  source={require('../assets/icon/open-book.png')} style={styles.image} ></Image>
        <Text style={styles.texticon}>ข้อมูลภาษามือ</Text>
        </TouchableOpacity>

     </View>
     <View style={styles.section2}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Screen4')}>
        <Image  source={require('../assets/icon/communication.png')} style={styles.image}></Image>
        <Text style={styles.texticon}>ฝึกภาษามือ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Screen5')}>
        <Image  source={require('../assets/icon/sign-language.png')} style={styles.image}></Image>
        <Text style={styles.texticon}>ฝึกรูปแบบประโยค</Text>
        </TouchableOpacity>
      
     </View>
    
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
  item:{
    width:150,
    height:150,
    backgroundColor:'#CAF1FF',
    margin:10,
    borderWidth: 2,
    borderRadius:100,
    borderColor:'#CEC9C9'
  },
  section2:{
    flex:1,
    flexDirection:'row',
    margin:50

  },
  image:
  {
    
    height:80,
    width:80,
    margin:30
  },
  texticon: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginTop:10,
    fontFamily: 'Itim_400Regular',

  }
});
