import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const Protista = () => {
  const route = useRoute();
  const { kingdom } = route.params;
  const ip = 'http://192.168.15.6:3000';
  const [reino, setReino] = useState([]);

  async function fetchData(ip) {
    try {
      const response = await axios.get(`${ip}/protista`);
      setReino(response.data);
      console.log(reino);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(ip);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{kingdom}</Text>
      </View>
      <Text style={styles.info}>
        O reino Protista é composto por organismos eucariontes que não se
        encaixam nas categorias de plantas, animais ou fungos. Este reino é
        muito diverso e inclui algas, protozoários e formas de vida
        unicelulares.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2ebf2',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#004d40',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  info: {
    fontSize: 13,
    width: '100%',
    color: '#444444',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default Protista;
