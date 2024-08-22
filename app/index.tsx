import React from 'react';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
function Drawers(){
  return(
    
    <Drawer.Navigator  initialRouteName="Login"  screenOptions={{
      drawerStyle: {
        backgroundColor: '#e6e6e6', 
      },
      headerTitle: "",
    }}>
      {/* drawerContent={props => <CustomDrawer {...props}/>}ฝากไว้ก่อน */}
      <Drawer.Screen name="หน้าหลัก" component={Home} 
       options={{ headerTitle: "",  headerStyle: {
        backgroundColor: '#17B2EA',
      } }} 
      />
        <Drawer.Screen name="แปลภาษมือ" component={Screen2} 
       options={{ headerTitle: "",  headerStyle: {
        backgroundColor: '#17B2EA',
      } }} 
      />
         <Drawer.Screen name="ข้อมูลภาษามือ" component={Screen3} 
       options={{ headerTitle: "",  headerStyle: {
        backgroundColor: '#17B2EA',
      } }} 
      />
         <Drawer.Screen name="ฝึกภาษามือ" component={Screen4} 
       options={{ headerTitle: "",  headerStyle: {
        backgroundColor: '#17B2EA',
      } }} 
      />
    
      <Drawer.Screen name="ฝึกรูปแบบประโยค" component={Screen5} 
       options={{ headerTitle: "",  headerStyle: {
        backgroundColor: '#17B2EA',
      } }} 
      />

    </Drawer.Navigator>
  )
}

export default function Index() {
  return (

    <Stack.Navigator initialRouteName="Login"   screenOptions={{ headerShown: false }}>
        <Stack.Screen name= "Drawers" component={Drawers} />
        <Stack.Screen name ="Login" component={Login} />
      
    </Stack.Navigator>
    // <Drawer.Navigator  initialRouteName="Home"  screenOptions={{
    //   drawerStyle: {
    //     backgroundColor: '#e6e6e6', 
    //   },
    //   headerTitle: "",
    // }}>
    //   {/* drawerContent={props => <CustomDrawer {...props}/>}ฝากไว้ก่อน */}
    //   <Drawer.Screen name="หน้าหลัก" component={Home} 
    //    options={{ headerTitle: "",  headerStyle: {
    //     backgroundColor: '#17B2EA',
    //   } }} 
    //   />
    //     <Drawer.Screen name="แปลภาษมือ" component={Screen2} 
    //    options={{ headerTitle: "",  headerStyle: {
    //     backgroundColor: '#17B2EA',
    //   } }} 
    //   />
    //      <Drawer.Screen name="ข้อมูลภาษามือ" component={Screen3} 
    //    options={{ headerTitle: "",  headerStyle: {
    //     backgroundColor: '#17B2EA',
    //   } }} 
    //   />
    //      <Drawer.Screen name="ฝึกภาษามือ" component={Screen4} 
    //    options={{ headerTitle: "",  headerStyle: {
    //     backgroundColor: '#17B2EA',
    //   } }} 
    //   />
    //   <Stack.Screen name="Login" component={Login} />
    //   <Drawer.Screen name="ฝึกรูปแบบประโยค" component={Screen5} 
    //    options={{ headerTitle: "",  headerStyle: {
    //     backgroundColor: '#17B2EA',
    //   } }} 
    //   />

    // </Drawer.Navigator>
  );
}
