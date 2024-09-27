import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function OrganismoProtista({ item }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.text}>{item.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nutrição</Text>
        <Text style={styles.text}>{item.nutrition}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tipo Celular</Text>
        <Text style={styles.text}>{item.cellType}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Organização Celular</Text>
        <Text style={styles.text}>{item.cellOrganization}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reprodução</Text>
        <Text style={styles.text}>{item.reproduction}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Respiração</Text>
        <Text style={styles.text}>{item.respiration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00695c',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
});
