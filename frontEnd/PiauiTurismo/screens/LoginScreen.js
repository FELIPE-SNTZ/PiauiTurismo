import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Home'); 
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Bem-vindo ao OiPiauí</Text>
            <Text style={styles.subtitle}>Explore as riquezas e belezas do Nordeste</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                placeholderTextColor="#aaa"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity
                style={[styles.button, loading && { backgroundColor: '#aaa' }]}
                onPress={handleLogin}
                disabled={loading} >
                <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Entrar'}</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Não possui uma conta?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')} >
                    <Text style={styles.loginLink}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF3E0', // Fundo bege claro, remetendo à areia
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#D35400', // Laranja queimado, remetendo ao pôr do sol
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#6C3483', // Roxo suave, remetendo ao crepúsculo
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#D35400', // Laranja queimado para bordas
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#F39C12', // Amarelo quente, remetendo ao sol
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF', // Branco para contraste com o botão
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#6C3483', // Roxo suave para consistência
        marginRight: 5,
    },
    loginLink: {
        color: '#D35400', // Laranja queimado para o link
        fontWeight: 'bold',
    },
});