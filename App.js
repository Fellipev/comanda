
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button'
// import Tela from './Tela';
import Comanda from './app/Comanda';
import Produtos from './app/Produtos';
import Login from './app/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Comanda" component={Comanda} />
        <Stack.Screen name="Produtos" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
