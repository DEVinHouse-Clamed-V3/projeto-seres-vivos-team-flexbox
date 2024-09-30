import { View, Text, Image, StyleSheet } from 'react-native';

export default function MoneraCard({ item }) {

    return (

        <View style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.img} />

            <View style={styles.cardRow}>
                <Text style={styles.moneraTitle}>{item.name}</Text>
            </View>

            <View style={styles.cardRow}>
                <Text style={styles.title}>Descrição:</Text>
                <Text >{item.description}</Text>
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
        margin: 8,
        alignSelf: 'center',
        borderRadius: 16,
        resizeMode: 'cover',
    },

    cardRow: {
        marginVertical: 5,
        paddingLeft: 5,
    },

    cardContainer: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 20,
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
        color: '#9400D3',
    },

    moneraTitle: {
        fontWeight: 'bold',
        marginHorizontal: 'auto',
        fontSize: 18,
        color: '#9400D3',
    }

})