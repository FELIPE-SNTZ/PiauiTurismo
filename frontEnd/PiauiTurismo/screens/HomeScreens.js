import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Index');
  };

  return (
    <ImageBackground
      source={require('../assets/teste.jpeg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
       
        <Image
          source={require('../assets/piauilogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Descubra o Mundo</Text>
        <Text style={styles.subtitle}>
          Estamos aqui para ajudá-lo a explorar o mundo com facilidade
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>INICIAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 150, 
    height: 150, 
    position: 'absolute',
    top: 50, 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;