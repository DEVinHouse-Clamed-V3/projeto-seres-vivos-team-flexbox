import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import OrganismoProtista from '../components/OrganismoProtista';

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
        O reino Protista é composto por organismos eucariontes que não se
        encaixam nas categorias de plantas, animais ou fungos. Este reino é
        muito diverso e inclui algas, protozoários e formas de vida
        unicelulares.
      </Text>
      <View style={styles.reino}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={reino}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OrganismoProtista item={item} />}
          ListEmptyComponent={
            <Text style={styles.empty}>Nenhum dado encontrado.</Text>
          }
          style={{ width: '100%', paddingBottom: 20, height: '80%' }}
          contentContainerStyle={{
            justifyContent: 'center',
            gap: 20,
            paddingVertical: 20,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    paddingBottom: 30,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#00796b',
    shadowColor: '#000',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  info: {
    fontSize: 14,
    width: '100%',
    color: '#004d40',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 5,
    fontWeight: '600',
  },
  reino: {
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: '#00796b',
    marginTop: 20,
  },
});

export default Protista;
