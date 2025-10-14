import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './register.style';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>
    </View>
  );
}