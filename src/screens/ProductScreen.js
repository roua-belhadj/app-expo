import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProductScreen({ route }) {
  // Si vous passez les données du produit en paramètre, on les récupère ici
  // (pour l'instant, on peut afficher un aperçu statique ou le premier produit)
    return (
    <View style={styles.container}>
        <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png' }} 
        style={styles.image} 
        />
        <Text style={styles.title}>Wild Berry</Text>
        <Text style={styles.price}>160 €</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    },
    title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    },
    price: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
    },
});