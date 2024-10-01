// Importando bibliotecas necessárias
import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, FlatList, TextInput, View, Image, StyleSheet } from 'react-native';
import axios from 'axios';

// Componente principal
const Fungos = () => {
  // Definindo estados
  const [fungos, setFungos] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Função para buscar dados dos fungos
  useEffect(() => {
    fetchFungos();
  }, [page]);

  // Função assíncrona para buscar dados da API
  const fetchFungos = async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(`http://192.168.100.203:3000/fungos?_page=${page}&_limit=10`);
      if (response.data.length > 0) {
        setFungos(prevFungos => [...prevFungos, ...response.data]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Função para lidar com a busca
  const handleSearch = (text) => {
    setSearch(text);
  };

  // Filtrando fungos com base na busca
  const filteredFungos = fungos.filter(fungo =>
    fungo.name.toLowerCase().includes(search.toLowerCase())
  );

  // Renderizando cada item da lista
  const renderItem = ({ item }) => (
    <View container={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.descriptionContainer}>

          <Text style={styles.descriptionItem}>Descrição:</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>

          <Text style={styles.descriptionItem}>Nutrição:</Text>
          <Text style={styles.descriptionText}>{item.nutrition}</Text>

          <Text style={styles.descriptionItem}>Tipo de Célula:</Text>
          <Text style={styles.descriptionText}>{item.cellType}</Text>

          <Text style={styles.descriptionItem}>Organização Celular:</Text>
          <Text style={styles.descriptionText}>{item.cellOrganization}</Text>

          <Text style={styles.descriptionItem}>Reprodução:</Text>
          <Text style={styles.descriptionText}>{item.reproduction}</Text>

          <Text style={styles.descriptionItem}>Respiração:</Text>
          <Text style={styles.descriptionText}>{item.respiration}</Text>
        </View>
      </View>
    </View>
  );

  // Função para carregar mais itens quando chegar ao fim da lista
  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar fungos..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredFungos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && <Text>Carregando...</Text>}
      />
    </SafeAreaView>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5b7ae',
    paddingVertical: 20,
  },

  searchBar: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 16,
    backgroundColor: '#a5b7ae'
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2f5d46'
  },
  descriptionContainer: {
    alignItems: 'flex-start',
    width: '100%',

  },
  descriptionItem: {
    marginVertical: 1,
    fontWeight: 'bold',
    color: '#2f5d46'
  },
  descriptionText: {
    marginBottom: 10,
  },
});

export default Fungos;
