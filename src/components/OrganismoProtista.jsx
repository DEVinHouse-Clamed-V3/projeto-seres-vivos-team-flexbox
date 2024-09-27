import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function OrganismoProtista({ item }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>

      <View style={styles.contentSection}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição:</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nutrição:</Text>
          <Text style={styles.text}>{item.nutrition}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tipo Celular:</Text>
          <Text style={styles.text}>{item.cellType}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Organização:</Text>
          <Text style={styles.text}>{item.cellOrganization}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reprodução:</Text>
          <Text style={styles.text}>{item.reproduction}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Respiração:</Text>
          <Text style={styles.text}>{item.respiration}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    overflow: 'hidden',
    resizeMode: 'cover',
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
  contentSection: {
    gap: 5,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
  },
  section: {
    flexDirection: 'column', // Alterado para coluna
    width: '100%',
    alignItems: 'flex-start', // Alinhado à esquerda para o texto
  },
  sectionTitle: {
    textAlign: 'left', // Alterado para alinhar à esquerda
    fontSize: 14,
    fontWeight: '600',
    color: '#00695c',
  },
  text: {
    textAlign: 'left', // Alterado para alinhar à esquerda
    fontSize: 12,
    color: '#444444',
  },
});
