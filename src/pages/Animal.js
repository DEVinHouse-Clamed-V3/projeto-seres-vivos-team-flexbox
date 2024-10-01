import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';
import ReinoAnimal from '../components/ReinoAnimal'

export default function Animal(){

const [reino, setReino] = useState([]);

useEffect(() => {
  axios.get('http://192.168.15.95:3001/animais')
    .then((response) => {
      setReino(response.data)
    })
    .catch(() => {
      Alert.alert("Não foi possível obter uma lista de animais")
    })
}, [])

return (
  <SafeAreaView style={styles.container}>
    <View style={styles.reino}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reino}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ReinoAnimal item={item} />}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    paddingBottom: 30,
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
