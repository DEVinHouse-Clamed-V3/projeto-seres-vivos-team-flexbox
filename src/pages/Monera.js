import React, { useEffect, useState } from 'react';
import { SafeAreaView, Alert, StyleSheet, FlatList, TextInput, Text } from 'react-native';
import axios from 'axios'
import MoneraCard from '../components/MoneraCard';

const Monera = () => {

  const [reinoMonera, setReinoMonera] = useState([])
  const [search, setSearch] = useState('')

  const filtroMonera = reinoMonera.filter(item => item.name.toUpperCase().includes(search.toUpperCase()))

  useEffect(() => {
    axios
      .get('http://192.168.1.14:3000/monera')
      .then((response) => {
        setReinoMonera(response.data)
      })
      .catch(() => {
        Alert.alert('Não foi possível obter as informações do reino Monera.')
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar"
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filtroMonera}
        renderItem={({ item }) => <MoneraCard item={item} />}
        keyExtractor={(item) => item.id}

        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum dado encontrado.</Text>
        }

        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  listContainer: {
    justifyContent: 'center',
    gap: 20,
    paddingBottom: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#9400d33b'
  },
  empty: {
    marginTop: 20,
    textAlign: 'center'
  }
})

export default Monera;
