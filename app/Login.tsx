import React, { useState } from 'react';
import { View, Alert, TextInput, StyleSheet, TouchableOpacity, Text,Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        navigation.navigate('Drawers');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = "อีเมล์หรือรหัสไม่ถูกนะจ้ะ";
        Alert.alert('Login Failed', errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/icon/Logo.png')} style={styles .logo}/>
      <TextInput
        style={styles.textinput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={{ fontSize: 18,textAlign:'center',color:'white'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.buttonText}>Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} >
          <Text style={styles.buttonText}>Register</Text>
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
    backgroundColor: '#8BD2EC',
    padding: 20,
  },
  textinput: {
    height: 40,
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 30,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    fontFamily: 'Itim_400Regular',
  },
  button: {
    backgroundColor: '#17B2EA',
    borderRadius: 50,
    paddingHorizontal: 35,
    paddingVertical: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
    
  },
  buttonText: {
    color: '#707070',
    fontSize: 18,
    textAlign: 'center',
    margin:5,
    fontFamily: 'Itim_400Regular',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
    
  },
});
