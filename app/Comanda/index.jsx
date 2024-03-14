import { StyleSheet, Text, TouchableOpacityBase, View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TouchableOpacity } from "react-native-web";

export default function Comanda({ navigation }) {
    const { user, logout } = useContext(AuthContext);
    
    function handleLogout(){
        logout()
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text>Olá,</Text>
            <Text>{ user.nome }</Text>
            <Input placeholder="comanda"/>
            <Button onPress={() => navigation.navigate('Produtos')}>confirmar</Button>

            <TouchableOpacity onPress={handleLogout}>
                <Text>SAIR</Text>
            </TouchableOpacity>
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