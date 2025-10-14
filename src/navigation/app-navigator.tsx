import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/Register/register.view";
import LoginController from "../screens/Login/index.page";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginController} options={{ title: "Bem-vindo" }} />
        <Stack.Screen name="Cadastro" component={RegisterScreen} options={{ title: "Crie sua Conta" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}