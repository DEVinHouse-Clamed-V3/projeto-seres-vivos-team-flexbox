import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';
import OrganismoProtista from '../components/OrganismoProtista';

const Protista = () => {
  const ip = 'http://192.168.15.4:3000';
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
      <View style={styles.reino}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={reino}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OrganismoProtista item={item} />}
          ListEmptyComponent={
            <Text style={styles.empty}>Nenhum dado encontrado.</Text>
          }
          style={{ width: '100%' }}
          contentContainerStyle={{
            justifyContent: 'center',
            gap: 20,
            paddingBottom: 15,
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
