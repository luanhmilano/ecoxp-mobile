import { View, Text, Button } from "react-native";
import { styles } from "./login.style";

export default function LoginScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Login</Text>
            <Button
                title="Ir para Cadastro"
                onPress={() => navigation.navigate('Cadastro')}
            />
        </View>
    )
}