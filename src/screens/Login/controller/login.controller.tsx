import { useState } from "react";
import Login from "../view/login.view";
import { Alert } from "react-native";
import api from "../../../services/api";

export default function LoginController({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await api.post('/auth/login', { email, password });

            const { accessToken } = response.data;

            console.log('Login bem-sucedido! Token:', accessToken);
            Alert.alert('Sucesso!', 'Você está conectado.');

            if (response.status === 200) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Erro', 'Credenciais inválidas.');
            }
        } catch (error) {
            console.error('Falha no login:', error);
            Alert.alert('Erro', 'Não foi possível realizar o login.');
        }
    }

    return (
        <Login 
            navigation={navigation}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
        />
    )
}