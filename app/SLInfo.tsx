import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Screen4() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity>
          <Image source={require('../assets/icon/search.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        {Array(6).fill(0).map((_, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>ทำทาง</Text>
            </View>
            <Text style={styles.gridText}>ชื่อทำ</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#D9D9D9',
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#B3E5FC',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 10,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: {
    color: '#B3E5FC',
    fontSize: 18,
  },
  gridText: {
    color: '#424242',
    fontSize: 16,
  },
});
