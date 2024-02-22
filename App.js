import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button'
import Comanda from './Comanda';
import Input from './components/Input/index';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  // return <Comanda/>;

  return (
    <View style={styles.container}>
      <Image 
          style={styles.img} 
          source={{
          uri: 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saudável-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1',
        }}/>

      <Text>Sistema</Text>
      <Text style={styles.title}>comanda</Text>
      <Input placeholder='e-mail'/>
      <Input placeholder='senha' secureTextEntry/>
      
      {/* My button's component! */}
      <Button>entrar</Button>
      <Ionicons name="exit-outline" size={24} color="black" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfbff',
    alignItems: 'center',
  },
  title: {
    color: '#A253F1',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    marginTop: 50,
    marginBottom: 20,
    width: 500,
    height: 200,
  }
  
});
