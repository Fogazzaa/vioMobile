import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import CadastroEventoScreen from './screens/CadastroEventoScreen';
import CadastroOrganizadorScreen from './screens/CadastroOrganizadorScreen';
import CadastroIngressoScreen from './screens/CadastroIngressoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CadastroEvento" component={CadastroEventoScreen} />
        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizadorScreen} />
        <Stack.Screen name="CadastroIngresso" component={CadastroIngressoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
