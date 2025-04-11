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
        navigation.navigate('Home'); // Redireciona para a tela "Home"
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo1.png')} style={styles.logo} />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
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
                <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Login'}</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Não possui uma conta?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')} >
                    <Text style={styles.loginLink}>Faça seu Cadastro</Text>
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
        backgroundColor: '#f2f2f2',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#666',
        marginRight: 5,
    },
    loginLink: {
        color: '#4285F4',
        fontWeight: 'bold',
    },
});