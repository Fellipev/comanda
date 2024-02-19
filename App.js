import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sistema</Text>
      <Text style={styles.title}>comanda</Text>
      <TextInput style={styles.input} placeholder='e-mail'/>
      <TextInput style={styles.input} placeholder='senha' secureTextEntry/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#A253F1',
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    padding: 8,
    width:200,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4
  }
});
