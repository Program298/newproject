import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function Screen5() {
  const [language, setLanguage] = useState('thai');
  const [rating1, setRating1] = useState(4);
  const [rating2, setRating2] = useState(3);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'ios-star' : 'ios-star-outline'}
          size={24}
          color="yellow"
        />
      );
    }
    return stars;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>ประโยค</Text>

        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={language}
            style={styles.picker}
            onValueChange={(itemValue) => setLanguage(itemValue)}
          >
            <Picker.Item label="ภาษาสากล" value="global" />
            <Picker.Item label="ภาษาไทย" value="thai" />
          </Picker>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>ฉันชอบคุณ</Text>
          <Text style={styles.subtitle}>คะแนนล่าสุด</Text>
          <View style={styles.stars}>{renderStars(rating1)}</View>
          <Text style={styles.subtitle}>ความจำเป็น: <Text style={styles.medium}>กลาง</Text></Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>ฉันขอโทษคุณ</Text>
          <Text style={styles.subtitle}>คะแนนล่าสุด</Text>
          <View style={styles.stars}>{renderStars(rating2)}</View>
          <Text style={styles.subtitle}>ความจำเป็น: <Text style={styles.medium}>กลาง</Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdownContainer: {
    marginVertical: 20,
    width: 200,
  },
  picker: {
    height: 50,
    width: 200,
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#87CEFA',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  medium: {
    fontSize: 18,
    color: '#FFA500',
  },
});
