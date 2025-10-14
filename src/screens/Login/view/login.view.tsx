import { 
    View, 
    Text,
    KeyboardAvoidingView, 
    Platform, 
    TextInput, 
    TouchableOpacity 
} from "react-native";
import { styles } from "../styles/login.style";
import { LoginProps } from "../login.types";

export default function Login({
    navigation,
    email,
    password,
    setEmail,
    setPassword,
    handleLogin
}: Readonly<LoginProps>) {
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text style={styles.title}>ECOXP</Text>
            <Text style={styles.subtitle}>Bem-vindo, explorador!</Text>

            <TextInput 
                style={styles.input}
                placeholder="Seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput 
                style={styles.input}
                placeholder="Sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text>Não tem uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerLink}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}