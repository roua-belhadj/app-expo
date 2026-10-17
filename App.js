import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from './src/data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} €</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  itemContainer: {
    width: '50%',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 12,
    color: 'gray',
  },
});