import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList, Image } from 'react-native';
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
        O reino Protista é composto por organismos eucariontes que não se encaixam nas categorias de plantas, animais ou fungos. Este reino é muito diverso e inclui algas, protozoários e formas de vida unicelulares.
      </Text>
      <View style={styles.reino}>
        <FlatList
          data={reino}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>Nenhum dado encontrado.</Text>
          }
        />
      </View>
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
  reino: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
  },
  itemDescription: {
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: '#444444',
    marginTop: 20,
  },
});

export default Protista;
