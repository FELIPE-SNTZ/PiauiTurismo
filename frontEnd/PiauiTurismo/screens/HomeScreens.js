import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const categories = [
  { id: '1', name: 'Praias', icon: require('../assets/tilhas.jpeg') },
  { id: '2', name: 'Montanhas', icon: require('../assets/tilhas.jpeg') },
  { id: '3', name: 'Cultura', icon: require('../assets/tilhas.jpeg') },
  { id: '4', name: 'Gastronomia', icon: require('../assets/tilhas.jpeg') },
];

const cards = [
  { id: '1', title: 'Praia do Coqueiro', image: require('../assets/tilhas.jpeg') },
  { id: '2', title: 'Serra da Capivara', image: require('../assets/tilhas.jpeg') },
  { id: '3', title: 'Centro Histórico', image: require('../assets/tilhas.jpeg') },
  { id: '4', title: 'Comida Típica', image: require('../assets/tilhas.jpeg') },
];

const popularPlaces = [
  { id: '1', title: 'Praia do Atalaia', image: require('../assets/tilhas.jpeg') },
  { id: '2', title: 'Cachoeira do Urubu', image: require('../assets/tilhas.jpeg') },
  { id: '3', title: 'Restaurante Flutuante', image: require('../assets/tilhas.jpeg') },
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.category}>
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detalhes', { item })}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>
          Local turístico localizado no Piauí, perfeito para visitantes que buscam cultura, natureza ou gastronomia local.
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderPopularPlace = ({ item }) => (
    <View style={styles.popularCard}>
      <Image source={item.image} style={styles.popularImage} />
      <Text style={styles.popularTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <ImageBackground
                source={require('../assets/ponte.jpg')}
                style={styles.header}
                imageStyle={styles.headerImage}
              >
                <View style={styles.overlay} />
                <View style={styles.headerContent}>
                  <Image source={require('../assets/logo.png')} style={styles.logo} />
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image source={require('../assets/iconuser.png')} style={styles.userIcon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.searchBarContainer}>
                  <TextInput
                    style={styles.searchBar}
                    placeholder="Pesquisar destinos..."
                    placeholderTextColor="#666"
                    value={search}
                    onChangeText={setSearch}
                  />
                </View>
              </ImageBackground>
            </View>

            <Text style={styles.sectionTitle}>Categorias</Text>
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesContainer}
            />

            <Text style={styles.sectionTitle}>Mais Visitados</Text>
            <FlatList
              data={popularPlaces}
              renderItem={renderPopularPlace}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.popularContainer}
            />
          </>
        }
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#F39C12" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart" size={24} color="#F39C12" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Map')}>
          <Ionicons name="map" size={24} color="#F39C12" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings" size={24} color="#F39C12" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  headerContainer: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    marginBottom: 10,
  },
  header: {
    height: 220,
    justifyContent: 'flex-end',
    padding: 20,
  },
  headerImage: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBarContainer: {
    marginTop: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D35400',
    marginLeft: 15,
    marginTop: 15,
  },
  categoriesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  category: {
    alignItems: 'center',
    backgroundColor: '#FFE0B2',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 100,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#BF360C',
    fontWeight: '600',
    textAlign: 'center',
  },
  popularContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  popularCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  popularImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  popularTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#FFF0E0',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
