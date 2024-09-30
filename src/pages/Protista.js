import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import axios from 'axios';
import OrganismoProtista from '../components/OrganismoProtista';

const Protista = () => {
  const ip = 'http://192.168.15.7:3000';
  const [reino, setReino] = useState([]);
  const [search, setSearch] = useState('');

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

  function searchFilter(reino) {
    // Se o campo de busca estiver vazio, retorna todos os itens
    if (search === '') {
      return reino;
    }

    // Aplica o filtro se houver texto no campo de busca
    return reino.filter((item) => {
      return (
        item.name && item.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.reino}>
        <View style={styles.search}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Pesquisar..."
            value={search}
            onChangeText={(text) => setSearch(text)}
            cursorColor={'#00796b'}
          />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchFilter(reino)} // O filtro é aplicado aqui
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
  search: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputSearch: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00796b',
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
