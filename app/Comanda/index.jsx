import { StyleSheet, Text, TextInput, View } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Comanda() {
    return (
        <View style={styles.container}>
            <Text>Olá,</Text>
            <Text>Fellipe Reis</Text>
            <Input placeholder="comanda"/>
            <Button>confirmar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcfbff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});