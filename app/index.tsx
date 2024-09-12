import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import Screen2 from './SLTranslate1';
import Screen3 from './SLTranslate2';
import Screen4 from './SLInfo';
import Screen5 from './Screen5';
import Screen6 from './Screen6';
import Register from './Register';
import ForgetPassword from './ForgetPassword';
import  Camerav from './Camera';
 
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.logoContainer} >
        <Image source={require('@/assets/icon/Logo.png')} style={styles.logo} />

        <Text style={{ textAlign: 'center' }}></Text>
      </View>
      <View style={styles.drawerItemsContainer}>
      <DrawerItem
        label="หน้าหลัก"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <DrawerItem
        label="แปลภาษามือ"
        onPress={() => {
          props.navigation.navigate('Screen2');
        }}
      />
      <DrawerItem
        label="แปลภาษามือ"
        onPress={() => {
          props.navigation.navigate('Screen3');
        }}
      />
      <DrawerItem
        label="ข้อมูลภาษามือ"
        onPress={() => {
          props.navigation.navigate('Screen4');
        }}
      />
      <DrawerItem
        label="ฝึกรูปแบบประโยค"
        onPress={() => {
          props.navigation.navigate('Screen5');
        }}
      />

</View>
<View style={styles.footerContainer}>
        <Image source={require('@/assets/icon/Logo.png')} style={styles.footerIcon} />
      </View>
    </DrawerContentScrollView>
  );
}

function Drawers() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}

      
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "", headerStyle: { backgroundColor: '#17B2EA' } }}
      />
      <Drawer.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerTitle: "", headerStyle: { backgroundColor: '#17B2EA' } }}
      />
      <Drawer.Screen
        name="Screen3"
        component={Screen3}
        options={{ headerTitle: "", headerStyle: { backgroundColor: '#17B2EA' } }}
      />
      <Drawer.Screen
        name="Screen4"
        component={Screen4}
        options={{ headerTitle: "", headerStyle: { backgroundColor: '#17B2EA' } }}
      />
      <Drawer.Screen
        name="Screen5"
        component={Screen5}
        options={{ headerTitle: "", headerStyle: { backgroundColor: '#17B2EA' } }}
      />

    </Drawer.Navigator>
  );
}

export default function Index() {
  return (

    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawers" component={Drawers} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
      <Stack.Screen name="Camerav" component={Camerav}/>
    </Stack.Navigator>

  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100
  },
  drawerContent: {

    backgroundColor: 'rgba(0, 177, 241, 0.8)', 
    
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'rgba(0, 177, 241, 0)', 
  },

  drawerItemsContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },  
  footerContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
});