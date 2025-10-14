import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterController from "../screens/Register/index.page";
import LoginController from "../screens/Login/index.page";
import HomeController from "../screens/Home/index.page";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginController} options={{ title: "Bem-vindo" }} />
        <Stack.Screen name="Register" component={RegisterController} options={{ title: "Crie sua Conta" }} />
        <Stack.Screen name="Home" component={HomeController} options={{ title: "Tela Inicial" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}