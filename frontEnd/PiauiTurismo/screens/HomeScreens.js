import React, { useState } from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,FlatList,ImageBackground,ScrollView,
} from 'react-native';

const categories = [
  { id: '1', name: 'Praias', icon: require('../assets/tilhas.jpeg') },
  { id: '2', name: 'Montanhas', icon: require('../assets/tilhas.jpeg') },
  { id: '3', name: 'Cultura', icon: require('../assets/tilhas.jpeg') },
  { id: '4', name: 'Gastronomia', icon: require('../assets/tilhas.jpeg') },
  { id: '5', name: 'Gastronomia', icon: require('../assets/tilhas.jpeg') },
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
  { id: '4', title: 'Restaurante Flutuante', image: require('../assets/tilhas.jpeg') },
  { id: '5', title: 'Restaurante Flutuante', image: require('../assets/tilhas.jpeg') },
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
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImageSmall} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>
          Localizada a aproximadamente 338 Km de Teresina, pela BR-343, destaca-se como uma das cidades de maior crescimento econômico no país.
        </Text>
      </View>
    </View>
  );

  const renderPopularPlace = ({ item }) => (
    <View style={styles.popularCard}>
      <Image source={item.image} style={styles.popularImage} />
      <Text style={styles.popularTitle}>{item.title}</Text>
    </View>
  );

  return (
<ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
  <ImageBackground
    source={require('../assets/ponte.jpg')}
    style={styles.header}
  >
    <View style={styles.headerContent}>
      <TouchableOpacity>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image
          source={require('../assets/iconuser.png')}
          style={styles.userIcon}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar"
        placeholderTextColor="#000"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  </ImageBackground>

  <View style={styles.categoriesContainer}>
    <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled={true} 
    />
  </View>

  <View style={styles.popularPlacesContainer}>
    <Text style={[styles.sectionTitle, { textAlign: 'center', fontSize: 22, fontFamily: 'serif' }]}>Mais Visitados</Text>
    <FlatList
      data={popularPlaces}
      renderItem={renderPopularPlace}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.popularContainer}
      nestedScrollEnabled={true} 
    />
  </View>

  <View style={styles.cardsContainer}>
    <FlatList
      data={cards}
      renderItem={renderCard}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true} 
    />
  </View>
</ScrollView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 40,
  },
  header: {
    height: 190,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#C0C0C0',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoriesContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
    marginVertical: 10,
  },
  popularContainer: {
    paddingHorizontal: 10,
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
  cardsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    padding: 10,
  },
  cardImageSmall: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  popularPlacesContainer: {
    marginBottom: 20,
  },
  cardsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
