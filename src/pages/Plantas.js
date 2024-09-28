import { Text, SafeAreaView, StyleSheet, Alert, FlatList, TextInput, Image } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PlantCard from '../components/PlantCard';

const Plantas = () => {

  const [plantas, setPlantas] = useState([]);
  const [search, setSearch] = useState('');

  const filtroPlantas = plantas.filter(item => item.name.toUpperCase().includes(search.toUpperCase()))


  useEffect(() => {
    axios
      .get('http://192.168.1.14:3000/plantas')
      .then((response) => {
        setPlantas(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <SafeAreaView style={styles.container}>

      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
        placeholder="Pesquisar"
      />

      <FlatList
        data={filtroPlantas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlantCard item={item} />}

        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum dado encontrado.</Text>
        }

        contentContainerStyle={{
          justifyContent: 'center',
          gap: 20,
          paddingBottom: 15,
        }}


      />


    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#2b5a4261',
  },


  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,    
  },

  empty: {
    textAlign: 'center',
    marginTop: 20
  },




})



export default Plantas;
