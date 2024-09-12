import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { auth, db, storage } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';



export default function Register({ navigation }) {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] =useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);



    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled && result.assets && result.assets.length > 0) {
            const selectedAsset = result.assets[0];
            const imageName = selectedAsset.uri.substring(selectedAsset.uri.lastIndexOf('/') + 1);
            uploadImage(selectedAsset.uri, imageName);
        } else {
            Alert.alert('Error', 'No image selected or image URI is undefined.');
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled && result.assets && result.assets.length > 0) {
            const selectedAsset = result.assets[0];
            const imageName = selectedAsset.uri.substring(selectedAsset.uri.lastIndexOf('/') + 1);
            uploadImage(selectedAsset.uri, imageName);
        } else {
            Alert.alert('Error', 'No photo taken or image URI is undefined.');
        }
    };

    const uploadImage = async (uri, imageName) => {
        try {
            setLoading(true);
            const storageRef = ref(storage, 'user/' + imageName);
            const img = await fetch(uri);
            const bytes = await img.blob();

            await uploadBytes(storageRef, bytes);
            const profileImageUrl = await getDownloadURL(storageRef);
            setProfileImage(profileImageUrl);
            Alert.alert('Success', 'Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image: ', error);
            Alert.alert('Error', 'Error uploading image.');
        } finally {
            setLoading(false);
        }
    };

    async function UserLogin() {
        if (password !== confirmPassword) {
            Alert.alert("เกิดข้อผิดพลาด", "รหัสผ่านและยืนยันรหัสไม่ตรงกัน");
            return;
        }

        if (!username || !email  || !profileImage) {
            Alert.alert('Error', 'Please fill in all fields and add a photo.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDocRef = doc(db, 'users', user.uid); // Use user.uid as the document ID
            await setDoc(userDocRef, {
                username: username,
                email: email,
              
                profileImage: profileImage,
            });

            console.log("User created with ID: ", user.uid);
            Alert.alert("สำเร็จ", "ลงทะเบียนสำเร็จ");
            navigation.navigate('Login');
        } catch (error) {
            console.error("Error creating user: ", error);
            Alert.alert("Registration Failed", error.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.formContainer}>
                <View style={styles.profileImageRow}>
                    <TouchableOpacity onPress={selectImage}>
                        <View style={styles.profileImageContainer}>
                            {profileImage ? (
                                <Image source={{ uri: profileImage }} style={styles.profileImage} />
                            ) : (
                                <Image source={require('@/assets/icon/photo-camera.png')} style={{width:'50%',height:'50%'}}></Image>
                            )}
                        </View>
                    </TouchableOpacity>
                    
                </View>
                {/* <TouchableOpacity onPress={takePhoto} style={styles.cameraButton}>
                    <Image source={require('@/assets/icon/Logo.png')} style={{height:50,width:50}} />
                    </TouchableOpacity> */}
        
                <View style={styles.inputRow}>
                
                    
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={setusername}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="ชื่อผู้ใช้"
                        />
                    
               
                 
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setemail}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="อีเมล"
                        />
                  
                
                
                    
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            placeholder="รหัสผ่าน"
                        />
                   
               
                        <TextInput
                            style={styles.input}
                            value={confirmPassword}
                            onChangeText={setconfirmPassword}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="ยืนยันรหัสผ่าน"
                        />
                  
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={UserLogin}>
                    <Text style={styles.buttonText}>ยืนยัน</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8BD2EC',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 50,
        fontWeight: '600',
    },
    formContainer: {
        flex: 8,
        marginTop: 30,
        alignItems: 'center',
      
    },
    profileImageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    addPhotoText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
    },
    cameraButton: {
        marginLeft: 10,
        alignSelf:'flex-end',
        alignItems:'flex-end',
        padding: 5,
        borderRadius: 50,
    },
    cameraButtonText: {
        fontSize: 20,
    },
    inputRow: {
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
        width:250
    },
    textLabel: {
        flex: 0.8,
        alignItems: 'flex-start',
    },
    textInputContainer: {
        flex: 1,
        alignItems: 'flex-start',
        fontFamily: 'Itim_400Regular',
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        width: '100%',
        borderRadius: 20,
        fontSize: 20,
        padding: 10,
        margin:20,
       paddingHorizontal: 35,
       paddingVertical: 5,
       shadowColor: 'black',
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity: 0.5,
       shadowRadius: 10,
       elevation: 5,
       textAlign:'center'
    },
    text: {
        fontSize: 20,
        margin: 6,
    },
    submitButton: {
        backgroundColor: '#17B2EA',
        borderRadius: 50,
        paddingHorizontal: 35,
        paddingVertical: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Itim_400Regular',
    },
});
