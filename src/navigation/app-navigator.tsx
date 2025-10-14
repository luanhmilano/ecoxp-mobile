import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Login/login.view";
import RegisterScreen from "../screens/Register/register.view";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Bem-vindo" }} />
        <Stack.Screen name="Cadastro" component={RegisterScreen} options={{ title: "Crie sua Conta" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}