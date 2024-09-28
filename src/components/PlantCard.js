import { View, Text, Image, StyleSheet } from 'react-native';

export default function PlantCard({ item }) {

  return (

    <View style={styles.cardContainer}>
      <Image source={{ uri: item.image }} style={styles.img} />

      <View style={styles.cardRow}>
        <Text style={styles.title}>Nome:</Text>
        <Text style={styles.plantTitle}>{item.name}</Text>
      </View>

      <View style={styles.cardRow}>
        <Text style={styles.title}>Descrição:</Text>
        <Text style={styles.description} >{item.description}</Text>
      </View>

      <View style={styles.cardRow}>
        <Text style={styles.title}>Nutrição:</Text>
        <Text>{item.nutrition}</Text>
      </View>

      <View style={styles.cardRow}>
        <Text style={styles.title}>Tipo celular:</Text>
        <Text>{item.cellType}</Text>
      </View>

      <View style={styles.cardRow}>
        <Text style={styles.title}>Organização:</Text>
        <Text>{item.cellOrganization}</Text>
      </View>

      <View style={styles.cardRow}>
        <Text style={styles.title}>Reprodução:</Text>
        <Text>{item.reproduction}</Text>
      </View>

      <View style={styles.cardRow}>
        <Text style={styles.title}>Respiração:</Text>
        <Text>{item.respiration}</Text>
      </View>

    </View>

  )

}



const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    margin: 10,
    alignSelf: 'center',
    borderRadius: 20,
    resizeMode: 'cover',
  },

  cardRow: {
    flexDirection: 'row',
    margin: 10,
    gap: 5,
  },

  cardContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontWeight: 'bold',
    color: '#2b5a42',
  },

  description: {
    maxWidth: 250,
  },

  plantTitle: {
    fontWeight: 'bold',
  }


})